import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
        alias: ['/:section']  // Permet de capturer /about, /skills, etc.
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
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 70 // Hauteur de la navbar
            }
        }
        if (to.params.section) {
            return {
                el: `#${to.params.section}`,
                behavior: 'smooth',
                top: 70
            }
        }
        return { top: 0 }
    }
})

export default router