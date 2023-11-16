<script setup lang="ts">
// import { reactive } from 'vue';

defineProps({
  text: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['click']);

function onClick() {
  emit('click');
}
</script>

<template>
  <button class="button" type="button" v-bind="$attrs" @click="onClick">
    {{ text }}
  </button>
</template>

<style scoped>
.button {
  border: 3px white solid;
  width: 150px;
  height: 20px;
  /* color: white; */
  cursor: pointer;
}
</style>
