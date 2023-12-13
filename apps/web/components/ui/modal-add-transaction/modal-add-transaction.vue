<script setup lang="ts">
import BaseModal from '@/components/commons/base-modal/base-modal.vue';
import CardTransaction from '@/components/ui/card-transaction/card-transaction.vue';
import { createTransaction } from '@/services/transactions/transactions.service';
import { useTransactionStore } from '@/stores/transactionStore';
import { usePortfolioStore } from '@/stores/portfolioStore';
import { getPortfolioById } from '@/services/portfolios/portfolios.service';

defineProps({
  title: String,
  required: true
});

const store = useTransactionStore();
const portfolioStore = usePortfolioStore();

const activePortfolioId = portfolioStore.active.portfolioId;

const emit = defineEmits(['close-modal']);

const handleAddTransaction = async () => {
  const newTransaction = {
    type: store.type,
    portfolioId: portfolioStore.active.portfolioId,
    date: store.date,
    currency: store.currency,
    asset: store.asset.value,
    amount: store.quantity,
    price: store.price,
    fees: store.fees
  };

  const response = await createTransaction(newTransaction);

  if (response.transactionId) {
    // toast.add({ title: 'Transaction successfully added' });
    const response = await getPortfolioById(activePortfolioId);
    portfolioStore.setActivePortfolio(response);
  } else {
    // toast.add({ title: 'Error' });
  }

  emit('close-modal');
};
</script>

<template>
  <BaseModal>
    <template #header>{{ title }}</template>
    <template #content>
      <CardTransaction />
    </template>
    <template #footer>
      <button @click="handleAddTransaction">Validate</button>
    </template>
  </BaseModal>
</template>
