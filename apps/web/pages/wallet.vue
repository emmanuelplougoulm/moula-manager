<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/ui/modal/modal.vue';

const showModal = ref(false);
</script>

<template>
  <div class="button-container">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <template v-slot:header>
        <h3>custom header</h3>
      </template>
    </Modal>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  flex-direction: row-reverse;
}
</style>
