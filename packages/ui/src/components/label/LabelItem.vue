<template>
  <span
    id="label-item"
    class="text-small-semi-bold label--default"
    data-testid="label-item"
    :class="labelClass"
  >
    {{ text }}
    <TooltipItem
      v-if="tooltipTitle || tooltipDescription"
      :title="tooltipTitle"
      :description="tooltipDescription"
    />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TooltipItem from '../tooltip/TooltipItem.vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  highlighted: {
    type: Boolean,
    required: true
  },
  tooltipTitle: {
    type: String,
    default: undefined
  },
  tooltipDescription: {
    type: String,
    default: undefined
  }
});

const labelClass = computed(() => ({
  [`label--highlighted`]: props.highlighted
}));
</script>

<style scoped>
.label--default {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--neutral-10);
  position: relative;
}
.label--highlighted {
  color: var(--primary-text);
}
</style>
