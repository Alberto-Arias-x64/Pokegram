<script>
export default {
    props:[
        'poke_name',
        'poke_image',
        'poke_height',
        'poke_weight',
        'poke_exp'
    ]
}
</script>

<template>
    <div class="card">
        <header>
            <h6>{{poke_name}}</h6>
        </header>
        <img :src="poke_image" alt="">
    </div>
</template>

<style scoped>
    .card{
        width: 500px;
        height: fit-content;

        display: grid;
        grid-template-rows: 60px 500px 100px 60px;

        border: 1px solid grey;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>