<script setup lang="ts">
import Modal from '@/components/ui/modal/modal.vue';
import CardTransaction from '@/components/card-transaction/card-transaction.vue';
</script>

<template>
  <Modal>
    <template #header>
      <h3>Add transaction</h3>
    </template>
    <template #content>
      <CardTransaction />
    </template>
    <!-- <template #footer>
      <h3>Footer</h3>
    </template> -->
  </Modal>
</template>
