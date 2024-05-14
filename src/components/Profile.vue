<script setup>
import { ref, onBeforeMount, defineProps, toRefs } from "vue";
import { userStore } from "../store/userStore";

const profile = ref(undefined);
const {
  userName,
  Handles: { changeImage },
} = userStore;

onBeforeMount(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((data) => data.json())
    .then((data) => {
      profile.value = data;
      changeImage(data.sprites.front_default);
    });
});

const Props = defineProps({
  suggestedList: Array,
});

const { suggestedList } = toRefs(Props);
</script>

<template>
  <section v-if="profile" class="poke-sidePanel">
    <div class="poke-profile">
      <div class="poke-profile-photo">
        <img :src="profile.sprites.front_default" alt="" />
      </div>
      <div>
        <h5>{{ userName }}@pokegram</h5>
        <p>{{ profile.name }}</p>
      </div>
      <button class="secondary">Switch</button>
    </div>

    <div class="poke-separator">
      <h4>Suggestions For You</h4>
      <h5>See All</h5>
    </div>

    <div
      class="poke-profile"
      v-for="{ image, name } in suggestedList"
      :key="name"
    >
      <div class="poke-profile-photo min">
        <img :src="image" alt="profile photo" />
      </div>
      <div>
        <h5>{{ name }}</h5>
        <p>Followed by X64</p>
      </div>
      <button class="secondary">Follow</button>
    </div>
  </section>
</template>

<style scoped>
h4 {
  font-size: 14px;
  color: #8e8e8e;
}
p {
  margin: 0;
  color: #8e8e8e;
  font-size: 12px;
}
.poke-sidePanel {
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 15px;
  top: 20px;
  height: fit-content;
}
.poke-profile {
  height: fit-content;
  display: grid;
  grid-template-columns: min-content auto min-content;

  align-items: center;

  gap: 10px;
}
.poke-profile-photo {
  height: 65px;
  width: 65px;
  padding: 2px;
  background-image: var(--principal_gradient);
  border-radius: 50%;
  overflow: hidden;
}
.poke-profile-photo > img {
  scale: 2;
  filter: drop-shadow(0 0 1px black);
}
.min {
  height: 32px;
  width: 32px;
}
.poke-separator {
  display: grid;
  grid-template-columns: auto max-content;
}

@media screen and (width < 920px) {
  .poke-sidePanel {
    display: none;
  }
}
</style>
