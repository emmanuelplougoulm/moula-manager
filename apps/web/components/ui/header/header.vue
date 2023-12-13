<script setup lang="ts">
import NavigationItem from '@/components/commons/navigation-item/navigation-item.vue';
</script>

<template>
  <div class="header-container">
    <div class="app-logo">LOGO</div>
    <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <NavigationItem :link="'/dashboard'" :title="'Dashboard'" />
    <NavigationItem :link="'/portfolio'" :title="'Portfolio'" />
  </div>
</template>

<style scoped>
.header-container {
  border-bottom: 2px var(--color-border-lighter) solid;
  height: var(--app-header-height);
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;
}

.app-logo {
  height: 100%;
  width: var(--collapsed-drawer-width);
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px var(--color-border-lighter) solid;
}
</style>
