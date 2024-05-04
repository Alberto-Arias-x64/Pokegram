<script setup>
import { toRefs, defineProps, ref } from "vue";
const Props = defineProps({
  poke_array: Array,
});
const story = ref(null);
const { poke_array } = toRefs(Props);

const scroll = ({ target }) => {
  if (target.id === "arrow_right") {
    story.value.scrollBy({
      left: 60,
      behavior: "smooth",
    });
  } else {
    story.value.scrollBy({
      left: -60,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <section class="cards">
    <div class="cards_container" ref="story">
      <div
        class="card"
        v-for="{ image, name } in poke_array"
        :key="image"
        :src="image"
        alt=""
      >
        <img class="profile_photo" :src="image" alt="" />
        <p>{{ name }}</p>
      </div>
    </div>
    <ion-icon
      id="arrow_left"
      @click="scroll"
      name="arrow-back-circle"
    ></ion-icon>
    <ion-icon
      id="arrow_right"
      @click="scroll"
      name="arrow-forward-circle"
    ></ion-icon>
  </section>
</template>

<style scoped>
.cards {
  position: relative;
  width: calc(500px - 40px);
  height: fit-content;
  padding: 20px;

  border: 1px solid var(--border_color);

  border-radius: 6px;
  background-color: white;
}
.cards_container {
  width: 100%;
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  overflow-x: hidden;
}
.card {
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
.profile_photo {
  height: 60px;
  width: 60px;
  padding: 2px;

  background-image: var(--principal_gradient);
  border-radius: 50%;

  overflow: hidden;
}
#arrow_left,
#arrow_right {
  position: absolute;
  top: 40px;
  color: white;
  user-select: none;
}
#arrow_right {
  right: 20px;
}
</style>
