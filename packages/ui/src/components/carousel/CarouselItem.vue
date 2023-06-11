<template>
  <div class="container">
    <div class="slides-container">
      <div v-for="(slide, index) in slides" :key="`slide-${index}`">
        <component :is="slide.svg" class="slide-image" />
        <h2 class="slide-title">
          {{ slide.title }}
        </h2>
        <div class="slide-description text-default-regular">
          {{ slide.description }}
        </div>
      </div>
    </div>
    <div class="dots-container">
      <div
        v-for="(slide, index) in slides"
        :key="`dot-${index}`"
        class="dot"
        :data-testid="`dot-${index}`"
        :class="getActiveClass(index)"
        @click="goToSlide(index)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { SlideType } from './type';

function getActiveClass(index: number) {
  return currentIndex.value === index ? 'active' : '';
}

const props = defineProps({
  slides: {
    type: Array as () => SlideType[],
    required: true,
    default: () => []
  }
});

const transform = computed(() => {
  return `translateX(-${(currentIndex.value * 100) / props.slides.length}%)`;
});

const currentIndex = ref(0);
const goToSlide = (index: number) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
  max-width: 21.875rem;
}

.slides-container {
  display: inline-flex;
  flex-shrink: 0;
  transition: transform 0.5s ease-in-out;
  transform: v-bind(transform);
}

.slide-image {
  width: 21.875rem;
  height: 21.875rem;
  border-radius: 0.3125rem;
}

:is(.slide-title, .slide-description) {
  text-align: center;
}

.slide-title {
  margin: 1.5rem 0 0 0;
}

.slide-description {
  line-height: 1.2rem;
  margin: 0.625rem 0 3.0313rem 0;
  color: var(--neutral-30);
  padding: 0 1.5rem;
}

.dots-container {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--neutral-70);
  cursor: pointer;
}

.dot.active {
  background-color: var(--primary-30);
}
</style>
