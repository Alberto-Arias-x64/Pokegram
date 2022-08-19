<script setup>
import { ref, defineProps, toRef } from "vue"

const new_comment = ref("")

const props_ext = defineProps({
  poke_name: String,
  poke_image: String,
  poke_height: String,
  poke_weight: String,
  poke_exp: String,
  poke_post: String,
})

const props = toRef(props_ext)

function click_post(params) {
  new_comment.value = ""
}
console.log(props)
</script>

<template>
  <div class="card">
    <header>
      <div class="card_profile_photo">
        <img :src="props.poke_image" alt="" />
      </div>
      <h5>{{ props.poke_name }}</h5>
    </header>
    <div class="card_post">
      <img :src="props.poke_post" alt="" />
    </div>
    <div class="comments">
      <div class="icons">
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div class="likes">
        <p>{{ props.poke_exp }}</p>
        <p>PokeLikes</p>
      </div>
    </div>
    <div class="new_comment">
      <ion-icon name="happy-outline"></ion-icon>
      <input
        type="text"
        name=""
        id=""
        v-model="new_comment"
        placeholder="Add a comment..."
      />
      <button @click="click_post">Post</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 500px;
  height: fit-content;

  display: grid;
  grid-template-rows: 60px 500px 100px 50px;

  border: 1px solid var(--border_color);

  border-radius: 6px;
  background-color: white;
}
header {
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
.comments {
  padding: 10px;
}
.icons {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.icons > *:hover {
  opacity: 0.5;
}
.likes {
  display: flex;
  flex-direction: row;
  gap: 1ch;

  font-size: small;
  font-weight: bold;
}
.new_comment {
  padding: 0 10px;
  display: grid;
  grid-template-columns: max-content auto min-content;
  gap: 10px;
  align-items: center;

  border-top: 1px solid var(--border_color);
}
</style>