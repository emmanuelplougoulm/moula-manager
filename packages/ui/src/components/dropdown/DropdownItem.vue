<template>
  <div class="container">
    <LabelItem
      class="label"
      :data-testid="`label`"
      :text="label"
      :highlighted="!selected"
      :tooltip-title="props.tooltipTitle"
      :tooltip-description="props.tooltipDescription"
    />
    <div class="select-container">
      <div
        :data-testid="`select`"
        class="text-big-regular select"
        :class="selectClasses"
        @click="toggle"
      >
        <span class="select-text">
          {{ selectedText }}
        </span>
        <KeyboardArrowDown class="select-icon" :class="iconClass" />
      </div>
      <div v-show="opened" class="options">
        <div
          v-for="option in options"
          :key="option.id"
          class="text-big-regular option"
          :data-testid="`option-${option.id}`"
          @click="selectOption(option)"
        >
          <Check v-show="showOptionCheck(option.id)" class="option-icon" />
          <span class="option-text">{{ option.text }}</span>
        </div>
      </div>
    </div>
    <ErrorItem :text="errorText" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineExpose } from 'vue';
import KeyboardArrowDown from '../icons/KeyboardArrowDown.vue';
import Check from '../icons/Check.vue';
import ErrorItem from '../error/ErrorItem.vue';
import LabelItem from '../label/LabelItem.vue';
import type { DropdownOptionType } from '../../types';
// import useDetectOutsideClick from '../../composables/useDetectOutsideClick';

const props = defineProps({
  placeholder: {
    type: String,
    required: true
  },
  modelValue: {
    type: Object,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array as () => DropdownOptionType[],
    required: true
  },
  error: {
    type: String,
    default: undefined
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

const selectedOption = ref(props.modelValue);
const selectedText = computed(() => selectedOption.value.text ?? props.placeholder);
const selected = computed(() => Object.keys(selectedOption.value).length > 0);
const opened = ref(false);
const errorText = ref(props.error);

const selectClasses = computed(() => ({
  ['selected-colors selected-border']: selected.value
}));
const iconClass = computed(() => ({
  ['selected-colors']: selected.value
}));

const showOptionCheck = (id: number) => {
  return id === selectedOption.value.id;
};
const toggle = () => {
  opened.value = !opened.value;
  console.log('am inside');
};

function closeModal() {
  // opened.value = false;
  console.log('am triggered');
}

defineExpose({ closeModal });

// const select = ref(null);
// console.log('selectRef');
// useDetectOutsideClick(select, closemodal);

const emit = defineEmits(['update:modelValue']);
const selectOption = (option: DropdownOptionType) => {
  errorText.value = '';
  selectedOption.value = option;
  opened.value = false;
  emit('update:modelValue', option);
};
</script>

<style scoped>
.label {
  z-index: 0;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.select-container {
  max-height: 3.25rem;
}

:is(.select, .option) {
  box-sizing: border-box;
  cursor: pointer;
}

.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  border: 0.125rem solid var(--primary-30);
  background-color: var(--primary-90);
  color: var(--primary-text);
  position: relative;
  z-index: 0;
}

.select-text {
  padding-right: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.select-icon {
  color: var(--primary-30);
  width: 1.5rem;
  height: 1.5rem;
}

.selected-colors {
  background-color: var(--neutral-80);
  color: var(--neutral-20);
}

.selected-border {
  border: 0.063rem solid var(--neutral-60);
}

.options {
  z-index: 99;
  max-height: 21rem;
  overflow-y: scroll;
  color: var(--neutral-20);
  border-radius: 0rem 0rem 0.25rem 0.25rem;
  box-shadow: var(--box-shadow);
  background-color: var(--neutral-100);
  position: relative;
}

.option {
  padding: 0.75rem 1rem 0.75rem 0.5rem;
  display: grid;
  grid-template-columns: 1.25rem 1fr;
  grid-template-areas: 'icon text';
  align-items: center;
  gap: 0.5rem;
  line-height: 1.375rem;
}
.option:hover {
  background-color: var(--neutral-80);
}

.option:not(:first-child) {
  border-top: 0.063rem solid var(--neutral-75);
}

.option-icon {
  grid-area: icon;
  color: var(--neutral-20);
  width: 1.25rem;
  height: 1.25rem;
}

.option-text {
  grid-area: text;
}
</style>
