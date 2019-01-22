import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import power from '../views/Home/power'
import ask from '../views/Home/ask'
import lesson from '../views/Home/lesson'

import Dynamic from '../views/Dynamic.vue'
import collect from '../views/collect.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: {name: 'lesson'},
            children: [
                {path: 'lesson', name: 'lesson', component: lesson},
                {path: 'ask', name: 'ask', component: ask},
                {path: 'power', name: 'power', component: power}
            ]
        },
        {
            path: '/Dynamic',
            name: 'Dynamic',
            component: Dynamic
        },
        {
            path: '/collect',
            name: 'collect',
            component: collect
        }
    ]
})
