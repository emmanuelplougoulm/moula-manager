<template>
  <div class="container">
    <LabelItem
      :text="label"
      :highlighted="isHighlighted"
      :tooltip-title="tooltipTitle"
      :tooltip-description="tooltipDescription"
    />
    <input
      :value="formattedDate"
      :placeholder="placeholder"
      data-testid="date-input"
      :class="inputClass"
      class="input input--default text-big-regular"
      maxlength="10"
      @input="onChange"
      @blur="validateInput"
      @focus="resetValidation"
    />
    <ErrorItem :text="errorText" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ErrorItem from '../error/ErrorItem.vue';
import LabelItem from '../label/LabelItem.vue';
import { getErrorText } from '../../utils/commons';
import { dayFormat, dayMonthFormat } from './regex';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Object,
    required: true
  },
  tooltipTitle: {
    type: String,
    default: undefined
  },
  tooltipDescription: {
    type: String,
    default: undefined
  },
  required: {
    type: Boolean,
    default: false
  }
});

const formattedDate = ref(props.modelValue.value);
const errorText = ref('');
const isValid = ref(true);

const isHighlighted = computed(() => {
  const isMissingAndRequired = !formattedDate.value && props.required;
  return !isValid.value || isMissingAndRequired;
});
const inputClass = computed(() => ({
  ['input--highlighted']: isHighlighted.value
}));

const updateErrorText = () => {
  errorText.value = isHighlighted.value ? getErrorText(props.required, formattedDate.value) : '';
};
const resetValidation = () => {
  isValid.value = true;
};
const validateInput = () => {
  if (formattedDate.value) {
    isValid.value = dayjs(formattedDate.value, 'DD/MM/YYYY', true).isValid();
  }
  updateErrorText();
};
const formatDate = (value: string) => {
  if (!value) {
    resetValidation();
    return '';
  } else if (dayFormat.test(value) || dayMonthFormat.test(value)) {
    return value + '/';
  } else {
    return value;
  }
};
const emit = defineEmits(['update:modelValue']);
const onChange = (event: any): void => {
  const value = event.target.value;
  formattedDate.value = formatDate(value);
  if (value.length === 10) {
    validateInput();
    emit('update:modelValue', { value, isValid: isValid.value });
  }
  updateErrorText();
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input {
  width: 10rem;
}

input:focus-visible {
  outline: 0;
  background-color: var(--neutral-70);
  border: none;
  overflow: hidden;
  box-shadow: none;
}

.input--default {
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--neutral-80);
  box-sizing: border-box;
}

.input--highlighted {
  border: 0.125rem var(--primary-30) solid;
  background-color: var(--primary-90);
  color: var(--primary-30);
}
</style>
