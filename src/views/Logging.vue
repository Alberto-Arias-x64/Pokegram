<script setup>
    import {watch,} from 'vue'
    
    const New_User = 'pikahu'
    const New_Password = '1234'

</script>

<template>
    <h2>Logging to pokegram</h2>
    <input type="text" placeholder="User" v-model="New_User">
    <input type="text" placeholder="Password" v-model="New_Password">
    <p>{{New_User}}</p>
</template>

<style scoped>
    h2,p{
        text-align: center;
    }
</style>