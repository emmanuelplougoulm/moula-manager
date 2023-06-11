<template>
  <client-only>
    <div v-if="isDoneLoading">
      <Header :logo-src="logoSrc" :logo-alt="logoAlt" />
      <NuxtPage />
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import Header from '~/components/header/HeaderItem.vue';

const isDoneLoading = ref(false);
const setStyle = (config: { style: { [s: string]: unknown } | ArrayLike<unknown> }) => {
  const style = [];
  for (const [key, value] of Object.entries(config.style)) {
    style.push(`--${key}: ${value}`);
  }
  // eslint-disable-next-line no-undef
  useHead({
    style: [
      {
        children: `
            :root {
              ${style.join(';')}
            }
          `
      }
    ]
  });
  isDoneLoading.value = true;
};

let logoSrc: string;
let logoAlt: string;

if (process.client) {
  const route = useRoute();
  const partner = route.params.partner ?? 'lemonway';
  const partnerConfig = window.localStorage.getItem(`${partner}-config`);
  logoSrc = `/logos/logo-${partner}.svg`;
  logoAlt = `${partner} logo`;
  if (partnerConfig) {
    setStyle(JSON.parse(partnerConfig));
  } else {
    import(`~/assets/config/config-${partner}.json`).then((config) => {
      window.localStorage.setItem(`${partner}-config`, JSON.stringify(config.default));
      setStyle(config.default);
    });
  }
}
</script>
