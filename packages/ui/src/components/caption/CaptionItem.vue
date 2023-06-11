<template>
  <span v-if="text" data-testid="caption-item" class="text-small-regular">
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
  color: var(--neutral-40);
}
</style>
