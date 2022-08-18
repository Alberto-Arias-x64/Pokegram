<script setup>
import Header_Custom from "./components/Header_Pokegram.vue"
import Card from "./components/Card.vue"
import Profile from "./components/Profile.vue"
</script>

<script>
export default {
  data() {
    return {
      poke_data: undefined,
    };
  },
  mounted() {
    fetch("https://pokeapi.co/api/v2/pokemon/3")
      .then((data) => data.json())
      .then((data) => (this.poke_data = data));
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((data) => (this.poke_data.post = data.message));
  },
};
</script>

<template>
  <div>
    <Header_Custom />
    <main>
      <div id="cards">
        <Card
          v-if="poke_data"
          :poke_name="poke_data.name"
          :poke_exp="poke_data.base_experience"
          :poke_image="poke_data.sprites.front_default"
          :poke_post="poke_data.post"
        />
      </div>
      <Profile />
    </main>
  </div>
</template>

<style scoped>
main {
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 700px 300px;
}
#cards{
  width: fit-content;
  margin: 10px auto;
}
</style>
