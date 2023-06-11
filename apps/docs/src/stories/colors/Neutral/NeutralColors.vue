<template>
  <div class="container">
    <color-item color-name="neutral-0" />
    <color-item color-name="neutral-10" />
    <color-item color-name="neutral-20" />
    <color-item color-name="neutral-30" />
    <color-item color-name="neutral-40" />
    <color-item color-name="neutral-60" />
    <color-item color-name="neutral-70" />
    <color-item color-name="neutral-75" />
    <color-item color-name="neutral-80" />
    <color-item color-name="neutral-85" />
    <color-item color-name="neutral-90" />
    <color-item color-name="neutral-100" />
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
