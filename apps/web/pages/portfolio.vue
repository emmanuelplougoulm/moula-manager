<script setup lang="ts">
import Drawer from '@/components/ui/drawer/drawer.vue';
// import Overview from '@/components/ui/overview/overview.vue';
import Portfolio from '@/components/ui/portfolio/portfolio.vue';
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();

// const showOverviewComponent = false;
</script>

<template>
  <div class="container">
    <Drawer />
    <div class="content">
      <!-- {{ portfolioStore.hasAssets }} -->
      <!-- <Overview v-if="showOverviewComponent" /> -->
      <Portfolio :portfolio="portfolioStore.active" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  /* border: 2px violet solid; */
}
.content {
  flex: 1;
  /* border: 1px red solid; */
  /* height: 800px; */
}
</style>
