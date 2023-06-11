<template>
  <div class="container">
    <div class="primary-container">
      <color-item color-name="primary-0" />
      <color-item color-name="primary-10" />
      <color-item color-name="primary-20" />
      <color-item color-name="primary-30" />
      <color-item color-name="primary-40" />
      <color-item color-name="primary-50" />
      <color-item color-name="primary-60" />
      <color-item color-name="primary-70" />
      <color-item color-name="primary-75" />
      <color-item color-name="primary-80" />
      <color-item color-name="primary-90" />
      <color-item color-name="primary-100" />
    </div>
    <div class="additional-primary-container">
      <color-item color-name="primary-text" />
      <color-item color-name="primary-text-hover" />
      <color-item color-name="primary-text-contrast" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorItem from '../ColorItem.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.primary-container,
.additional-primary-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
</style>
