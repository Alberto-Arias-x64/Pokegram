<script>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup(props) {
    const home = ref("home");

    const router = useRouter();
    const route = useRoute();

    function handleNavigate({ target }) {
      router.push({ path: `/${target.id}` }).then(() => {
        if (route.path == `/${target.id}`) home.value = target.id;
      });
    }

    watch(
      () => route.path,
      () => {
        home.value = route.path.slice(1);
      }
    );

    return { handleNavigate, home };
  },
};
</script>

<template>
  <aside class="poke-aside">
    <div class="poke-aside-logo">
      <img @click="handleNavigate" id="login" src="/images/logo.png" alt="pokeLogo" />
    </div>
    <nav class="poke-aside-nav">
      <p @click="handleNavigate" id="home">
        <ion-icon
          :name="home != 'home' ? 'home-outline' : 'home-sharp'"
        ></ion-icon>
        Home
      </p>
      <p @click="handleNavigate" id="chat">
        <ion-icon
          :name="
            home != 'chat'
              ? 'chatbubble-ellipses-outline'
              : 'chatbubble-ellipses-sharp'
          "
        ></ion-icon>
        Chat
      </p>
      <p @click="handleNavigate" id="new">
        <ion-icon
          :name="home != 'new' ? 'add-circle-outline' : 'add-circle-sharp'"
        ></ion-icon>
        Create
      </p>
      <p @click="handleNavigate" id="search">
        <ion-icon
          :name="home != 'search' ? 'compass-outline' : 'compass-sharp'"
        ></ion-icon>
        Search
      </p>
      <p @click="handleNavigate" id="like">
        <ion-icon
          :name="home != 'like' ? 'heart-outline' : 'heart-sharp'"
        ></ion-icon>
        Notifications
      </p>
    </nav>
  </aside>
</template>
<style scoped>
.poke-aside {
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--border_color);
  position: sticky;
  top: 20px;
}
.poke-aside-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
.poke-aside-nav > p {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
}
.poke-aside-logo {
  height: 40px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
