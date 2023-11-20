<script setup lang="ts">
// import { ref } from 'vue';
// import { useStore } from '@/stores/store';
// import { useWalletStore } from '@/stores/walletStore';
// import Modal from '@/components/ui/modal/modal.vue';
// import ModalTransaction from '@/components/ui/modal-transaction/modal-transaction.vue';
// import CardTransaction from '@/components/ui/card-transaction/card-transaction.vue';

import Drawer from '@/components/ui/drawer/drawer.vue';
import Overview from '@/components/ui/overview/overview.vue';
import Portfolio from '@/components/ui/portfolio/portfolio.vue';
import Button from '@/components/commons/button/button.vue';
import TextInput from '@/components/commons/text-input/text-input.vue';
import { createPortfolio } from '@/services/portfolios/portfolios.service';
import Toaster from '@/components/ui/toaster/toaster.vue';
import { useToasterStore } from '@/stores/toasterStore';

const toasterStore = useToasterStore();
// const successToast = () => toasterStore.success({ text: 'Yahoooooo!' });

const store = usePortfolioStore();
const showModal = ref(false);
const showTextInput = ref(false);
const portfolioState = ref({ name: '' });

const drawerStore = useDrawerStore();
const showOverview = drawerStore.tabs[0].active;
// const showPortfolio = drawerStore.tabs[0].active !== true;

// const handleCreatePortfolio = () => {
//   return createPortfolio(portfolioState);
// };
</script>

<template>
  <div class="container">
    <Drawer />
    <div class="content">
      <Overview v-if="showOverview" />
      <Portfolio v-if="!showOverview" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.content {
  flex: 1;
  border: 1px red solid;
  height: 500px;
}
</style>
