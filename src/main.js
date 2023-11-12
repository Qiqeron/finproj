import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import ChatPage from './components/Chat.vue'
import HomePage from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import TestApi from './components/TestApi.vue'
import TodoList from './components/TodoList.vue'

const routes = [
    {path: '/', name: 'Name', component: HomePage},
    {path: '/chat',name: 'Chat', component: ChatPage},
    {path: '/test', name: 'TestApi', component: TestApi },
    {path: '/todo',name: 'TodoList', component: TodoList},
    {path: '/:pathMatch(.*)*', component: NotFound}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

const app = createApp(App)
app.use(router)
app.mount("#app")