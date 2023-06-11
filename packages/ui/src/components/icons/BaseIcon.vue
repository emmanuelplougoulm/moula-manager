<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconColor: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.125rem;
  height: 1.125rem;
}

:slotted(svg) {
  fill: currentColor;
  color: v-bind(iconColor);
}
</style>
