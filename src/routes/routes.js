import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/home', component: Home} , // Carga sincrona (mas lenta pero siempre disponible)
        {path:'/chat', component: () => import('../views/Home.vue')}, // Carga asincrona (mas rapido la carga pero esta la solicita y no sobrecarga el inicio)
        {path:'/:catchAll(.*)',redirect:'/home'}
    ],
})
router.beforeEach

export default router