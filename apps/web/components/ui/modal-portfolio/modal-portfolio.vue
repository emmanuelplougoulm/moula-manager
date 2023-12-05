<script setup lang="ts">
import { reactive } from 'vue';
import dayjs from 'dayjs';
import Modal from '@/components/commons/modal/modal.vue';
import BaseInput from '@/components/commons/base-input/base-input.vue';
import { createPortfolio } from '@/services/portfolios/portfolios.service';

const timeNow = dayjs();
// eslint-disable-next-line no-undef
const toast = useToast();

const portfolioState = reactive({
  portfolioName: '',
  timeCreated: timeNow,
  timeUpdated: '',
  assets: []
});

const emit = defineEmits(['click']);

const handleCreatePortfolio = async () => {
  const response = await createPortfolio(portfolioState);

  if (response.portfolioId) {
    toast.add({ title: 'Portfolio has been successfully created' });
  } else {
    toast.add({ title: 'Error' });
  }
  emit('click');
};
</script>

<template>
  <Modal>
    <template #header>
      <h3>Add Wallet</h3>
    </template>
    <template #content>
      <BaseInput :label="'toto'" v-model="portfolioState.portfolioName" />
    </template>
    <template #footer>
      <h3>Footer</h3>
      <button class="modal-default-button" @click="handleCreatePortfolio">OK</button>
    </template>
  </Modal>
</template>
