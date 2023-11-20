<script setup lang="ts">
import Label from '@/components/commons/label/label.vue';
</script>

<template>
  <div>
    <Label :text="'Total portfolio value'" />
    <div>$0.00</div>
    <div class="plus-value">($0.00) => ici on calculera la valeur journalière la plus value</div>
  </div>
</template>

<style scoped>
.plus-value {
  color: lightgreen;
}
</style>
