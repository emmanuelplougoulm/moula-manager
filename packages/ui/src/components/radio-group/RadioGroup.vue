<template>
  <InputGroupContainer
    :label="label"
    :tooltip-title="tooltipTitle"
    :tooltip-description="tooltipDescription"
    :selected="!!selectedOption"
  >
    <div v-for="option in options" :key="option.id">
      <input
        :id="option.value"
        v-model="selectedOption"
        type="radio"
        :value="option.value"
        :name="name"
        :data-testid="`input-${option.id}`"
        :disabled="option.disabled"
        @change="onChange"
      />
      <label class="text-big-regular" :for="option.value">
        <div class="icon-container">
          <RadioButtonChecked v-if="checked(option)" class="icon" />
          <RadioButtonUnchecked v-else class="icon" />
        </div>
        {{ option.text }}
      </label>
    </div>
  </InputGroupContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputGroupContainer from '../input-group-container/InputGroupContainer.vue';
import RadioButtonChecked from '../icons/RadioButtonChecked.vue';
import RadioButtonUnchecked from '../icons/RadioButtonUnchecked.vue';
import type { InputOptionType } from '../../types';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  options: {
    type: Array as () => InputOptionType[],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  tooltipTitle: {
    type: String,
    default: undefined
  },
  tooltipDescription: {
    type: String,
    default: undefined
  }
});

const selectedOption = ref(props.modelValue);
const checked = (option: InputOptionType) => selectedOption.value === option.value;

const emit = defineEmits(['update:modelValue']);

const onChange = () => {
  emit('update:modelValue', selectedOption.value);
};
</script>

<style scoped>
input {
  display: none;
}

label {
  display: flex;
  align-items: center;
  color: var(--neutral-20);
  background-color: var(--neutral-100);
  cursor: pointer;
  padding: 0.8125rem 1rem;
  gap: 0.5rem;
  line-height: 1.375rem;
  outline: 0.063rem solid var(--neutral-60);
  border-radius: 0.25rem;
}

label:hover {
  background-color: var(--neutral-80);
}

input:checked + label {
  outline: 0.125rem solid var(--neutral-20);
  border-radius: 0.125rem;
  background-color: var(--neutral-80);
}

input:disabled + label {
  opacity: 0.3;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-sizing: border-box;
}

.icon {
  color: var(--neutral-40);
  width: 1.375rem;
  height: 1.375rem;
}
</style>
