import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/project/:id',
        name: 'ProjectDetail',
        component: () => import('@/views/ProjectDetailView.vue'),
        props: true
    },
    {
        // Redirect portfolio/ to home
        path: '/portfolio',
        redirect: '/'
    },
    {
        // Catch 404
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }
        return { top: 0 }
    }
})

export default router