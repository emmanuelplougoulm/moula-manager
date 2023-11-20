<template>
  <span id="label-item" class="label--default">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
// import { computed } from 'vue';

defineProps({
  text: {
    type: String,
    required: true
  }
  //   highlighted: {
  //     type: Boolean,
  //     required: true
  //   },
});

// const labelClass = computed(() => ({
//   [`label--highlighted`]: props.highlighted
// }));
</script>

<style scoped>
/* .label--default {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--neutral-10);
  position: relative;
}
.label--highlighted {
  color: var(--primary-text);
} */
</style>
