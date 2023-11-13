<script setup lang="ts">
const colorMode = useColorMode();

console.log(colorMode.preference);
</script>

<template>
  <div class="header-container">
    THIS IS A HEADER
    <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<style scoped>
.header-container {
  border: 1px yellow solid;
  height: 60px;
}
</style>
