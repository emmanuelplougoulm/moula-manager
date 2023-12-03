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
  <div class="overview">
    <div class="name">NAME: Display a name here</div>
    <div class="value">VALUE: Display total value here</div>
    <div class="fiat-invested">FIAT INVESTED SINCE BEGINNING: Display FIAT here</div>
    <div class="daily-profit-loss">Daily P/L: Display P/L here</div>
    <Button
      :text="'add transaction +'"
      class="add-transaction"
      @click="showModalTransaction = true"
    />
    <Button
      :text="'delete portfolio'"
      class="delete-portfolio"
      @click="showModalDeletePortfolio = true"
    />
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
  position: absolute;
  top: 100px;
  right: 30px;
}
</style>
