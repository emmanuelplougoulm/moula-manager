<script setup lang="ts">
import NavigationItem from '@/components/commons/navigation-item/navigation-item.vue';
</script>

<template>
  <div class="drawer-container">
    <NavigationItem :link="'/dashboard'" />
    <NavigationItem :link="'/wallet'" />
  </div>
</template>

<style scoped>
.drawer-container {
  display: flex;
  flex-direction: column;
  border: 1px violet solid;
  height: 100%;
}
</style>
