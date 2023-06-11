<template>
  <GroupButtonContainer type="completed" :disabled="disabled" @click="click">
    <template #left-icon>
      <SvgIcon :value="leftIcon" class="left-icon" />
    </template>
    <template #text>
      <span class="text--highlighted text-default-bold">
        {{ title }}
      </span>
      <span v-if="subtitle" class="text--highlighted text-small-regular">
        {{ subtitle }}
      </span>
    </template>
    <template #right-icon>
      <MoreVert class="right-icon" />
    </template>
    <template v-if="isShown" #more-options>
      <div name="more-options" class="option-buttons-container">
        <button
          class="option-button"
          :disabled="disabled"
          data-testid="edit-option"
          @click="editClick"
        >
          <Edit />
          <span>Edit</span>
        </button>
        <button
          class="option-button"
          :disabled="disabled"
          data-testid="delete-option"
          @click="deleteClick"
        >
          <Delete />
          <span>Delete</span>
        </button>
      </div>
    </template>
  </GroupButtonContainer>
</template>

<script setup lang="ts">
import GroupButtonContainer from '../group-button-container/GroupButtonContainer.vue';
import { ref } from 'vue';
import { iconValidator } from './validator';
import MoreVert from '../icons/MoreVert.vue';
import Edit from '../icons/Edit.vue';
import Delete from '../icons/Delete.vue';
import SvgIcon from '../icons/SvgIcon.vue';

const props = defineProps({
  leftIcon: {
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

const isShown = ref(false);
const emit = defineEmits(['click:edit', 'click:delete']);
const click = () => {
  if (!props.disabled) {
    isShown.value = !isShown.value;
  }
};
const editClick = () => {
  emit('click:edit');
};
const deleteClick = () => {
  emit('click:delete');
};
</script>

<style scoped>
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
.option-buttons-container {
  position: absolute;
  box-shadow: var(--box-shadow);
  right: 1.5rem;
  top: 2.375rem;
  border-radius: 0.375rem;
  background-color: var(--neutral-100);
}

.option-button {
  width: 100%;
  padding: 0.75rem 1.5rem 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  color: var(--neutral-20);
  background-color: var(--neutral-100);
  border: none;
  cursor: pointer;
}

.option-button:hover {
  background-color: var(--neutral-80);
}

.option-button:first-child {
  border-radius: 0.375rem 0.375rem 0 0;
}

.option-button:last-child {
  border-top: 0.0625rem solid var(--neutral-75);
  border-radius: 0 0 0.375rem 0.375rem;
}
</style>
