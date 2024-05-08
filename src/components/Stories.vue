<script setup>
import { toRefs, defineProps, ref } from "vue";
const Props = defineProps({
  pokeArray: Array,
});
const story = ref(null);
const { pokeArray } = toRefs(Props);

const scroll = ({ target }) => {
  if (target.id === "arrowRight") story.value.scrollBy({ left: 60 });
  else story.value.scrollBy({ left: -60 });
};
</script>

<template>
  <section class="poke-stories-container">
    <div class="poke-stories" ref="story">
      <div
        class="poke-story"
        v-for="{ image, name } in pokeArray"
        :key="image"
      >
        <img class="poke-story-photo" :src="image" alt="profile photo" />
        <p>{{ name }}</p>
      </div>
    </div>
    <ion-icon
      id="arrowLeft"
      @click="scroll"
      name="arrow-back-circle"
    ></ion-icon>
    <ion-icon
      id="arrowRight"
      @click="scroll"
      name="arrow-forward-circle"
    ></ion-icon>
  </section>
</template>

<style scoped>
.poke-stories-container {
  position: relative;
  width: calc(500px - 40px);
  height: fit-content;
  padding: 20px;
  border: 1px solid var(--border_color);
  border-radius: 6px;
  background-color: white;
}
.poke-stories {
  width: 100%;
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  overflow-x: hidden;
}
.poke-story {
  width: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
p {
  font-size: 12px;
  opacity: 0.5;
}
.poke-story-photo {
  height: 60px;
  width: 60px;
  padding: 2px;
  background-image: var(--principal_gradient);
  border-radius: 50%;
  overflow: hidden;
}
#arrowLeft,
#arrowRight {
  position: absolute;
  top: 40px;
  color: white;
  user-select: none;
}
#arrowRight {
  right: 20px;
}
</style>
