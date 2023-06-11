<template>
  <div class="container">
    <div class="text-big-regular select" data-testid="select" @click="toggle">
      <SvgIcon :value="modelValue" class="select-flag" />
      <KeyboardArrowDown class="select-arrow-down" />
    </div>
    <div v-show="opened" class="options">
      <div
        v-for="option in options"
        :key="option.id"
        class="text-big-regular option"
        :data-testid="`option-${option.id}`"
        @click="selectOption(option)"
      >
        <Check v-show="showOptionCheck(option.value)" class="option-check" />
        <div class="option-text">
          {{ option.text }}
        </div>
        <SvgIcon :value="option.value" class="option-flag" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import KeyboardArrowDown from '../icons/KeyboardArrowDown.vue';
import Check from '../icons/Check.vue';
import SvgIcon from '../icons/SvgIcon.vue';
import type { DropdownOptionType } from '../../types';

const props = defineProps({
  options: {
    type: Array as () => DropdownOptionType[],
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
});

const opened = ref(false);

const showOptionCheck = (value: string) => {
  return value === props.modelValue;
};
const toggle = () => {
  opened.value = !opened.value;
};
const emit = defineEmits(['update:model-value']);
const selectOption = (option: DropdownOptionType) => {
  opened.value = false;
  emit('update:model-value', option.value);
};
</script>

<style scoped>
.container {
  position: relative;
}

:is(.select, .option) {
  box-sizing: border-box;
  cursor: pointer;
}

.select {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.select-arrow-down {
  color: var(--neutral-30);
  width: 1.5rem;
  height: 1.5rem;
}

.select-flag {
  width: 1.625rem;
  height: 1.625rem;
}

.options {
  color: var(--neutral-20);
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  background-color: var(--neutral-100);
  position: absolute;
  top: 1.625rem;
  right: 0;
  width: 10.75rem;
  z-index: 1;
}

.option {
  padding: 0.75rem 1rem 0.75rem 0.5rem;
  display: grid;
  grid-template-columns: 1.25rem 1fr 1.25rem;
  grid-template-areas: 'icon text flag';
  align-items: center;
  gap: 0.5rem;
  line-height: 1.375rem;
}

.option:not(:first-child) {
  border-top: 0.063rem solid var(--neutral-75);
}

.option-check {
  grid-area: icon;
  color: var(--neutral-20);
  width: 1.25rem;
  height: 1.25rem;
}

.option-text {
  grid-area: text;
}

.option-flag {
  grid-area: flag;
  width: 1.313rem;
  height: 1.313rem;
}
</style>
