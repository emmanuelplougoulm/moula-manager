<template>
  <div class="container">
    <color-item color-name="secondary-0" />
    <color-item color-name="secondary-10" />
    <color-item color-name="secondary-20" />
    <color-item color-name="secondary-30" />
    <color-item color-name="secondary-40" />
    <color-item color-name="secondary-50" />
    <color-item color-name="secondary-60" />
    <color-item color-name="secondary-70" />
    <color-item color-name="secondary-75" />
    <color-item color-name="secondary-80" />
    <color-item color-name="secondary-90" />
    <color-item color-name="secondary-100" />
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
