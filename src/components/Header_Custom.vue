<template>
    <div>
        <h5>Pokegram</h5>
        <input type="text" placeholder="Search">
        <div class="icon">
            <ion-icon name="home-outline"></ion-icon>
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    </div>
</template>
<style scoped>
    div{
        display: grid;
        grid-template-columns: 300px 200px max-content;
    }
    h5{
        margin: 0;
    }
    .icon{
        display: flex;
        flex-direction: row ;
        gap: 20px;

        font-size: 30px;
    }
    .icon > *{
        color: black;
    }
</style>
