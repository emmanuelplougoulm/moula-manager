<template>
  <GroupButtonContainer type="completed" :disabled="disabled" @click="click">
    <template #left-icon>
      <Done class="left-icon" />
    </template>
    <template #text>
      <span class="text--highlighted text-default-bold">
        {{ title }}
      </span>
      <div v-for="(tab, index) in subtitle" :key="`subtitle-${index}`" class="subtitle-container">
        <span v-for="item in tab" :key="item" class="text--highlighted text-small-regular">
          {{ item }}
        </span>
      </div>
    </template>
    <template #right-icon>
      <Edit class="right-icon" />
    </template>
  </GroupButtonContainer>
</template>

<script setup lang="ts">
import GroupButtonContainer from '../group-button-container/GroupButtonContainer.vue';
import Edit from '../icons/Edit.vue';
import Done from '../../assets/svg/Done.svg';
import type { PropType } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: Array as PropType<string[][]>,
    default: () => [[]]
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const click = () => {
  if (!props.disabled) {
    emit('click');
  }
};
</script>

<style scoped>
.text--highlighted {
  color: var(--primary-text);
}

.subtitle-container {
  display: flex;
  flex-direction: column;
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
