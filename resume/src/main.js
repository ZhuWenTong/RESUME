import Vue from 'vue'
import App from './App.vue'

import 'swiper/dist/css/swiper.min.css';
import './assets/css/animate.min.css';
import './assets/css/common.css';
import './assets/css/public.css';

import router from './router/router';
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})