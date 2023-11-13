<template>
  <div class="app-container">
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

<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import Drawer from '@/components/Drawer/Drawer.vue';
</script>

<style scoped>
.app-container {
  border: 1px red solid;
  height: 90vh;
  background-color: lightgrey;
}
.app-content-container {
  display: flex;
  /* border: 1px red solid; */
  background-color: lightgrey;
  /* height: 100%; */
}
.sub-content-container {
  background-color: #7fffd4;
  flex: 1;
}
</style>
