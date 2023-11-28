<script setup lang="ts">
import { reactive } from 'vue';
import dayjs from 'dayjs';
import Modal from '@/components/commons/modal/modal.vue';
import TextInput from '@/components/commons/text-input/text-input.vue';
import { createPortfolio } from '@/services/portfolios/portfolios.service';
import { useToasterStore } from '@/stores/toasterStore';

const timeNow = dayjs();

const portfolioState = reactive({
  portfolioName: '',
  timeCreated: timeNow,
  timeUpdated: '',
  assets: []
});

const toasterStore = useToasterStore();
const successToast = () => toasterStore.success({ text: 'Yahoooooo!' });

const emit = defineEmits(['click']);

const handleCreatePortfolio = async () => {
  const response = await createPortfolio(portfolioState);
  console.log('response', response);
  // if (response.result.portfolioId) successToast();
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
      <button @click="successToast">Click me!</button>
    </template>
    <template #footer>
      <h3>Footer</h3>
      <button class="modal-default-button" @click="handleCreatePortfolio">OK</button>
    </template>
  </Modal>
</template>
