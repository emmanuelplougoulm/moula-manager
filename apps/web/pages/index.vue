<template>
  <div>
    <ButtonItem icon="no-icon" label="Hello" size="default" state="enabled" theme="primary" />
    <div>
      {{ $t('welcome') }}
    </div>
  </div>
</template>

<script setup>
import ButtonItem from '@onboarding/ui/src/components/button/ButtonItem.vue';
</script>
