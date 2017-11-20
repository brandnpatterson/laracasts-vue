import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import bulma from 'bulma';

window.Vue = Vue;
Vue.use(VueRouter);

window.axios = axios;
window.axios.defaults.headers.common = {
    'X-Request-With': 'XMLHttpRequest'
}

window.bulma = bulma;