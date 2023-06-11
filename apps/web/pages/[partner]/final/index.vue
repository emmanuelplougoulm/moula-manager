<template>
  <div class="container">
    <h1 class="title">
      {{ t('pages.final.title') }}
    </h1>
    <div class="svg-container">
      <SuccessSVG class="svg" />
    </div>
    <span class="description text-bigger-regular">
      {{ t('pages.final.description') }}
    </span>
    <ButtonItem
      :text="t('common.actions.myAccount')"
      :state="'enabled'"
      icon-position="right-icon"
      icon="ArrowForwardIOS"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
import ButtonItem from '@onboarding/ui/src/components/button/ButtonItem.vue';
import SuccessSVG from '../../../assets/svg/success.svg?component';

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
