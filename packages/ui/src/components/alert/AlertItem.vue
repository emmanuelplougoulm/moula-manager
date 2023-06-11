<template>
  <p class="text-default-regular">
    {{ text }}
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { colorTypeValidator } from './validator';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  colorType: {
    type: String,
    default: 'primary',
    validator: colorTypeValidator
  }
});

const color = computed(() => `var(--${props.colorType}-30)`);
const backgroundColor = computed(() => `var(--${props.colorType}-90)`);
</script>

<style scoped>
p {
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  line-height: 1.188rem;
  color: v-bind(color);
  background-color: v-bind(backgroundColor);
  margin: 0;
}
</style>
