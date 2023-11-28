<script setup lang="ts">
import CardTransaction from '@/components/ui/card-transaction/card-transaction.vue';

defineProps({
  portfolio: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="overview">
    <div class="name">NAME: Display a name here</div>
    <div class="value">VALUE: Display total value here</div>
    <div class="fiat-invested">FIAT INVESTED SINCE BEGINNING: Display FIAT here</div>
    <div class="daily-profit-loss">Daily P/L: Display P/L here</div>

    <div class="transaction">
      <CardTransaction />
    </div>

    <div class="assets-list">Assets list: Display assets list here</div>
  </div>
</template>

<style scoped>
.transaction {
  position: absolute;
  right: 20px;
  width: 400px;
}
</style>
