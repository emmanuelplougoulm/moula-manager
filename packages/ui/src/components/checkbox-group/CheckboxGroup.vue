<template>
  <InputGroupContainer
    :label="label"
    :error="errorText"
    :tooltip-title="tooltipTitle"
    :tooltip-description="tooltipDescription"
    :selected="selected"
  >
    <div v-for="option in options" :key="option.id">
      <input
        :id="option.value"
        v-model="selectedOptions"
        type="checkbox"
        :value="option.value"
        :name="name"
        :data-testid="`input-${option.id}`"
        :disabled="option.disabled"
        @change="onChange"
      />
      <label class="text-big-regular" :for="option.value">
        <div class="icon-container">
          <Check class="icon" />
        </div>
        {{ option.text }}
      </label>
    </div>
  </InputGroupContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import InputGroupContainer from '../input-group-container/InputGroupContainer.vue';
import Check from '../icons/Check.vue';
import type { InputOptionType } from '../../types';

const props = defineProps({
  options: {
    type: Array as () => InputOptionType[],
    required: true
  },
  name: {
    type: String,
    required: true
  },
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
  }
});

const selectedOptions = ref([]);
const selected = computed(() => selectedOptions.value.length > 0);
const errorText = ref(props.error);

const emit = defineEmits(['select:options']);

const onChange = () => {
  errorText.value = !selected.value ? 'Required' : '';
  emit('select:options', selectedOptions.value);
};
</script>

<style scoped>
input {
  display: none;
}

label {
  display: flex;
  align-items: center;
  color: var(--neutral-20);
  background-color: var(--neutral-100);
  cursor: pointer;
  padding: 0.8125rem 1rem;
  gap: 0.75rem;
  line-height: 1.375rem;
  outline: 0.063rem solid var(--neutral-60);
  border-radius: 0.25rem;
}

label:hover {
  background-color: var(--neutral-80);
}

input:checked + label {
  outline: 0.125rem solid var(--neutral-20);
  border-radius: 0.125rem;
  background-color: var(--neutral-80);
}

input:disabled + label {
  opacity: 0.3;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 0.125rem;
  transition: all 0.2s;
  border: 0.125rem solid var(--neutral-40);
  background-color: var(--neutral-100);
  box-sizing: border-box;
}

input:checked + label > .icon-container {
  background-color: var(--neutral-40);
}

.icon {
  color: var(--neutral-100);
  width: 1.25rem;
  height: 1.25rem;
}
</style>
