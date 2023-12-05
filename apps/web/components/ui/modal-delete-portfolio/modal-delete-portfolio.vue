<script setup lang="ts">
import BaseModal from '@/components/commons/base-modal/base-modal.vue';
import { deletePortfolioById } from '@/services/portfolios/portfolios.service';
import { usePortfolioStore } from '@/stores/portfolioStore';

defineProps({
  title: String
});

const emit = defineEmits(['modal-close']);

// eslint-disable-next-line no-undef
const toast = useToast();

const portfolioStore = usePortfolioStore();
const id = portfolioStore.active.portfolioId;

const handleDeletePortfolio = async () => {
  const response = await deletePortfolioById(id);

  if (response.deletedCount === 1) {
    toast.add({ title: 'Portfolio has been successfully deleted' });
  } else {
    toast.add({ title: 'Error' });
  }
  emit('modal-close');
};
</script>

<template>
  <BaseModal>
    <template #header>{{ title }}</template>
    <template #content>
      <p>Are you sure you want to delete this portfolio?</p>
    </template>
    <template #footer>
      <button @click="handleDeletePortfolio">Validate</button>
    </template>
  </BaseModal>
</template>
