import {createRouter, createWebHistory} from 'vue-router'
import About from '../components/About'
import Houses from '../components/Houses'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Houses
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

export default router
