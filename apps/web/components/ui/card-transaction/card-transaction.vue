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
  <div class="card-transaction">
    <TabGroup v-model="currency" :options="optionsCurrency" />
    <TabGroup v-model="type" :options="optionsType" />

    <div class="select-coin">
      <Dropdown v-model="coin" :options="optionsCoins" />
    </div>
    <div class="quantity-and-price">
      <BaseInput v-model="quantity" :label="'Quantity'" />
      <BaseInput v-model="price" :label="'Price'" />
    </div>
    <div class="date-and-fees">
      <BaseInput v-model="date" :label="'Date'" />
      <BaseInput v-model="fees" :label="'Fees'" />
    </div>
    <!-- <div class="total-spent">
      <div name="total">{{ total }}</div>
    </div> -->
  </div>
</template>

<style scoped>
.card-transaction {
  border: 3px blue solid;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: var(--card-border-radius);
  /* padding: 10px; */
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
