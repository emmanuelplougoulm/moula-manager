<template>
  <div class="container">
    <LabelItem
      :text="label"
      :highlighted="isHighlighted"
      :tooltip-title="props.tooltipTitle"
      :tooltip-description="props.tooltipDescription"
    />
    <textarea
      id="text-area"
      data-testid="text-area"
      type="text"
      :placeholder="placeholder"
      :class="textAreaClass"
      class="text-big-regular text-area--default"
      :value="modelValue"
      @input="onChange"
    />
    <ErrorItem :text="errorText" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ErrorItem from '../error/ErrorItem.vue';
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
    type: String,
    required: true
  },
  pattern: {
    type: RegExp,
    required: true
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
  }
});

// eslint-disable-next-line vue/no-setup-props-destructure
const pattern = props.pattern;

let errorText = '';
let textAreaClass = props.required ? 'text-area--highlighted' : '';

const emit = defineEmits(['update:modelValue']);

const isHighlighted = ref(props.required);
const isValid = ref(pattern.test(props.modelValue));

function onChange(event: any): void {
  isValid.value = pattern.test(event.target.value);

  if (props.required) {
    isHighlighted.value = !isValid.value;

    if (isHighlighted.value) {
      errorText = getErrorText(props.required, event.target.value);
      textAreaClass = 'text-area--highlighted';
    } else {
      errorText = '';
      textAreaClass = '';
    }
  }

  if (!props.required) {
    if (!isValid.value) {
      errorText = getErrorText(props.required, event.target.value);
    } else {
      errorText = '';
    }
  }
  emit('update:modelValue', event.target.value);
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

textarea {
  resize: auto;
  padding: 0.75rem 1rem;
  min-height: 7.5rem;
}

textarea:focus {
  outline: 0;
  background-color: var(--neutral-70);
  border: none;
  overflow: hidden;
  box-shadow: none;
}

.text-area--default {
  border-radius: 0.25rem;
  border: none;
  background-color: var(--neutral-80);
  color: var(--neutral-30);
  box-sizing: border-box;
}

.text-area--highlighted {
  border-radius: 0.25rem;
  border: 0.125rem var(--primary-30) solid;
  background-color: var(--primary-90);
  color: var(--primary-30);
}
</style>
