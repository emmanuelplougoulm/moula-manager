<template>
  <div class="container">
    <LabelItem
      :text="label"
      :highlighted="!selected"
      :tooltip-title="tooltipTitle"
      :tooltip-description="tooltipDescription"
    />
    <slot></slot>
    <ErrorItem :text="error" />
  </div>
</template>

<script setup lang="ts">
import ErrorItem from '../error/ErrorItem.vue';
import LabelItem from '../label/LabelItem.vue';

defineProps({
  label: {
    type: String,
    required: true
  },
  error: {
    type: String,
    default: ''
  },
  tooltipTitle: {
    type: String,
    default: undefined
  },
  tooltipDescription: {
    type: String,
    default: undefined
  },
  selected: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
</style>
