<script setup>
import { ref, defineProps } from "vue";

const newComment = ref("");

const props = defineProps({
  pokeName: String,
  pokeImage: String,
  pokeHeight: Number,
  pokeWeight: Number,
  pokeExp: Number,
  pokePost: String,
});

function handleNewPost() {
  newComment.value = "";
}
</script>

<template>
  <div class="poke-card">
    <header class="poke-card-header">
      <div class="card_profile_photo">
        <img :src="props.pokeImage" alt="profile photo" />
      </div>
      <h5>{{ props.pokeName }}</h5>
    </header>
    <picture>
      <img :src="props.pokePost" alt="poke post" />
    </picture>
    <div class="poke-card-actions">
      <div class="poke-card-icons">
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div class="poke-card-likes">
        <p>{{ props.pokeExp }}</p>
        <p>PokeLikes</p>
      </div>
    </div>
    <div class="poke-card-comment">
      <ion-icon name="happy-outline"></ion-icon>
      <input
        type="text"
        name="comment"
        v-model="newComment"
        placeholder="Add a comment..."
      />
      <button class="secondary" @click="handleNewPost">Post</button>
    </div>
  </div>
</template>

<style scoped>
.poke-card {
  width: 500px;
  height: fit-content;

  display: grid;
  grid-template-rows: 60px 500px 100px 50px;

  border: 1px solid var(--border_color);

  border-radius: 6px;
  background-color: white;
}
.poke-card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  border-bottom: 1px solid var(--border_color);
}
.card_profile_photo {
  height: 35px;
  width: 35px;
  padding: 2px;
  background-image: var(--principal_gradient);
  border-radius: 50%;
  overflow: hidden;
}
.card_profile_photo > img {
  scale: 2;
  filter: drop-shadow(0 0 1px black);
}
.poke-card-actions {
  padding: 10px;
}
.poke-card-icons {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.poke-card-icons > *:hover {
  opacity: 0.5;
}
.poke-card-likes {
  display: flex;
  flex-direction: row;
  gap: 1ch;

  font-size: small;
  font-weight: bold;
}
.poke-card-comment {
  padding: 0 10px;
  display: grid;
  grid-template-columns: max-content auto min-content;
  gap: 10px;
  align-items: center;

  border-top: 1px solid var(--border_color);
}
</style>
