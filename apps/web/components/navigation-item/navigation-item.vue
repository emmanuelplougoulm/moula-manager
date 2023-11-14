<script setup lang="ts">
defineProps({
  // title: {
  //   type: String,
  //   required: true
  // },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
  <NuxtLink class="navigation-container" :to="link">{{ link }}</NuxtLink>
</template>

<style scoped>
.navigation-container {
  padding: 10px;
  height: 30px;
}
</style>
