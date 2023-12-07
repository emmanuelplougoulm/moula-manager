<script setup lang="ts">
import { ref } from 'vue';
import ModalAddTransaction from '@/components/ui/modal-add-transaction/modal-add-transaction.vue';
import ModalDeletePortfolio from '@/components/ui/modal-delete-portfolio/modal-delete-portfolio.vue';
import Button from '@/components/commons/button/button.vue';
import Table from '@/components/ui/table/table.vue';

defineProps({
  portfolio: {
    type: Object,
    default: () => ({})
  }
});

const showModalTransaction = ref(false);
const isModalDeletePFOpen = ref(false);

const toggleModalDeletePF = () => {
  isModalDeletePFOpen.value = !isModalDeletePFOpen.value;
};
</script>

<template>
  <div class="wrapper">
    <div class="charts_wrapper">
      <div>
        <div class="name">NAME: Display a name here</div>
        <div class="value">VALUE: Display total value here</div>
        <div class="fiat-invested">FIAT INVESTED SINCE BEGINNING: Display FIAT here</div>
        <div class="daily-profit-loss">Daily P/L: Display P/L here</div>
      </div>
      <div class="actions_wrapper">
        <Button
          :text="'add transaction +'"
          class="add-transaction"
          @click="showModalTransaction = true"
        />
        <Button :text="'...'" class="delete-portfolio" @click="isModalDeletePFOpen = true" />
      </div>
    </div>
    <div class="assets_wrapper">
      <Table />
    </div>
    <ClientOnly>
      <Teleport to="#modal-root">
        <ModalAddTransaction
          v-if="showModalTransaction"
          @close-modal="showModalTransaction = false"
        />
        <ModalDeletePortfolio v-if="isModalDeletePFOpen" @modal-close="toggleModalDeletePF" />
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style scoped>
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

.wrapper {
  padding: 20px;
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
