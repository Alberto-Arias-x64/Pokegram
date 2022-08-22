import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import No_Found from '../views/No_Found.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/', redirect:'/home'},
        {path:'/home', component: Home} , // Carga sincrona (mas lenta pero siempre disponible)
         // Carga asincrona (mas rapido la carga pero esta la solicita y no sobrecarga el inicio) () => import('../views/Home.vue')
        {path:'/:catchAll(.*)', component: No_Found }
    ],
})
router.beforeEach

export default router