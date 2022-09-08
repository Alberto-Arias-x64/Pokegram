import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import No_Found from '../views/No_Found.vue'
import Loggin from '../views/Logging.vue'
import {Store} from '../store/store'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/', redirect:'/login'},
        {path:'/home', component: Home} , // Carga sincrona (mas lenta pero siempre disponible)
        {path:'/login', component: Loggin}, // Carga asincrona (mas rapido la carga pero esta la solicita y no sobrecarga el inicio) () => import('../views/Home.vue')
        {path:'/:catchAll(.*)', component: No_Found }
    ],
})
router.beforeEach((to, from, next) => {
    console.log(to)
    if(to.path !== '/login' && Store.User_Name !== ''){
        next()
    }
    else if (to.path === '/login') next()
    else router.push('/login')
})

export default router