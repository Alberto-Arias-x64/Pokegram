<script>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup(props) {
    const home = ref("home");

    const router = useRouter();
    const route = useRoute();

    function change({ target }) {
      router.push({ path: `/${target.id}` }).then(() => {
        if (route.path == `/${target.id}`) home.value = target.id;
      });
    }
    function show() {
      if (route.path !== "/login") return true;
      return false;
    }

    watch(
      () => route.path,
      () => {
        home.value = route.path.slice(1);
      }
    );

    return { change, home };
  },
};
</script>

<template>
  <aside>
    <div id="container">
      <div id="logo">
        <img @click="change" id="login" src="/images/logo.png" alt="" />
      </div>
      <nav class="icons">
        <p @click="change" id="home">
          <ion-icon
            :name="home != 'home' ? 'home-outline' : 'home-sharp'"
          ></ion-icon>
          Home
        </p>
        <p @click="change" id="chat">
          <ion-icon
            :name="
              home != 'chat'
                ? 'chatbubble-ellipses-outline'
                : 'chatbubble-ellipses-sharp'
            "
          ></ion-icon>
          Chat
        </p>
        <p @click="change" id="new">
          <ion-icon
            :name="home != 'new' ? 'add-circle-outline' : 'add-circle-sharp'"
          ></ion-icon>
          Create
        </p>
        <p @click="change" id="search">
          <ion-icon
            :name="home != 'search' ? 'compass-outline' : 'compass-sharp'"
          ></ion-icon>
          Search
        </p>
        <p @click="change" id="like">
          <ion-icon
            :name="home != 'like' ? 'heart-outline' : 'heart-sharp'"
          ></ion-icon>
          Notificacions
        </p>
      </nav>
    </div>
  </aside>
</template>
<style scoped>
aside {
  height: 100%;
  width: fit-content;

  margin-bottom: 10px;

  background-color: white;
  border-bottom: 1px solid var(--border_color);
}
#container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
}
.icons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
.icons > p {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#logo {
  height: 40px;
}

#logo > img {
  width: auto;
  cursor: pointer;
}
</style>
