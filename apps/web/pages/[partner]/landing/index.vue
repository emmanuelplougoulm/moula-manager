<template>
  <div class="container">
    <div class="carousel-container">
      <CarouselItem :slides="slides" />
    </div>
    <div class="actions-container">
      <ButtonItem
        class="button"
        :text="$t('common.actions.finishLater')"
        icon-position="no-icon"
        type="secondary"
      />
      <ButtonItem
        class="button"
        :text="$t('common.actions.letsGo')"
        :state="'enabled'"
        icon-position="right-icon"
        icon="ArrowForwardIOS"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonItem from '@onboarding/ui/src/components/button/ButtonItem.vue';
import CarouselItem from '@onboarding/ui/src/components/carousel/CarouselItem.vue';
import { useI18n } from '#imports';
import { computed } from 'vue';

const { t } = useI18n();

const slides = computed(() => {
  return [
    {
      svg: 'welcome',
      title: t('pages.landing.slides.one.title'),
      description: t('pages.landing.slides.one.description')
    },
    {
      svg: 'edit',
      title: t('pages.landing.slides.two.title'),
      description: t('pages.landing.slides.two.description')
    },
    {
      svg: 'selfie',
      title: t('pages.landing.slides.three.title'),
      description: t('pages.landing.slides.three.description')
    }
  ];
});
</script>

<style scoped>
.container {
  margin: auto;
  position: relative;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2.25rem;
}

.actions-container {
  margin-top: 2.25rem;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 320px) {
  .actions-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .button {
    max-width: 9.375rem;
  }
}
</style>
