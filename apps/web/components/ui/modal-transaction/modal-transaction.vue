<script setup lang="ts">
// import { ref } from 'vue';
import Modal from '@/components/commons/modal/modal.vue';
import CardTransaction from '@/components/ui/card-transaction/card-transaction.vue';
import { createTransaction } from '@/services/transactions/transactions.service';
import { useTransactionStore } from '@/stores/transactionStore';
import { usePortfolioStore } from '@/stores/portfolioStore';

const emit = defineEmits(['close-modal']);

const store = useTransactionStore();
const portfolioStore = usePortfolioStore();

const handleAddTransaction = async () => {
  const newTransaction = {
    type: store.type,
    portfolioId: portfolioStore.active.portfolioId,
    transactionId: store.transactionId,
    date: store.date,
    currency: store.currency,
    asset: store.asset.value,
    amount: store.quantity,
    price: store.price,
    fees: store.fees
  };

  await createTransaction(newTransaction);
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
