<template>
  <span v-if="text" id="error-item" data-testid="error-item" class="text-small-regular">
    {{ props.text }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
span {
  color: var(--error-30);
}
</style>
