<script setup lang="ts">
// import { ref } from 'vue';
// import { useStore } from '@/stores/store';

// import { useWalletStore } from '@/stores/walletStore';

// import Modal from '@/components/ui/modal/modal.vue';
// import ModalTransaction from '@/components/ui/modal-transaction/modal-transaction.vue';

import ModalWallet from '@/components/ui/modal-wallet/modal-wallet.vue';

import CardTransaction from '@/components/card-transaction/card-transaction.vue';
import Button from '@/components/button/button.vue';

const store = useWalletStore();
const showModal = ref(false);
console.log('store', store);

// const showModal = ref(false);
</script>

<template>
  <div class="container">
    <div class="left">
      <Button :text="'Add Wallet'" @click="showModal = true" />
    </div>
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button>
    <ModalTransaction v-if="showModal" @close="showModal = false" /> -->
    <ModalWallet v-if="showModal" @close="showModal = false" />
    <!-- <CardTransaction /> -->
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  display: flex;
}

.left {
  width: 250px;
  height: 100vh;
  border-right: 2px var(--color-border-grey) solid;
}
</style>
