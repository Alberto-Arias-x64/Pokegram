<script>
import { ref, watch, onUpdated } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Store } from '../store/store'

export default {
  setup(props) {
    const home = ref('home')
    const user_image = ref('')

    const router = useRouter()
    const route = useRoute()

    function change({target}) {
      router.push({path:`/${target.id}`})
      .then(() =>{
        if (route.path == `/${target.id}`) home.value = target.id
      })
    }
    function show () {
      if(route.path !== '/login') return true
      return false
    } 

    watch(() => route.path,() => {
      home.value = route.path.slice(1)
    })
    onUpdated(() => {
      const {User_Image} = Store
      user_image.value = User_Image
    })

    return{change, home, show, user_image}
  },
}
</script>

<template>
  <header v-show="show()">
    <div id="container">
      <div id="logo">
        <img @click="change" id="login" src="../assets/logo.png" alt="" />
      </div>
      <input type="text" placeholder="Search" />
      <div class="icons">
        <ion-icon @click="change" id="home" :name="home != 'home' ? 'home-outline' : 'home-sharp'"></ion-icon>
        <ion-icon @click="change" id="chat" :name="home != 'chat' ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses-sharp'"></ion-icon>
        <ion-icon @click="change" id="new"  :name="home != 'new' ? 'add-circle-outline' : 'add-circle-sharp'"></ion-icon>
        <ion-icon @click="change" id="search" :name="home != 'search' ? 'compass-outline' : 'compass-sharp'"></ion-icon>
        <ion-icon @click="change" id="like" :name="home != 'like' ? 'heart-outline' : 'heart-sharp'"></ion-icon>
        <div class="card_profile_photo min">
          <img :src="user_image" alt="">
        </div>
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
  cursor: pointer;
}

input{
	width: 270px;
	padding: 10px;
	border-radius: 5px;
	background-color: #efefef;
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
.min{
  height: 26px;
  width: 26px;
}
</style>
