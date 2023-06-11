<template>
  <span></span>
</template>

<style scoped>
span {
  display: inline-block;
  width: 4.75rem;
  height: 4.75rem;
  border: 0.625rem solid var(--neutral-70);
  border-radius: 50%;
  border-top-color: var(--primary-30);
  animation: spin linear 0.5s infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
