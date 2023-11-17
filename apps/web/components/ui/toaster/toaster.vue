<template>
  <Teleport to="body">
    <ul v-if="toastStore.toasts.length" class="toaster__wrapper">
      <li
        v-for="toast in toastStore.toasts"
        :class="['toaster__inner', toastClassMap[toast.status]]"
        :key="toast.text"
      >
        <Icon :name="toastIconMap[toast.status]" class="toaster__inner-icon" />

        <span class="toaster__inner-text">
          {{ toast.text }}
        </span>
      </li>
    </ul>
  </Teleport>
</template>

<script setup lang="ts">
import { useToasterStore, type TToastStatus } from '@/stores/toasterStore';
import Icon from '../icon/icon.vue';

const toastClassMap: Record<TToastStatus, string> = {
  warning: 'warning',
  error: 'error',
  success: 'success'
};

const toastIconMap: Record<TToastStatus, string> = {
  error: 'toast-error',
  warning: 'toast-warning',
  success: 'toast-success'
};

const toastStore = useToasterStore();
</script>

<style scoped lang="scss">
.toaster {
  &__wrapper {
    position: fixed;
    bottom: 3%;
    right: 5%;

    z-index: 100;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__inner {
    --color: black;
    display: flex;
    align-items: center;
    gap: 1rem;

    border-radius: 0.3rem;

    border: 1px solid transparent;

    background-color: white;

    padding: 2.2rem 1.6rem;

    border-color: var(--color);
    color: var(--color);
    svg {
      fill: var(--color);
      stroke: var(--color);
    }

    &.success {
      --color: green;
    }

    &.warning {
      --color: orange;
    }

    &.error {
      --color: red;
    }

    &-icon {
      width: 1.8rem;
      aspect-ratio: 1/1;
    }

    &-text {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
}
</style>
