<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    default: ''
  },
  options: {
    type: Array,
    required: true
  }
});

// const selectedOption = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

const onClick = (option) => {
  emit('update:modelValue', option);
};
</script>

<template>
  <div class="tab-group-container">
    <div v-for="(option, index) in options" :key="index">
      <div @click="onClick(option)">{{ option }}</div>
    </div>
  </div>
</template>

<style scoped>
.tab-group-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  border-radius: var(--border-radius-base);
  width: 100%;
}

.tab-group-container div {
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 4px;
  border-radius: var(--border-radius-base);
  padding: 2px;
  background-color: var(--color-bg-lighter);
  cursor: pointer;
}
</style>
