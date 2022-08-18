<template>
  <header>
    <div id="container">
      <div id="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <input type="text" placeholder="Search" />
      <div class="icons">
        <ion-icon name="home-outline"></ion-icon>
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  height: 60px;
  width: 100vw;

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
.icon > * {
  color: black;
}
#logo {
  height: 40px;
}
input{
	width: 270px;
	padding: 10px;
	border-radius: 5px;
	background-color: #efefef;
}
</style>
