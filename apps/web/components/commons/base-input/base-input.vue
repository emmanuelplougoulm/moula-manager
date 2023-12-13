<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);

defineProps({
  label: {
    type: [String, Boolean],
    default: false
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
});
</script>

<style lang="css" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.input-wrapper input {
  font-size: 13px;
  height: 3rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--color-bg-lighter);
  box-sizing: border-box;
  color: white;
}
</style>
