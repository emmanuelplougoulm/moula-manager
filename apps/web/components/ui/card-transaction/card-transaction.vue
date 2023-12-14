<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionStore } from '@/stores/transactionStore';
import { usePortfolioStore } from '@/stores/portfolioStore';
import { createTransaction } from '@/services/transactions/transactions.service';
import { getPortfolioById } from '@/services/portfolios/portfolios.service';

import TabGroup from '@/components/commons/tab-group/tab-group.vue';
import BaseInput from '@/components/commons/base-input/base-input.vue';
import SearchableDropdown from '@/components/commons/searchable-dropdown/searchable-dropdown.vue';

import allCoins from '@/constants/allCoins.json';
import { CONSTANTS } from '@/constants';

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const transactionStore = useTransactionStore();
const portfolioStore = usePortfolioStore();

const activePortfolioId = computed(() => portfolioStore.getActivePortfolioId);
const { type, date, currency, asset, quantity, price, fees } = storeToRefs(transactionStore);

const { FIAT_TYPES, TRANSACTION_TYPES } = CONSTANTS;

const handleAddTransaction = async () => {
  const newTransaction = {
    type: transactionStore.type,
    portfolioId: activePortfolioId.value,
    date: transactionStore.date,
    currency: transactionStore.currency,
    asset: transactionStore.asset.value,
    amount: transactionStore.quantity,
    price: transactionStore.price,
    fees: transactionStore.fees
  };

  const response = await createTransaction(newTransaction);

  if (response.transactionId) {
    const response = await getPortfolioById(activePortfolioId.value);
    portfolioStore.setActivePortfolio(response);
  } else {
    // toast.add({ title: 'Error' });
  }
};

let optionsCoins = computed(() => {
  return allCoins.map((coin) => {
    return { value: coin.symbol, name: coin.name };
  });
});
</script>

<template>
  <div
    v-if="optionsCoins.length > 0"
    class="wrapper-card-transaction"
    :class="{ collapsed: isOpen }"
  >
    <div class="grid-container">
      <TabGroup class="grid-item" v-model="currency" :options="FIAT_TYPES" />
      <TabGroup class="grid-item" v-model="type" :options="TRANSACTION_TYPES" />

      <div>
        <SearchableDropdown v-model="asset" :options="optionsCoins" />
      </div>
      <div>
        <BaseInput v-model="quantity" class="input-item" :label="'Quantity'" />
      </div>
      <div>
        <BaseInput v-model="price" class="input-item" :label="'Price'" />
      </div>
      <div>
        <BaseInput v-model="date" :label="'Date'" />
      </div>
      <div>
        <BaseInput v-model="fees" :label="'Fees'" />
      </div>
      <!-- <div>TODO CALCULATE TOTAL</div> -->
      <button @click="handleAddTransaction">Validate</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper-card-transaction {
  display: flex;
  width: 350px;
  height: 100%;
  border: 1px var(--color-border-grey) solid;
  padding: 2.5rem 0.8rem 0.8rem 0.8rem;
  transform: translateX(0);
  transition: transform 0.45s cubic-bezier(0.82, 0.085, 0.395, 0.895),
    width 0.75s cubic-bezier(0.82, 0.085, 0.395, 0.895);
}

.wrapper-card-transaction.collapsed {
  transform: translateX(100%);
  width: 0;
}

.grid-container {
  display: grid;
  grid-template-rows: 30px 30px 40px repeat(4, 70px);
  gap: 0.5rem;
  width: 100%;
  height: 100%;
}
</style>
