<script setup lang="ts">
import { ref } from 'vue';
// import Modal from '@/components/ui/modal/modal.vue';
import ModalTransaction from '@/components/ui/modal-transaction/modal-transaction.vue';

const showModal = ref(false);
</script>

<template>
  <div class="button-container">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <ModalTransaction v-if="showModal" @close="showModal = false" />
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  flex-direction: row-reverse;
}
</style>
