<script setup lang="ts">
import Header from '@/components/ui/header/header.vue';
// import Footer from '@/components/ui/footer/footer.vue';
// import Drawer from '@/components/ui/drawer/drawer.vue';

const colorMode = useColorMode();

const theme = `${colorMode.preference}-mode`;
</script>

<template>
  <div class="app-container" :classes="theme">
    <Header />
    <div class="app-content-container">
      <!-- <Drawer /> -->
      <div class="sub-content-container">
        <NuxtPage />
        <div id="modal-root"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  /* border: 1px red solid; */
  /* height: 90vh; */
}
.app-content-container {
  display: flex;
  /* border: 1px red solid; */
  /* height: 100%; */
}
.sub-content-container {
  flex: 1;
}
</style>
