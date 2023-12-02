<script setup lang="ts">
import { storeToRefs } from 'pinia';

import TabGroup from '@/components/commons/tab-group/tab-group.vue';
import BaseInput from '@/components/commons/base-input/base-input.vue';
import Dropdown from '@/components/commons/dropdown/dropdown.vue';

import { useTransactionStore } from '@/stores/transactionStore';

const transactionStore = useTransactionStore();

const { type, portfolioId, transactionId, date, currency, coin, quantity, price, fees } =
  storeToRefs(transactionStore);

const optionsCurrency = ['EUR', 'DOL'];
const optionsType = ['BUY', 'SELL'];

const optionsCoins = [
  { value: 'BTC', text: 'Bitcoin' },
  { value: 'ETH', text: 'Ethereum' }
];
</script>

<template>
  <div class="grid-container">
    <TabGroup class="grid-item" v-model="currency" :options="optionsCurrency" />
    <TabGroup class="grid-item" v-model="type" :options="optionsType" />

    <div class="select-coin grid-item">
      <Dropdown v-model="coin" :options="optionsCoins" />
    </div>
    <div class="grid-item input-group">
      <BaseInput v-model="quantity" :label="'Quantity'" />
      <BaseInput v-model="price" :label="'Price'" />
    </div>
    <div class="grid-item input-group">
      <BaseInput v-model="date" :label="'Date'" />
      <BaseInput v-model="fees" :label="'Fees'" />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-rows: 30px 30px 40px repeat(2, 70px);
  gap: 0.5rem;
  width: 100%;
}

.grid-item {
  /* border: 1px solid black; */
  /* padding: 20px; */
  /* text-align: center; */
}
.input-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
}

.card-transaction {
  border: 3px blue solid;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: var(--card-border-radius);
  background-color: var(--color-bg-darker);
  border: 1px var(--color-border-grey) solid;
}

.select-coin {
  width: 100%;
  border-radius: 4px;
}
.select-coin select {
  width: 100%;
  height: 50px;
  background-color: var(--color-bg-lighter);
  border: none;
  color: white;
}

.quantity-and-price,
.date-and-fees {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.quantity,
.price,
.date,
.fees {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.total-spent {
  /* width: 100%; */
  display: flex;
  justify-content: center;
  height: 80px;
  background-color: lightskyblue;
}
</style>
