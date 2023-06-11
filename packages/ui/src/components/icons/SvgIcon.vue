<template>
  <component :is="value" v-if="value" :alt="value"></component>
</template>

<script setup lang="ts">
defineProps({
  value: { type: String, required: true }
});
</script>
