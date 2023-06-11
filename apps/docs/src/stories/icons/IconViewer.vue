<template>
  <div class="container">
    <component :is="icon" v-if="hasIcon" :icon-color="iconColor"></component>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: false
  },
  type: {
    type: String,
    default: 'primary'
  }
});

const iconColor = computed(() =>
  props.type === 'primary' ? 'var(--primary-text-contrast)' : 'var(--primary-text)'
);
const hasIcon = computed(() => !!props.icon);
const backgroundColor = computed(() =>
  props.type === 'primary' ? 'var(--primary-30)' : 'var(--neutral-100)'
);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.5rem;
  background-color: v-bind(backgroundColor);
}
</style>
