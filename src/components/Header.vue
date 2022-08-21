<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup(props) {
    const home = ref('home')
    const router = useRouter()
    function change({target}) {
      router.push({path:`/${target.id}`})
      home.value = target.id
    }
    return{change, home}
  },
}
</script>

<template>
  <header>
    <div id="container">
      <div id="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <input type="text" placeholder="Search" />
      <div class="icons">
        <ion-icon @click="change" id="home" :name="home != 'home' ? 'home-outline' : 'home-sharp'"></ion-icon>
        <ion-icon @click="change" id="chat" :name="home != 'chat' ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses-sharp'"></ion-icon>
        <ion-icon @click="change" id="new"  :name="home != 'new' ? 'add-circle-outline' : 'add-circle-sharp'"></ion-icon>
        <ion-icon @click="change" id="search" :name="home != 'search' ? 'compass-outline' : 'compass-sharp'"></ion-icon>
        <ion-icon @click="change" id="like" :name="home != 'like' ? 'heart-outline' : 'heart-sharp'"></ion-icon>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  height: 60px;
  width: 100vw;

  margin-bottom: 10px;

  background-color: white;
  border-bottom: 1px solid var(--border_color);
}
#container {
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 400px 300px 300px;

  justify-content: center;

  align-content: center;
	align-items: flex-start;
}
.icons {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
#logo {
  height: 40px;
}

#logo > img{
  width: auto;
}

input{
	width: 270px;
	padding: 10px;
	border-radius: 5px;
	background-color: #efefef;
}
</style>
