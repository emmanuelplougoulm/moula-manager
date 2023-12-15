<template>
  <div class="tab-group-container">
    <div
      class="tab-item"
      @click="onClick(option)"
      :class="{ selected: modelValue === option }"
      v-for="(option, index) in options"
      :key="index"
    >
      {{ option }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: {
    type: String,
    required: true,
    default: ''
  },
  options: {
    type: Array as () => string[],
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const onClick = (option: string) => {
  emit('update:modelValue', option);
};
</script>

<style scoped>
.tab-group-container {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  border-radius: var(--border-radius-base);
  width: 100%;
}

.tab-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 30px;
  border-radius: var(--border-radius-base);
  background-color: var(--color-bg-lighter);
  cursor: pointer;
}
.tab-item:hover {
  background-color: var(--color-bg-lightest);
}
.tab-item.selected {
  border: 1px #6cf5c7 solid;
  color: #6cf5c7;
}
</style>
