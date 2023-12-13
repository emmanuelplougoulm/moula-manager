<script setup lang="ts">
import { defineProps } from 'vue';
import { reactive } from 'vue';
import dayjs from 'dayjs';
import BaseModal from '@/components/commons/base-modal/base-modal.vue';
import BaseInput from '@/components/commons/base-input/base-input.vue';
import { createPortfolio } from '@/services/portfolios/portfolios.service';
import { getPortfolios } from '@/services/portfolios/portfolios.service';
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();

defineProps({
  title: String
});

const timeNow = dayjs();

const portfolioState = reactive({
  portfolioName: '',
  timeCreated: timeNow,
  timeUpdated: '',
  assets: []
});

const emit = defineEmits(['modal-close']);

const handleCreatePortfolio = async () => {
  const response = await createPortfolio(portfolioState);

  if (response.portfolioId) {
    // toast.add({ title: 'Portfolio has been successfully created' });

    const allPortfolios = await getPortfolios();
    portfolioStore.setPortfolios(allPortfolios);
    portfolioStore.setActivePortfolio(allPortfolios[0]);
  } else {
    // toast.add({ title: 'Error' });
  }
  emit('modal-close');
};
</script>

<template>
  <BaseModal>
    <template #header>{{ title }}</template>
    <template #content>
      <BaseInput v-model="portfolioState.portfolioName" />
    </template>
    <template #footer>
      <button @click="handleCreatePortfolio">Validate</button>
    </template>
  </BaseModal>
</template>
