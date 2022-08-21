<script setup>
import { reactive, onBeforeMount } from "vue"

import Card from "../components/Card.vue"
import Profile from "../components/Profile.vue"
import Spiner from '../components/Spiner.vue'

const Poke_Data = reactive({
  Data: [],
})

onBeforeMount(async() => {
  Poke_Data.Data.push(await Get_Data(1))
  Poke_Data.Data.push(await Get_Data(2))
  Poke_Data.Data.push(await Get_Data(3))
  Poke_Data.Data.push(await Get_Data(4))
  Poke_Data.Data.push(await Get_Data(5))
})

const Get_Data = async id => {
  const Data_1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(Data => Data.json())
  const Data_2 = await fetch("https://dog.ceo/api/breeds/image/random").then(Data => Data.json())
  const Data = {
    ...Data_1,
    ...Data_2
  }
  return Data
}

</script>

<template>
    <main>
        <div id="cards">
        <Card
            v-for="{name, base_experience, sprites, message, id } in Poke_Data.Data"
            :poke_name="name"
            :poke_exp="base_experience"
            :poke_image="sprites.front_default"
            :poke_post="message"
            :key="id" 
        />
        <Spiner/>
        </div>
        <Profile />
    </main>
</template>

<style scoped>
main {
  height: 100%;

  display: grid;
  grid-template-columns: 700px 300px;

  justify-content: center;

  overflow-y: auto;
}
#cards {
  width: fit-content;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>