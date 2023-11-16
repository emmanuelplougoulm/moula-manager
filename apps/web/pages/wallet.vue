<script setup lang="ts">
// import { ref } from 'vue';
// import { useStore } from '@/stores/store';

import { useWalletStore } from '@/stores/walletStore';

// import Modal from '@/components/ui/modal/modal.vue';
// import ModalTransaction from '@/components/ui/modal-transaction/modal-transaction.vue';
import CardTransaction from '@/components/card-transaction/card-transaction.vue';

const store = useWalletStore();
console.log('store', store);

// const showModal = ref(false);
</script>

<template>
  <div class="container">
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button>
    <ModalTransaction v-if="showModal" @close="showModal = false" /> -->
    <CardTransaction />
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
