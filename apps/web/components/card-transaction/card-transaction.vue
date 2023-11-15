<script setup lang="ts">
import { computed, ref } from 'vue';
import TabGroup from '@/components/ui/tab-group/tab-group.vue';
// import httpClient from '../../services/httpClient/httpClient';
// import { createTransaction } from '../../services/transactions/transactions.service';

const transactionState = ref({
  type: '',
  walletName: '',
  date: '',
  currency: 'DOL',
  symbol: '',
  quantity: 0,
  price: 0,
  fees: 0
});

const optionsCurrency = ['EUR', 'DOL'];
const optionsType = ['BUY', 'SELL'];
const total = computed(() => 'toto');

const handleSubmit = () => {
  console.log('transactionState', transactionState.value);
};

const handleSelect = (event: object) => {
  // console.log('Selecting coin', event);
  transactionState.value.symbol = event.target.value;
};
</script>

<template>
  <div class="card-transaction">
    <!-- <div class="wallet-name">
      <label for="wallet-name">wallet-name</label>
      <input
        type="text"
        v-model="transactionState.walletName"
        name="wallet-name"
        id="wallet-name"
        required
      />
    </div> -->
    <TabGroup v-model="transactionState.currency" :options="optionsCurrency" />
    <TabGroup v-model="transactionState.type" :options="optionsType" />

    <div class="select-coin">
      <select @change="handleSelect">
        <option value="BTC">$BTC</option>
        <option value="ETH">$ETH</option>
        <option value="TAO">$TAO</option>
        <option value="TAO">$CKB</option>
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
    <div>
      <input type="submit" value="+ Add transaction" @click="handleSubmit" />
    </div>
  </div>
  <div>{{ transactionState }}</div>
</template>

<style scoped>
.card-transaction {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: var(--card-border-radius);
  padding: 10px;
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
