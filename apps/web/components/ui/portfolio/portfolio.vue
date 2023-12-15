<script setup lang="ts">
import { ref } from 'vue';
import { usePortfolioStore } from '@/stores/portfolioStore';

import ModalDeletePortfolio from '@/components/ui/modal-delete-portfolio/modal-delete-portfolio.vue';
import ChartboxSummary from '@/components/ui/chartbox-summary/chartbox-summary.vue';
import CardTransaction from '@/components/ui/card-transaction/card-transaction.vue';
import Button from '@/components/commons/button/button.vue';
import AssetsTable from '@/components/ui/assets-table/assets-table.vue';

defineProps({
  portfolio: {
    type: Object,
    default: () => ({})
  }
});

const store = usePortfolioStore();
const isModalDeletePFOpen = ref(false);
const showPanel = ref(false);

const toggleModalDeletePF = () => {
  isModalDeletePFOpen.value = !isModalDeletePFOpen.value;
};
const closePanel = () => {
  showPanel.value = false;
};
</script>

<template>
  <div class="wrapper">
    <div class="portfolio-infos">
      <div class="charts_wrapper">
        <ChartboxSummary />
        <div class="actions_wrapper">
          <Button :text="'add transaction +'" class="add-transaction" @click="showPanel = true" />
          <Button :text="'...'" class="delete-portfolio" @click="isModalDeletePFOpen = true" />
        </div>
      </div>
      <div class="assets_wrapper">
        <AssetsTable v-if="store.hasAssets" :assets="store.activePortfolio.assets" />
      </div>
    </div>
    <div>
      <CardTransaction :is-open="showPanel" @collapse="closePanel" />
    </div>
  </div>
  <ClientOnly>
    <Teleport to="#modal-root">
      <ModalDeletePortfolio v-if="isModalDeletePFOpen" @modal-close="toggleModalDeletePF" />
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
.wrapper {
  height: 100%;
  /* border: 1px red solid; */
  /* padding: 20px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.portfolio-infos {
  flex: 1;
  padding: 20px;
}

.transaction {
  position: absolute;
  right: 20px;
  top: 200px;
  width: 400px;
}

.add-transaction {
  border-radius: 4px;
  border: 1px solid #5973fe;
  color: white;
  font-size: 14px;
  padding: 0 16px;
  height: 30px;
  background-color: #5973fe;
}
.delete-portfolio {
  border-radius: 4px;
  border: 1px solid grey;
  color: white;
  font-size: 14px;
  width: 30px;
  height: 30px;
  background-color: grey;
  margin-left: 1rem;
}

.charts_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  width: 100%;
}
.actions_wrapper {
  display: flex;
  /* justify-content: end; */
}
.assets_wrapper {
  margin-top: 50px;
  /* display: flex; */
  /* justify-content: end; */
}
</style>
