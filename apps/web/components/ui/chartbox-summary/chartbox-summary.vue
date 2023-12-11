<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolioStore';

const store = usePortfolioStore();
</script>

<template>
  <div class="chartbox-wrapper">
    <div class="name">{{ store.activePortfolio.portfolioName }}</div>
    <div class="total">$5000</div>
    <div>24h P/L</div>
  </div>
</template>

<style scoped>
.chartbox-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 800px;
  padding: 20px;
  border: 1px var(--color-border-grey) solid;
  border-radius: 4px;
}
.chartbox-wrapper .name {
  font-weight: 800;
}
.chartbox-wrapper .total {
  font-weight: 400;
  font-size: 32px;
}
</style>
