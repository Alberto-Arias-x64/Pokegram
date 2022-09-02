<script setup>
  import {ref, onBeforeMount} from 'vue'
  import { Store } from '../store/store'

  const profile = ref(undefined)
  const {User_Name} = Store

  onBeforeMount(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(data => data.json())
      .then(data => profile.value = data)
  })

</script>

<template>
  <div v-if="profile" id="side_panel">
    <div class="card_profile_photo">
      <img :src="profile.sprites.front_default" alt="" />
    </div>
    <div>
      <h5>{{ User_Name }}@pikagram</h5>
      <p>{{ profile.name }}</p>
    </div>
    <button>Switch</button>
  </div>
</template>

<style scoped>
#side_panel {
  height: fit-content;
  display: flex;
  flex-direction: row;

  align-items: center;

  gap: 10px;
}
.card_profile_photo {
  height: 65px;
  width: 65px;
  padding: 2px;
  background-image: var(--principal_gradient);
  border-radius: 50%;
  overflow: hidden;
}
.card_profile_photo > img {
  scale: 2;
  filter: drop-shadow(0 0 1px black);
}
p {
  margin: 0;
  color: #8e8e8e;
}
</style>