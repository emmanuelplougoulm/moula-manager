<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2 v-if="subtitle">
      {{ subtitle }}
    </h2>
    <h3 v-if="description">
      {{ description }}
    </h3>
    <AlertItem v-if="alertText" :text="alertText" class="alert-text" />
  </div>
</template>

<script setup lang="ts">
import AlertItem from './../alert/AlertItem.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  alertText: {
    type: String,
    default: undefined
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2.25rem;
}

:is(h1, h2, h3) {
  margin: 0;
}

h1 {
  color: var(--neutral-10);
  line-height: 1.813rem;
}

h2 {
  color: var(--primary-text);
  line-height: 1.5rem;
}

h3 {
  color: var(--neutral-40);
  line-height: 1.5rem;
}

.alert-text {
  margin-top: 0.625rem;
}
</style>
