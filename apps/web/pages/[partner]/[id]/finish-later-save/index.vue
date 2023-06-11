<template>
  <div>
    <div class="container">
      <h1 class="title">
        {{ title }}
      </h1>
      <div class="svg-container">
        <SaveSVG class="svg" />
      </div>
      <div class="description text-bigger-regular">
        {{ description }}
      </div>
      <ButtonItem
        :text="t('common.actions.myAccount')"
        :state="buttonState"
        icon-position="right-icon"
        icon="ArrowForwardIOS"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from '#imports';

import ButtonItem from '@onboarding/ui/src/components/button/ButtonItem.vue';
import SaveSVG from '../../../../assets/svg/save.svg?component';

const { t } = useI18n();

const isLoading = ref(true);

const title = computed(() =>
  isLoading.value
    ? t('pages.finishLaterSave.onSave.title')
    : t('pages.finishLaterSave.onFinished.title')
);

const description = computed(() =>
  isLoading.value
    ? t('pages.finishLaterSave.onSave.description')
    : t('pages.finishLaterSave.onFinished.description')
);

const buttonState = computed(() => (isLoading.value ? 'disabled' : 'enabled'));
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
