<template>
  <GroupButtonContainer :type="type" :disabled="disabled" @click="click">
    <template #left-icon>
      <SvgIcon :value="leftIcon" class="left-icon" />
    </template>
    <template #text>
      <span class="title text-default-bold" :class="textClass">
        {{ title }}
      </span>
      <span v-if="subtitle" class="subtitle text-small-regular" :class="textClass">
        {{ subtitle }}
      </span>
    </template>
    <template #right-icon>
      <SvgIcon :value="rightIcon" class="right-icon" />
    </template>
  </GroupButtonContainer>
</template>

<script setup lang="ts">
import GroupButtonContainer from '../group-button-container/GroupButtonContainer.vue';
import { iconValidator, typeValidator } from './validator';
import SvgIcon from '../icons/SvgIcon.vue';
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: typeValidator
  },
  leftIcon: {
    type: String,
    required: true,
    validator: iconValidator
  },
  rightIcon: {
    type: String,
    required: true,
    validator: iconValidator
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const textClass = computed(() => ({
  ['text--highlighted']: props.type === 'highlighted' || props.type === 'completed'
}));

const emit = defineEmits(['click']);
const click = () => {
  if (!props.disabled) {
    emit('click');
  }
};
</script>

<style scoped>
.title {
  color: var(--neutral-20);
}

.subtitle {
  color: var(--neutral-30);
}

.text--highlighted {
  color: var(--primary-text);
}

.left-icon {
  height: 2.5rem;
  width: 2.5rem;
}

.right-icon {
  width: 1.125rem;
  height: 1.125rem;
}
</style>
