<script setup lang="ts">
// import { ref } from 'vue';
// import { useStore } from '@/stores/store';

// import { useWalletStore } from '@/stores/walletStore';

// import Modal from '@/components/ui/modal/modal.vue';
// import ModalTransaction from '@/components/ui/modal-transaction/modal-transaction.vue';

import ModalPortfolio from '@/components/ui/modal-portfolio/modal-portfolio.vue';

import CardTransaction from '@/components/ui/card-transaction/card-transaction.vue';
import Button from '@/components/commons/button/button.vue';
import TextInput from '@/components/commons/text-input/text-input.vue';
import { createPortfolio } from '@/services/portfolios/portfolios.service';

import Toaster from '@/components/ui/toaster/toaster.vue';
import { useToasterStore } from '@/stores/toasterStore';

const toasterStore = useToasterStore();
const successToast = () => toasterStore.success({ text: 'Yahoooooo!' });

const store = usePortfolioStore();
const showModal = ref(false);
const showTextInput = ref(false);
const portfolioState = ref({ name: '' });

// console.log('store', store);

// const showModal = ref(false);

const handleCreatePortfolio = () => {
  return createPortfolio(portfolioState);
};
</script>

<template>
  <div class="container">
    <div class="left">
      <Toaster />
      <Button :text="'Add Wallet'" @click="showTextInput = true" />
      <TextInput v-if="showTextInput" :label="'toto'" v-model="portfolioState.name" />
      <Button :text="'Valider'" @click="handleCreatePortfolio" />
      <Button :text="'Trigger notif'" @click="successToast" />
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
