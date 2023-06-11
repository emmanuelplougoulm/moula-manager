<template>
  <div class="container">
    <color-item color-name="success-30" />
    <color-item color-name="success-90" />
    <color-item color-name="info-30" />
    <color-item color-name="info-90" />
    <color-item color-name="warning-30" />
    <color-item color-name="warning-90" />
    <color-item color-name="error-30" />
    <color-item color-name="error-90" />
  </div>
</template>

<script setup lang="ts">
import ColorItem from '../ColorItem.vue';
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
</style>
