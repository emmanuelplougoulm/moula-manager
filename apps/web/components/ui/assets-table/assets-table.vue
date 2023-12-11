<script setup lang="ts">
import AssetBody from '@/components/ui/assets-table/asset-body.vue';
import { computed, defineProps } from 'vue';
import { calculateTokenHoldings, calculateAvgBuyPrice } from '@/utils/index';

const props = defineProps({
  assets: {
    type: Array<object>,
    required: true
  }
});

export interface ITransaction {
  __v?: number;
  _id?: string;
  amount: number;
  asset: string;
  currency: string;
  date: string;
  fees: number;
  portfolioId: string;
  price: number;
  transactionId: string;
  type: string;
}

// console.log('assets', props.assets);

const displayReadyAssets = computed(() => {
  return props.assets.map((transactionArray: any) => {
    const tokenHoldings = calculateTokenHoldings(transactionArray);
    const avgBuyPrice = calculateAvgBuyPrice(transactionArray);

    // console.log('transactionArray', transactionArray);

    return {
      name: transactionArray[0].asset,
      avgBuyPrice: avgBuyPrice,
      holdings: {
        totalToken: tokenHoldings,
        totalValue: 'holdings * current price'
      }
    };
  });
});
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <!-- <th>1h%</th>
          <th>24h%</th>
          <th>7d%</th> -->
          <th>Holdings</th>
          <th>Avg Buy Price</th>
          <th>Profit/Loss</th>
        </tr>
      </thead>
      <AssetBody
        v-for="(displayReadyAsset, index) in displayReadyAssets"
        :asset="displayReadyAsset"
        :key="index"
      />
    </table>
  </div>
</template>

<style lang="css">
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: right;
  font-size: 14px;
  font-weight: 400;
}
</style>
