<template>
  <div class="tab-group-container">
    <div v-for="(option, index) in options" :key="index">
      <div @click="onClick(option)">{{ option }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

.tab-group-container div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 30px;
  border-radius: var(--border-radius-base);
  background-color: var(--color-bg-lighter);
  cursor: pointer;
}
</style>
