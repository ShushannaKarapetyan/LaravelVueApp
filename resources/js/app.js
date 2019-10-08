require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes';
import MainApp from './components/MainApp';
/*import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';*/
require("./bootstrap");

window.Vue = require('vue');

import BootstrapVue from "bootstrap-vue"

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    mode: 'history',
    routes
});


const app = new Vue({
    el: '#app',
    router,
    components: {
        MainApp
    }

}).$mount('#app');
