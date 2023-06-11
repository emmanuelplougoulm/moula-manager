<template>
  <header>
    <div class="container">
      <img :src="logoSrc" :alt="logoAlt" class="logo" />
      <LanguageDropdown v-model="locale" :options="options" />
    </div>
  </header>
</template>

<script setup lang="ts">
import LanguageDropdown from '@onboarding/ui/src/components/language-dropdown/LanguageDropdown.vue';
import { useI18n, watch } from '#imports';

const { locale, setLocale } = useI18n({
  messages: {}
});

defineProps({
  logoSrc: {
    type: String,
    required: true
  },
  logoAlt: {
    type: String,
    required: true
  }
});

const options = [
  {
    id: 0,
    text: 'Français',
    value: 'fr'
  },
  {
    id: 1,
    text: 'English',
    value: 'en'
  }
];

watch(locale, async (selectedLocale: string) => {
  await setLocale(selectedLocale);
});
</script>

<style scoped>
header {
  margin-bottom: 2.25rem;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  max-width: 8.0625rem;
  height: auto;
}
</style>
