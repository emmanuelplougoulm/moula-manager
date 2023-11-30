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
  console.log('option', option);
  //   selectedOption.value = option;
  open.value = false;
  emit('update:modelValue', option);
};

const toggle = () => {
  open.value = !open.value;
  console.log('am inside');
};
</script>

<style scoped>
.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  border: 0.125rem solid red;
  position: relative;
  z-index: 999;
}
.dropdown-wrapper {
  display: flex;
  flex-direction: column;
  /* height: 3.25rem; */
  gap: 0.5rem;
}
.select {
  height: 3.25rem;
}
.option:hover {
  background-color: aqua;
}

:is(.select, .option) {
  box-sizing: border-box;
  cursor: pointer;
}
</style>
