<script setup lang="ts">
import { reactive, computed } from 'vue';
// import httpClient from '../../services/httpClient/httpClient';
import { createTransaction } from '../../services/transactions/transactions.service';

const transactionState = reactive({
  type: '',
  walletName: '',
  date: '',
  currency: '',
  symbol: '',
  quantity: 0,
  price: 0,
  fees: 0
});

const total = computed(() => 'toto');

const handleSubmit = () => {
  createTransaction(transactionState);
};
</script>

<template>
  <form action="" method="post" class="form-example card-transaction">
    <div class="transaction-type">
      <ul class="buy-or-sell">
        <li><div @click="transactionState.type = 'BUY'">BUY</div></li>
        <li><div @click="transactionState.type = 'BUY'">SELL</div></li>
      </ul>
    </div>
    <div class="select-coin">
      <select>
        <option value="BTC">$BTC</option>
        <option value="ETH">$ETH</option>
        <option value="TAO">$TAO</option>
      </select>
    </div>
    <div class="quantity-and-price">
      <div class="quantity">
        <label for="quantity">quantity </label>
        <input
          type="text"
          v-model="transactionState.quantity"
          name="quantity"
          id="quantity"
          required
        />
      </div>
      <div class="price">
        <label for="price">price </label>
        <input type="text" v-model="transactionState.price" name="price" id="price" required />
      </div>
    </div>
    <div class="date-and-fees">
      <div class="date">
        <label for="date">date</label>
        <input type="text" v-model="transactionState.date" name="date" id="date" required />
      </div>
      <div class="fees">
        <label for="fees">fees</label>
        <input type="text" v-model="transactionState.fees" name="fees" id="fees" required />
      </div>
    </div>
    <div class="total-spent">
      <div name="total">{{ total }}</div>
    </div>
    <div class="form-example">
      <input type="submit" value="+ Add transaction" @click="handleSubmit" />
    </div>
  </form>
</template>

<style scoped>
.form-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.card-transaction {
  border: 1px green solid;
  background-color: cadetblue;
}

.buy-or-sell {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  background-color: lightskyblue;
  padding: 10px;
  border-radius: 4px;
}
.buy-or-sell li {
  border: 1px red solid;
  flex: 1;
  list-style: none;
  margin: 5px;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.select-coin {
  width: 100%;
  border-radius: 4px;
}
.select-coin select {
  width: 100%;
  height: 50px;
  background-color: lightskyblue;
}

.quantity-and-price,
.date-and-fees {
  display: flex;
  justify-content: center;
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
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80px;
  background-color: lightskyblue;
}
</style>
