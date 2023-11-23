<script setup lang="ts">
import { reactive } from 'vue';
import dayjs from 'dayjs';
import Modal from '@/components/commons/modal/modal.vue';
import TextInput from '@/components/commons/text-input/text-input.vue';
import { createPortfolio } from '@/services/portfolios/portfolios.service';

const timeNow = dayjs();

const portfolioState = reactive({
  portfolioName: '',
  timeCreated: timeNow,
  timeUpdated: '',
  assets: []
});

const emit = defineEmits(['click']);

const handleCreatePortfolio = () => {
  createPortfolio(portfolioState);
  emit('click');
};
</script>

<template>
  <Modal>
    <template #header>
      <h3>Add Wallet</h3>
    </template>
    <template #content>
      <TextInput :label="'toto'" v-model="portfolioState.portfolioName" />
    </template>
    <template #footer>
      <h3>Footer</h3>
      <button class="modal-default-button" @click="handleCreatePortfolio">OK</button>
    </template>
  </Modal>
</template>
