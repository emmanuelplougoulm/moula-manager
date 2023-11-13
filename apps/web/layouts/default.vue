<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import Drawer from '@/components/Drawer/Drawer.vue';

const colorMode = useColorMode();

const theme = `${colorMode.preference}-mode`;
</script>

<template>
  <div class="app-container" :classes="theme">
    <Header />
    <div class="app-content-container">
      <Drawer />
      <div class="sub-content-container">
        <NuxtPage />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.app-container {
  border: 1px red solid;
  height: 90vh;
}
.app-content-container {
  display: flex;
  border: 1px red solid;
  /* height: 100%; */
}
.sub-content-container {
  flex: 1;
}
</style>
