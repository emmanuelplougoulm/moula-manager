<script setup lang="ts">
// import { reactive } from 'vue';

defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="button">{{ text }}</div>
</template>

<style scoped>
.button {
  border: 3px white solid;
  width: 150px;
}
</style>
