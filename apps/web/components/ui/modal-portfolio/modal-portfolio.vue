<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/commons/modal/modal.vue';
import TextInput from '@/components/commons/text-input/text-input.vue';

const walletName = ref('');
</script>

<template>
  <Modal>
    <template #header>
      <h3>Add Wallet</h3>
    </template>
    <template #content> <TextInput :label="'toto'" v-model="walletName" /> </template>
    <!-- <template #footer>
      <h3>Footer</h3>
    </template> -->
  </Modal>
</template>
