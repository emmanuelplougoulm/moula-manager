<script setup lang="ts">
import { getAllTransactions } from '@/services/transactions/transactions.service';
import CardTotalAmount from '@/components/ui/card-total-amount/card-total-amount.vue';
// const allTransactions = onMounted(() => {
//   return getAllTransactions();
// });
</script>

<template>
  <!-- <div class="overview">{{ allTransactions }}</div> -->
  <div class="overview" @click="getAllTransactions">TUTU</div>
  <CardTotalAmount />
</template>

<style scoped>
.overview {
  cursor: pointer;
}
</style>
