<template>
  <button type="button" :class="classes" :disabled="isDisabled" v-bind="$attrs" @click="onClick">
    <span v-if="hasText">
      {{ text }}
    </span>
    <component :is="icon" v-if="hasIcon" :icon-color="iconColor"></component>
  </button>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { iconValidator, iconPositionValidator, stateValidator, typeValidator } from './validator';
const innerProps = defineProps({
  icon: {
    type: String,
    validator: iconValidator,
    default: 'ArrowForwardIOS'
  },
  iconPosition: {
    type: String,
    default: 'no-icon',
    validator: iconPositionValidator
  },
  text: {
    type: String,
    default: ''
  },
  state: {
    type: String,
    validator: stateValidator,
    default: 'enabled'
  },
  type: {
    type: String,
    default: 'primary',
    validator: typeValidator
  }
});

const props = reactive(innerProps);
const classes = computed(() => ({
  [`button--${props.iconPosition}`]: props.iconPosition !== 'no-icon',
  [`button--${props.type || 'primary'}`]: true,
  ['text-small-regular']: props.type === 'link',
  ['text-big-regular']: props.type !== 'link'
}));
const iconColor = computed(() =>
  props.type === 'primary' ? 'var(--primary-text-contrast)' : 'var(--primary-text)'
);
const hasIcon = computed(() => props.iconPosition !== 'no-icon');
const hasText = computed(() => props.iconPosition !== 'icon-only');
const isDisabled = computed(() => props.state === 'disabled');
const emit = defineEmits(['click']);

function onClick() {
  emit('click');
}
</script>

<style scoped>
button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  gap: 0.5rem;
  height: 3rem;
  border: none;
}

.button--primary {
  background-color: var(--primary-30);
  color: var(--primary-text-contrast);
}
.button--primary:hover {
  background-color: var(--primary-20);
}

.button--secondary {
  background-color: var(--neutral-100);
  color: var(--primary-text);
  border: 0.063rem solid var(--primary-30);
}

.button--secondary:hover {
  color: var(--primary-text-hover);
  background-color: var(--primary-90);
}

.button--icon-only {
  width: 3rem;
}

.button--left-icon {
  flex-direction: row-reverse;
}

.button--link {
  background-color: transparent;
  color: var(--primary-text);
  text-decoration: underline;
}

button:disabled {
  opacity: 0.3;
}
</style>
