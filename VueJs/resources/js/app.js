import App from './App.vue';
import Vue from 'vue';
import router from './router'
export default new Vue({
    router,
    render: h => h(App)
});


// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
//
// import App from './App.vue';
// import Dashboard from './components/Dashboard.vue';
// import Home from './components/Home.vue';
// import Register from './components/Register.vue';
// import Login from './components/Login.vue';
//
//
// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
// axios.defaults.baseURL = 'http://vue.demo.com/api';
// const router = new VueRouter({
//     history: true,
//     hashbang: false,
//     linkActiveClass: 'active',
//     routes: [
//         {
//             path: '/',
//             name: 'anhchandai',
//             component: Home
//         },
//
//         {
//         path: '/',
//         name: 'home',
//         component: Home
//     },{
//         path: '/register',
//         name: 'register',
//         component: Register,
//         meta: {
//             auth: false
//         }
//     },{
//         path: '/login',
//         name: 'login',
//         component: Login,
//         meta: {
//             auth: false
//         }
//     },{
//         path: '/dashboard',
//         name: 'dashboard',
//         component: Dashboard,
//         meta: {
//             auth: true
//         }
//     }]
// });
// router.mode = 'html5';
// Vue.router = router
// Vue.use(require('@websanova/vue-auth'), {
//     auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
//     http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
//     router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
// });
// App.router = Vue.router
// new Vue(App).$mount('#app');