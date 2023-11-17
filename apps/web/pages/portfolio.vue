<script setup lang="ts">
// import { ref } from 'vue';
// import { useStore } from '@/stores/store';

// import { useWalletStore } from '@/stores/walletStore';

// import Modal from '@/components/ui/modal/modal.vue';
// import ModalTransaction from '@/components/ui/modal-transaction/modal-transaction.vue';

import ModalPortfolio from '@/components/ui/modal-portfolio/modal-portfolio.vue';

import CardTransaction from '@/components/ui/card-transaction/card-transaction.vue';
import Button from '@/components/button/button.vue';
import TextInput from '@/components/commons/text-input/text-input.vue';
import { createWallet } from '@/services/wallets/wallets.service';

const store = useWalletStore();
const showModal = ref(false);
const showTextInput = ref(false);
const walletState = ref({ name: '' });
// console.log('store', store);

// const showModal = ref(false);

const handleCreateWallet = () => {
  return createWallet(walletState);
};
</script>

<template>
  <div class="container">
    <div class="left">
      <Button :text="'Add Wallet'" @click="showTextInput = true" />
      <TextInput v-if="showTextInput" :label="'toto'" v-model="walletState.name" />
      <Button :text="'Valider'" @click="handleCreateWallet" />
    </div>
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button>
    <ModalTransaction v-if="showModal" @close="showModal = false" /> -->
    <!-- <ModalWallet v-if="showModal" @close="showModal = false" /> -->
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
