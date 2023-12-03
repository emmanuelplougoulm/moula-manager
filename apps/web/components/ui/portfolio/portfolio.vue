<script setup lang="ts">
import { ref } from 'vue';
import ModalTransaction from '@/components/ui/modal-transaction/modal-transaction.vue';
import ModalDeletePortfolio from '@/components/ui/modal-delete-portfolio/modal-delete-portfolio.vue';
import Button from '@/components/commons/button/button.vue';

defineProps({
  portfolio: {
    type: Object,
    required: true
  }
});

const showModalTransaction = ref(false);
const showModalDeletePortfolio = ref(false);
</script>

<template>
  <div>
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
        <Button :text="'...'" class="delete-portfolio" @click="showModalDeletePortfolio = true" />
      </div>
    </div>

    <ModalTransaction v-if="showModalTransaction" @close-modal="showModalTransaction = false" />
    <ModalDeletePortfolio
      v-if="showModalDeletePortfolio"
      @close-modal="showModalDeletePortfolio = false"
    />

    <div class="assets-list">Assets list: Display assets list here</div>
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

.charts_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
}
.actions_wrapper {
  display: flex;
  /* justify-content: end; */
}
</style>
