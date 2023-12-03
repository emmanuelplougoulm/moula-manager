<script setup lang="ts">
// import { ref } from 'vue';
import Modal from '@/components/commons/modal/modal.vue';
import { deletePortfolioById } from '@/services/portfolios/portfolios.service';
import { usePortfolioStore } from '@/stores/portfolioStore';

const emit = defineEmits(['close-modal']);

const portfolioStore = usePortfolioStore();
const id = portfolioStore.active.portfolioId;

const handleDeletePortfolio = async () => {
  await deletePortfolioById(id);
  emit('close-modal');
};
</script>

<template>
  <Modal>
    <template #header>
      <h3>Delete portfolio</h3>
    </template>
    <template #content>
      <p>Are you sure you want to delete this portfolio?</p>
    </template>
    <template #footer>
      <button @click="handleDeletePortfolio">
        <span>Delete</span>
      </button>
    </template>
  </Modal>
</template>
