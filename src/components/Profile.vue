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
  <section v-if="profile" id="side_panel">
    <div class="card_profile">
      <div class="card_profile_photo">
        <img :src="profile.sprites.front_default" alt="" />
      </div>
      <div>
        <h5>{{ userName }}@pokegram</h5>
        <p>{{ profile.name }}</p>
      </div>
      <button class="secondary">Switch</button>
    </div>

    <div id="separator">
      <h4>Suggestions For You</h4>
      <h5>See All</h5>
    </div>

    <div
      class="card_profile"
      v-for="{ image, name } in suggestedList"
      :key="name"
    >
      <div class="card_profile_photo min">
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
#side_panel {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.card_profile {
  height: fit-content;
  display: grid;
  grid-template-columns: min-content auto min-content;

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
.min {
  height: 32px;
  width: 32px;
}
#separator {
  display: grid;
  grid-template-columns: auto max-content;
}
</style>
