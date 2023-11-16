<script setup lang="ts">
import { ref } from 'vue';

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
  }
  //   pattern: {
  //     type: RegExp,
  //     default: /./
  //   }
  //   required: {
  //     type: Boolean,
  //     required: true
  //   },
  //   tooltipTitle: {
  //     type: String,
  //     default: undefined
  //   },
  //   tooltipDescription: {
  //     type: String,
  //     default: undefined
  //   },
  //   caption: {
  //     type: String,
  //     default: undefined
  //   }
});

const emit = defineEmits(['update:modelValue']);
const inputValue = ref(props.modelValue.value);

const handleInputChange = () => {
  emit('update:modelValue', inputValue);
};
</script>

<template>
  <div class="container">
    <label>{{ label }}</label>
    <input
      id="text-input"
      v-model="inputValue"
      @input="handleInputChange"
      type="text"
      :placeholder="placeholder"
      :class="inputClass"
      class="input--default"
    />
    <!-- <CaptionItem :text="caption" /> -->
    <!-- <ErrorItem :text="errorText" /> -->
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input--default {
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--color-bg-lighter);
  box-sizing: border-box;
  color: white;
}
</style>
