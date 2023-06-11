<template>
  <div class="container">
    <h1 class="title">
      {{ t('pages.waitingForValidation.title') }}
    </h1>
    <div class="svg-container">
      <MoreChecksSVG class="svg" />
    </div>
    <span class="description text-bigger-regular">
      {{ t('pages.waitingForValidation.description') }}
    </span>
    <ButtonItem
      :text="t('common.actions.myAccount')"
      icon-position="right-icon"
      icon="ArrowForwardIOS"
    />
  </div>
</template>

<script setup lang="ts">
import ButtonItem from '@onboarding/ui/src/components/button/ButtonItem.vue';
import MoreChecksSVG from '../../../assets/svg/more_checks.svg?component';
import { useI18n } from '#imports';

const { t } = useI18n();
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.25rem;
}
.title {
  text-align: center;
  line-height: 1.8rem;
  color: var(--neutral-10);
}
.svg-container {
  max-width: 21.875rem;
  min-width: 17.5rem;
}
.svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.description {
  text-align: center;
  line-height: 1.5rem;
  color: var(--neutral-40);
  max-width: 21.875rem;
}
</style>
