<template>
  <div class="container">
    <span class="name">{{ colorName }}</span>
    <div class="color" :style="`background-color: var(--${colorName});`"></div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  colorName: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.color {
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.5rem;
}

.name {
  font-weight: 700;
  color: #274064;
  align-self: center;
}
</style>
