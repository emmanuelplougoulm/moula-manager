<script>
const updateEvent = 'update:modelValue';
</script>
<script setup>
import { ref, nextTick } from 'vue';

defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
});

const inputValue = ref('');
const selectedItem = ref({});
const dropdownInput = ref('');

const emit = defineEmits([updateEvent]);

const itemVisible = (item) => {
  let currentName = item.name.toLowerCase();
  let currentInput = inputValue.value.toLowerCase();

  return currentName.includes(currentInput);
};

const selectItem = (item) => {
  selectedItem.value = item;
  inputValue.value = '';
  emit(updateEvent, item);
};

const resetItem = () => {
  selectedItem.value = {};
  nextTick(() => dropdownInput.value.focus());
  emit(updateEvent, {});
};
</script>

<template>
  <div class="dropdown">
    <input
      ref="dropdownInput"
      v-model.trim="inputValue"
      class="dropdown-input"
      type="text"
      placeholder="Find a coin"
      v-if="Object.keys(selectedItem).length === 0"
    />
    <div v-else @click="resetItem" class="dropdown-selected">
      {{ selectedItem.name }}
    </div>

    <div v-show="inputValue && options.length > 0" class="dropdown-list">
      <div
        v-for="option in options"
        :key="option.name"
        class="dropdown-item"
        v-show="itemVisible(option)"
        @click="selectItem(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.dropdown-input,
.dropdown-selected {
  color: black;
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}

.dropdown-input:focus,
.dropdown-selected:hover {
  background: #fff;
  border-color: #e2e8f0;
}

.dropdown-selected {
  font-weight: bold;
  cursor: pointer;
}

.dropdown-input::placeholder {
  opacity: 0.7;
}

.dropdown-list {
  position: absolute;
  width: 100%;
  max-height: 100px;
  padding: 0.5rem;
  color: black;
  margin-top: 4px;
  border-radius: 8px;
  background: #edf2f7;
  overflow-y: auto;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.dropdown-item {
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover {
  background: blue;
}
</style>
