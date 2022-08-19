<script setup>
import { reactive, onMounted } from "vue"

import Header_Custom from "./components/Header_Pokegram.vue"
import Card from "./components/Card.vue"
import Profile from "./components/Profile.vue"

const poke_data = reactive({
  data: undefined,
})

onMounted(async() => {
  const Data_1 = await fetch("https://pokeapi.co/api/v2/pokemon/3").then(data => data.json())
  const Data_2 = await fetch("https://dog.ceo/api/breeds/image/random").then(data => data.json())
  const Data = {
    ...Data_1,
    ...Data_2
  }
  poke_data.data = Data
  
})

</script>

<template>
  <div>
    <Header_Custom />
    <main>
      <div id="cards">
        <Card
          v-if="poke_data.data"
          :poke_name="poke_data.data.name"
          :poke_exp="poke_data.data.base_experience"
          :poke_image="poke_data.data.sprites.front_default"
          :poke_post="poke_data.data.message"
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
#cards {
  width: fit-content;
  margin: 10px auto;
}
</style>
