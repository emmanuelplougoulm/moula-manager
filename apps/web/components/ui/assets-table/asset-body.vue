<script setup lang="ts">
const props = defineProps({
  asset: {
    type: Object,
    default: () => {}
  }
});

const { holdings, name, avgBuyPrice } = props.asset;
</script>

<template>
  <tbody>
    <tr>
      <td>{{ name }}</td>
      <td>WIP</td>
      <!-- <td>WIP</td>
      <td>WIP</td>
      <td>WIP</td> -->
      <td>
        <div>{{ holdings.totalValue }}</div>
        <div>{{ holdings.totalToken }} {{ name }}</div>
      </td>
      <td>{{ avgBuyPrice }}</td>
      <td>WIP</td>
    </tr>
  </tbody>
</template>

<style scoped lang="css">
td {
  border: 1px var(--color-border-grey) solid;
  padding: 0.5rem;
  text-align: right;
}
</style>
