<template>
  <form action="" method="post" class="form-example">
    <div class="form-example">
      <label for="type">transaction type </label>
      <input type="text" v-model="transactionState.type" name="type" id="type" required />
    </div>
    <div class="form-example">
      <label for="wallet-name">wallet-name </label>
      <input
        type="text"
        v-model="transactionState.walletName"
        name="wallet-name"
        id="wallet-name"
        required
      />
    </div>
    <div class="form-example">
      <label for="date">date </label>
      <input type="text" v-model="transactionState.date" name="date" id="date" required />
    </div>
    <div class="form-example">
      <label for="currency">currency </label>
      <input
        type="text"
        v-model="transactionState.currency"
        name="currency"
        id="currency"
        required
      />
    </div>
    <div class="form-example">
      <label for="symbol">symbol </label>
      <input type="text" v-model="transactionState.symbol" name="symbol" id="symbol" required />
    </div>
    <div class="form-example">
      <label for="amount">amount </label>
      <input type="text" v-model="transactionState.amount" name="amount" id="amount" required />
    </div>
    <div class="form-example">
      <label for="price">price </label>
      <input type="text" v-model="transactionState.price" name="price" id="price" required />
    </div>
    <div class="form-example">
      <label for="fees">fees </label>
      <input type="text" v-model="transactionState.fees" name="fees" id="fees" required />
    </div>

    <div class="form-example">
      <input type="submit" value="+ Add transaction" @click="handleSubmit" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import httpClient from '../../services/httpClient/httpClient';
import { createTransaction } from '../../services/transactions/transactions.service';

const transactionState = reactive({
  type: null,

  walletName: '',
  date: '',
  currency: '',
  symbol: '',
  amount: 0,
  price: 0,
  fees: 0
});

const handleSubmit = () => {
  createTransaction(transactionState);
};
</script>
