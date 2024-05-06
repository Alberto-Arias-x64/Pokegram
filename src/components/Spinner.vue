<template>
  <div class="poke-spinner-container">
    <div class="poke-spinner"></div>
  </div>
</template>

<style scoped>
.poke-spinner-container {
  width: 100%;
  display: flex;

  justify-content: center;
}
.poke-spinner {
  width: 50px;
  height: 50px;

  border: 2px solid transparent;

  border-top: 2px solid black;
  border-radius: 100%;

  animation: spin 600ms linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
