import { createRouter, createWebHashHistory } from 'vue-router'
import TodoApp from '@/components/TodoApp.vue'
import StartPage from '@/components/StartPage.vue'


const routes = [
            {
            path: '/',
            name: 'start',
            component: StartPage
        },
                {
            path: '/todo',
            name: 'todo',
            component: TodoApp
        }
];

const router = createRouter({history: createWebHashHistory(), routes})

export default router
