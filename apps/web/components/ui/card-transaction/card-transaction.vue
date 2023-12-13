<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionStore } from '@/stores/transactionStore';

import TabGroup from '@/components/commons/tab-group/tab-group.vue';
import BaseInput from '@/components/commons/base-input/base-input.vue';
import SearchableDropdown from '@/components/commons/searchable-dropdown/searchable-dropdown.vue';

import allCoins from '@/constants/allCoins.json';

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const transactionStore = useTransactionStore();

const { type, portfolioId, transactionId, date, currency, asset, quantity, price, fees } =
  storeToRefs(transactionStore);

const optionsCurrency = ['EUR', 'DOL'];
const optionsType = ['BUY', 'SELL'];

let optionsCoins = computed(() => {
  return allCoins.map((coin) => {
    return { value: coin.symbol, name: coin.name };
  });
});

// console.log('optionsCoins', optionsCoins.value);
</script>

<template>
  <div
    v-if="optionsCoins.length > 0"
    class="wrapper-card-transaction"
    :class="{ collapsed: isOpen }"
  >
    <div class="grid-container">
      <TabGroup class="grid-item" v-model="currency" :options="optionsCurrency" />
      <TabGroup class="grid-item" v-model="type" :options="optionsType" />

      <div class="grid-item">
        <SearchableDropdown v-model="asset" :options="optionsCoins" />
      </div>
      <div class="grid-item">
        <BaseInput v-model="quantity" class="input-item" :label="'Quantity'" />
      </div>
      <div class="grid-item">
        <BaseInput v-model="price" class="input-item" :label="'Price'" />
      </div>
      <div class="grid-item">
        <BaseInput v-model="date" :label="'Date'" />
      </div>
      <div class="grid-item">
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
