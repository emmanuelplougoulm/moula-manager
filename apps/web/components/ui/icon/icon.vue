<template>
  <component :is="icon" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

type TIconName = 'toast-error' | 'toast-warning' | 'toast-success';

const props = defineProps<{ name: TIconName }>();
const icon = defineAsyncComponent(() => import(`../../../assets/icons/${props.name}.svg`));
</script>

<style scoped lang="scss"></style>
