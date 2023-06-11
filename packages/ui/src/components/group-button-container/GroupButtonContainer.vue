<template>
  <div class="container">
    <button
      type="button"
      class="button"
      :class="buttonClasses"
      :disabled="disabled"
      data-testid="button"
    >
      <div class="icon-text-container">
        <div class="icon-container">
          <slot name="left-icon"></slot>
        </div>
        <div class="text-container">
          <slot name="text"></slot>
        </div>
      </div>
      <div :class="iconClass">
        <slot name="right-icon"></slot>
      </div>
    </button>
    <slot name="more-options"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const isCompleted = computed(() => props.type === 'completed');
const buttonClasses = computed(() => ({
  ['button--ghost']: props.type === 'ghost',
  ['button--highlighted']: props.type === 'highlighted',
  ['button--completed']: props.type === 'completed'
}));
const iconClass = computed(() => ({
  ['right-icon--completed']: isCompleted.value
}));
</script>

<style scoped>
.container {
  position: relative;
}
.button {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  padding: 0.75rem 1.25rem;
  gap: 1rem;
  color: var(--neutral-40);
  background-color: var(--neutral-100);
  outline: 0.0625rem solid var(--neutral-60);
  cursor: pointer;
  border: none;
}

.button:hover {
  background-color: var(--neutral-80);
}

.button--ghost {
  outline: 0.125rem dashed var(--neutral-60);
}

.button--completed {
  color: var(--primary-text);
  outline: 0.0625rem solid var(--primary-30);
  background-color: var(--primary-90);
  align-items: flex-start;
}

.button--highlighted {
  color: var(--primary-text);
  outline: 0.125rem solid var(--primary-30);
}

.button:disabled {
  opacity: 0.3;
  pointer-events: none;
}

.button--completed:hover,
.button--highlighted:hover {
  opacity: 1;
  background-color: var(--primary-90);
}

.icon-text-container {
  display: flex;
  gap: 1rem;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: left;
  align-self: center;
}

.icon-container {
  height: 2.5rem;
}

.right-icon--completed {
  align-self: top;
  opacity: 0.3;
  padding-top: 0.25rem;
}

.button--completed:hover .right-icon--completed {
  opacity: 1;
}
</style>
