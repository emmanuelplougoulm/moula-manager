<template>
  <div class="container">
    <LabelItem
      :text="label"
      :highlighted="isHighlighted"
      :tooltip-title="props.tooltipTitle"
      :tooltip-description="props.tooltipDescription"
    />
    <input
      id="text-input"
      v-model="inputValue"
      data-testid="text-input"
      type="text"
      :placeholder="placeholder"
      :class="inputClass"
      class="text-big-regular input--default"
    />
    <CaptionItem :text="caption" />
    <ErrorItem :text="errorText" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ErrorItem from '../error/ErrorItem.vue';
import CaptionItem from '../caption/CaptionItem.vue';
import LabelItem from '../label/LabelItem.vue';
import { getErrorText } from '../../utils/commons';

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
  pattern: {
    type: RegExp,
    default: /./
  },
  required: {
    type: Boolean,
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
  caption: {
    type: String,
    default: undefined
  }
});

let errorText = '';
const emit = defineEmits(['update:modelValue']);
const inputValue = ref(props.modelValue.value);
const isValid = ref(props.pattern.test(inputValue.value));
const isHighlighted = ref(props.required && !isValid.value);
let inputClass = props.required && !isValid.value ? 'input--highlighted' : '';

watch(inputValue, (newValue: string) => {
  isValid.value = props.pattern.test(newValue);

  if (props.required) {
    isHighlighted.value = !isValid.value;

    if (isHighlighted.value) {
      errorText = getErrorText(props.required, newValue);
      inputClass = 'input--highlighted';
    } else {
      errorText = '';
      inputClass = '';
    }
  }
  if (!props.required) {
    if (!isValid.value) {
      errorText = getErrorText(props.required, newValue);
    } else {
      errorText = '';
    }
  }
  emit('update:modelValue', { value: newValue, isValid: isValid.value });
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
