<script setup lang="ts">
import Header from '@/components/ui/header/header.vue';
</script>

<template>
  <div class="app-container">
    <Header />
    <NuxtPage />
    <div id="modal-root" />
  </div>
</template>

<style scoped>
.app-container {
  /* border: 1px red solid; */
  /* height: 90vh; */
}
</style>
