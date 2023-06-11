<template>
  <div
    class="tooltip-container"
    data-testid="tooltip"
    @mouseover="showTooltip"
    @touchstart="showTooltip"
    @mouseleave="hideTooltip"
    @touchend="hideTooltip"
  >
    <Info class="info-icon" />
    <div v-show="state.isTooltipVisible" class="tooltip">
      <div v-if="props.title" class="tooltip-title text-small-semi-bold">
        {{ props.title }}
      </div>
      <div class="tooltip-description text-small-regular">
        {{ props.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Info from '../icons/Info.vue';

const state = reactive({
  isTooltipVisible: false
});

const showTooltip = () => {
  state.isTooltipVisible = true;
};

const hideTooltip = () => {
  state.isTooltipVisible = false;
};

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.tooltip-container {
  z-index: 99;
}
.info-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--primary-30);
}

.tooltip-title {
  color: var(--neutral-10);
  line-height: 1.125rem;
}
.tooltip-description {
  color: var(--neutral-20);
  line-height: 1.125rem;
}

.tooltip {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  background-color: #ffffff;
  box-shadow: var(--box-shadow);
  border-radius: 0.25rem;
  word-wrap: break-word;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 2rem;
  z-index: 999;
}
.tooltip:after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  right: 0.75rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 1.25rem 1.25rem 0;
  border-color: transparent #ffffff transparent transparent;
}
</style>
