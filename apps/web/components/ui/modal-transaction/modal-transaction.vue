<script setup lang="ts">
import Modal from '@/components/commons/modal/modal.vue';
import CardTransaction from '@/components/ui/card-transaction/card-transaction.vue';
import { createTransaction } from '@/services/transactions/transactions.service';
import { useTransactionStore } from '@/stores/transactionStore';
import { usePortfolioStore } from '@/stores/portfolioStore';

// eslint-disable-next-line no-undef
const toast = useToast();
const store = useTransactionStore();
const portfolioStore = usePortfolioStore();

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
    toast.add({ title: 'Transaction successfully added' });
  } else {
    toast.add({ title: 'Error' });
  }

  emit('close-modal');
};
</script>

<template>
  <Modal>
    <template #header>
      <h3>Add transaction</h3>
    </template>
    <template #content>
      <CardTransaction />
    </template>
    <template #footer>
      <button @click="handleAddTransaction">Add transaction</button>
    </template>
  </Modal>
</template>
