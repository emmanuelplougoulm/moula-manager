<template>
  <div class="dropdown-wrapper">
    <!-- <label></label> -->
    <div class="select" @click="toggle">
      <span>{{ selectedOption.text }}</span>
    </div>
    <div v-if="open" :class="options">
      <div v-for="option in options" :key="option.value" class="option" @click="select(option)">
        <span>{{ option.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
});

const open = ref(false);
const selectedOption = ref(props.modelValue);

// const selectedText = computed(() => selectedOption.value.text ?? props.placeholder);

const emit = defineEmits(['update:modelValue']);

const select = (option) => {
  open.value = false;
  emit('update:modelValue', option);
};

const toggle = () => {
  open.value = !open.value;
  // console.log('am inside');
};
</script>

<style scoped>
.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  position: relative;
  height: 40px;
  background-color: var(--color-bg-lighter);
}
.dropdown-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.option {
  background-color: var(--color-bg-lighter);
  z-index: 999;
  position: relative;
  padding: 0.3rem 1rem;
}
.option:hover {
  background-color: aqua;
}

:is(.select, .option) {
  box-sizing: border-box;
  cursor: pointer;
}
</style>
