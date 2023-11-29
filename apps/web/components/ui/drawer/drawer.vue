<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ModalPortfolio from '@/components/ui/modal-portfolio/modal-portfolio.vue';
import { getPortfolios, getPortfolioById } from '@/services/portfolios/portfolios.service';
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();

const showModalPortfolio = ref(false);
const isCollapsed = ref(false);

const handleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

onMounted(async () => {
  const allPortfolios = await getPortfolios();
  portfolioStore.setPortfolios(allPortfolios);
});

async function handleActivePortfolio(id: string): Promise<void> {
  const response = await getPortfolioById(id);
  portfolioStore.setActivePortfolio(response[0]);
}
</script>

<template>
  <div class="drawer-container" :class="{ active: !isCollapsed, collapsed: isCollapsed }">
    <div @click="handleCollapse" class="button-collapse" :class="{ hidden: isCollapsed }">Hide</div>
    <div class="tabs" :class="{ hidden: isCollapsed }">
      <div
        v-for="portfolio in portfolioStore.all"
        :key="portfolio.portfolioId"
        :class="{ active: portfolioStore.isActive(portfolio.portfolioId) }"
        class="tab"
        @click="handleActivePortfolio(portfolio.portfolioId)"
      >
        {{ portfolio.portfolioName }}
      </div>
    </div>
    <div
      class="create-portfolio"
      :class="{ hidden: isCollapsed }"
      @click="showModalPortfolio = true"
    >
      Add portfolio +
    </div>
    <div class="button-expand" :class="{ hidden: !isCollapsed }">
      <div @click="handleCollapse">Collapse</div>
    </div>
    <ModalPortfolio v-if="showModalPortfolio" @click="showModalPortfolio = false" />
  </div>
</template>

<style scoped>
.drawer-container {
  display: flex;
  flex-direction: column;
  border-right: 0.0625rem var(--color-border-grey) solid;
  height: 100vh;
  width: 20rem;
  position: relative;
  transition: width 0.35s cubic-bezier(0.82, 0.085, 0.395, 0.895);
}
.drawer-container.collapsed {
  width: 3.5rem;
}
.button-collapse {
  display: block;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 10px;
  border-radius: 4px;
  padding: 0.5rem;
}

.button-collapse:hover {
  background-color: var(--color-bg-lighter);
}
.button-collapse.hidden {
  display: none;
}

.button-expand {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform: rotate(-90deg);
  cursor: pointer;
}
.button-expand.hidden {
  display: none;
}

.tabs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  top: 50px;
  left: 20px;
  width: 18rem;
}
.tabs.hidden,
.create-portfolio.hidden {
  display: none;
}

.create-portfolio {
  cursor: pointer;
  position: absolute;
  top: 200px;
  left: 20px;
  padding: 8px;
  border-radius: 4px;
}
.create-portfolio:hover {
  background-color: var(--color-bg-lighter);
}
.tab.active {
  background-color: #12121a;
}
.tab {
  border-radius: 4px;
  cursor: pointer;
  padding: 8px;
}
.tab:hover {
  background-color: var(--color-bg-lighter);
}
</style>
