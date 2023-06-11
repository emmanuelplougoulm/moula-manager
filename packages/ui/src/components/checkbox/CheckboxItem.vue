<template>
  <div>
    <input
      id="checkbox"
      v-model="checked"
      class="input"
      type="checkbox"
      data-testid="input"
      @change="onChange"
    />
    <label class="label text-big-regular container" :class="labelClass" for="checkbox">
      <Check class="icon" :class="iconClass" />
      <span class="text">{{ text }}</span>
      <ErrorItem class="error" :text="errorText" />
    </label>
  </div>
</template>

<script setup lang="ts">
import ErrorItem from '../error/ErrorItem.vue';
import { ref, computed } from 'vue';
import Check from '../icons/Check.vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  },
  error: {
    type: String,
    default: ''
  }
});

const checked = ref(false);
const errorText = ref(props.error);

const iconClass = computed(() => ({
  ['icon--checked']: checked.value,
  ['icon--highlighted']: props.required
}));
const labelClass = computed(() => ({
  ['label--highlighted']: !checked.value && props.required
}));

const emit = defineEmits(['update:checked']);
const onChange = () => {
  errorText.value = !checked.value && props.required ? 'Required' : '';
  emit('update:checked', checked.value);
};
</script>

<style scoped>
.input {
  display: none;
}
.label {
  display: grid;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: 1.5rem 1fr;
  grid-template-areas:
    'icon text'
    'none error';
  color: var(--neutral-20);
  cursor: pointer;
  gap: 0.5rem;
}

.label--highlighted {
  color: var(--primary-30);
}

.icon {
  grid-area: icon;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s;
  border: 0.125rem solid var(--neutral-40);
  background-color: var(--neutral-100);
  color: var(--neutral-100);
}

.icon:hover {
  border: 0.125rem solid var(--primary-30);
}

.icon--checked {
  grid-area: icon;
  border: 0.125rem solid var(--primary-30);
  background-color: var(--primary-30);
}

.icon--highlighted {
  border: 0.125rem solid var(--primary-30);
}

.text {
  grid-area: text;
}

.error {
  grid-area: error;
}
</style>
