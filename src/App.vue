<script setup>
import Header_Custom from './components/Header_Custom.vue'
import Card from './components/Card.vue'
</script>

<script>
export default {
  data() {
    return {
      poke_data: undefined
    }
  },
  mounted(){
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(data => data.json())
    .then(data => this.poke_data = data)
    .then(data => console.log(data.sprites.front_default))
  }
} 
</script>

<template>
  <div>
    <Header_Custom />
    <Card v-if="poke_data" :poke_name="poke_data.name" :poke_image="poke_data.sprites.front_default" />
  </div>
</template>

<style scoped>
  div{
    width: fit-content;
    margin: 0 auto;
  }
</style>
