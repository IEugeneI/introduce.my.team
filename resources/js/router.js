import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from './pages/Home.vue';
import Smm from './pages/Smm.vue';
import Programming from './pages/Programing.vue';
import Advertising from './pages/Advertising.vue';
import Contact from './pages/Contact.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/smm',
            name: 'smm',
            component: Smm
        },
        {
            path: '/advertising',
            name: 'advertising',
            component: Advertising
        },
        {
            path: '/programing',
            name: 'programing',
            component: Programming
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
    ]
});

export default router;
