<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const New_User = "pikahu";
const New_Password = "1234";

const Check = () => {
    router.push({path:'/home'})
}

</script>

<template>
  <section id="login_container">
    <img id="login_img" src="../assets/pokedexu_crop.png" alt="">
    <div>
        <div class="login">
            <img id="login_logo" src="../assets/logo.png" alt="" />
            <div id="login_inputs">
                <input type="text" placeholder="User" v-model="New_User" />
                <input type="password" placeholder="Password" v-model="New_Password" />
                <button id="button_login" @click="Check">Log In</button>
            </div>
            <p>OR</p>
            <div id="login_link" class="mouse">
                <img src="../../public/favicon.png" alt="">
                <p>Login with Pokedex</p>
            </div>
            <p class="mouse mini_text">Forgot password?</p>
        </div>
        <div class="login">
            <div>
                <span>Don't have an account? </span><button>Sign up</button>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
input{
	width: calc(100% - 20px);
	padding: 10px;
	border-radius: 5px;
	background-color: #efefef;
    border: 1px solid var(--border_color);
}
#login_container{
    height: 100%;
    width: 700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
}
.login{
    padding: 20px 40px;
    width: calc(350px - 80px);

    display: flex;
    flex-direction: column;
    gap: 20px;

    align-items: center;

    background-color: white;
    border: 1px solid var(--border_color);
}
#login_img{
    width: 100%;
    height: auto;
}
#login_logo{
    width: 70%;
}
#login_inputs{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
#login_link{
    height: 1ch;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    color: #A40707;
    font-weight: bold;
}
#login_link > img {
    height: 200%;
    width: auto;
}
#button_login{
    height: 30px;
    width: 100%;

    border-radius: 5px  ;
    color: #efefef;
    background-color: #0095f6;
}
.mouse{
    cursor: pointer;
}
.mini_text{
    font-size: 12px;
}
</style>