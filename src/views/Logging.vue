<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { userStore } from "../store/userStore.js";

const router = useRouter();

const userName = ref("");
const userPassword = ref("");

const handleCheck = () => {
  if (userName.value) {
    const {
      Handles: { changeName },
    } = userStore;
    changeName(userName.value);
    router.push({ path: "/home" });
  } else alert("register a name");
};
</script>

<template>
  <section class="poke-loggin-container">
    <img
      class="poke-loggin-img"
      src="/images/pokedexu_crop.png"
      alt="pokedex"
    />
    <div id="login_side">
      <div class="poke-loggin">
        <img class="poke-loggin-logo" src="/images/logo.png" alt="pokelogo" />
        <div class="poke-loggin-inputs">
          <input type="text" placeholder="User" v-model="userName" />
          <input
            type="password"
            placeholder="Password"
            v-model="userPassword"
          />
          <button @click="handleCheck">Log In</button>
        </div>
        <hr />
        <p>OR</p>
        <div class="poke-login-pokedex">
          <img src="/favicon.png" alt="pokeball" />
          <p>Login with Pokedex</p>
        </div>
        <p class="poke-text-small">Forgot password?</p>
      </div>
      <div>
        <span>Don't have an account? </span
        ><button class="secondary">Sign up</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.poke-loggin-container {
  height: 100vh;
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}
.poke-loggin-img {
  max-width: 300px;
  width: 100%;
  height: auto;
}
.poke-loggin {
  padding: 20px 40px;
  width: calc(350px - 80px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background-color: white;
  border: 1px solid var(--border_color);
}
#login_side {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.poke-loggin-logo {
  width: 70%;
}
.poke-loggin-inputs {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.poke-login-pokedex {
  height: 1ch;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: #a40707;
  font-weight: bold;
  cursor: pointer;
}
.poke-login-pokedex > img {
  height: 200%;
  width: auto;
}

@media screen and (width < 768px) {
  .poke-loggin-container {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
  .poke-loggin-img {
    display: none;
  }
}
</style>
