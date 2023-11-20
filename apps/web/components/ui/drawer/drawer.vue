<script setup lang="ts">
const isCollapsed = ref(false);
const handleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div class="drawer-container" :class="{ active: !isCollapsed, collapsed: isCollapsed }">
    <div @click="handleCollapse" class="button-collapse" :class="{ hidden: isCollapsed }">
      Collapse
    </div>
    <div class="button-expand" :class="{ hidden: !isCollapsed }">
      <div @click="handleCollapse">Collapse</div>
    </div>
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
}
.button-expand.hidden {
  display: none;
}
</style>
