<script setup>
import { reactive, onBeforeMount, onMounted, ref } from "vue";

import Card from "../components/Card.vue";
import Profile from "../components/Profile.vue";
import Spiner from "../components/Spiner.vue";
import Stories from "../components/Stories.vue";
import Side from "../components/Aside.vue";

const Poke_Data = reactive({
  Data: [],
  Counter: 1,
});

const Poke_Array = ref([]);

onBeforeMount(() => {
  Add_Data();
});

const Get_Data = async (id) => {
  const Data_1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (Data) => Data.json()
  );
  const Data_2 = await fetch("https://dog.ceo/api/breeds/image/random").then(
    (Data) => Data.json()
  );
  const Data = {
    ...Data_1,
    ...Data_2,
  };
  Poke_Array.value.push({
    image: Data_1.sprites.front_default,
    name: Data_1.name,
  });
  return Data;
};

const Add_Data = async () => {
  Poke_Data.Data.push(await Get_Data(Poke_Data.Counter));
};

onMounted(() => {
  const options = {
    root: document.querySelector("body"),
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      Poke_Data.Counter++;
      Add_Data();
    });
  };

  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector("#spiner_main");
  observer.observe(target);
});
</script>

<template>
  <main>
    <Side />
    <div id="cards">
      <Stories :poke_array="Poke_Array" />
      <Card
        v-for="{
          name,
          base_experience,
          sprites: { front_default },
          message,
          id,
        } in Poke_Data.Data"
        :poke_name="name"
        :poke_exp="base_experience"
        :poke_image="front_default"
        :poke_post="message"
        :key="id"
      />
      <Spiner id="spiner_main" />
      <br />
    </div>
    <Profile :suggested_list="Poke_Array" />
  </main>
</template>

<style scoped>
main {
  padding: 20px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: max-content auto max-content;
}
#cards {
  width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
