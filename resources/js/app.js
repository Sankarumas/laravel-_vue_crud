import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import App from './components/App.vue';
import UserList from './components/UserList.vue';
import UserForm from './components/UserForm.vue';
import User from './components/User.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: UserList },
        { path: '/users/create', component: UserForm },
        { path: '/users/:id', component: User },
        { path: '/users/:id/edit', component: UserForm },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
