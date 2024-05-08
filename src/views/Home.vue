<script setup>
import { onBeforeMount, onMounted, ref } from "vue";

import Card from "../components/Card.vue";
import Profile from "../components/Profile.vue";
import Spinner from "../components/Spinner.vue";
import Stories from "../components/Stories.vue";
import Side from "../components/Aside.vue";

import { postStore } from "../store/postStore.js";
import { getRandomPost } from "../helpers/fetches.js";

const pokeArray = ref([]);
let counter = 1;
const {
  data,
  Handles: { loadData },
} = postStore;

onBeforeMount(() => {
  handleLoadData();
});

const handleLoadData = async () => {
  const [data1, data2] = await getRandomPost(counter);
  loadData(data1);
  pokeArray.value.push(data2);
};

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback = (entries) => {
    entries.forEach(() => {
      counter++;
      handleLoadData();
    });
  };

  const IO = new IntersectionObserver(callback, options);
  const target = document.querySelector("#spinner");
  IO.observe(target);
});
</script>

<template>
  <main>
    <Side />
    <section class="poke-cards-container">
      <div class="poke-cards">
        <Stories :pokeArray="pokeArray" />
        <Card
          v-for="{
            name,
            base_experience,
            sprites: { front_default },
            message,
            id,
          } in data"
          :pokeName="name"
          :pokeExp="base_experience"
          :pokeImage="front_default"
          :pokePost="message"
          :key="id"
        />
        <Spinner id="spinner" />
        <br />
      </div>
    </section>
    <Profile :suggestedList="pokeArray" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  justify-content: center;
}
.poke-cards-container {
  width: 100%;
}
.poke-cards {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
