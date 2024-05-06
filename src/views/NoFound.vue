<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const handleReturn = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <main>
    <h2>Sorry, this page isn't available.</h2>
    <p>
      The link you followed may be broken, or the page may have been removed.
      <button class="secondary" @click="handleReturn">
        Go back to Pokegram.
      </button>
    </p>
  </main>
</template>

<style scoped>
main{
  padding: 20px;
}
h2,
p {
  text-align: center;
}
</style>
