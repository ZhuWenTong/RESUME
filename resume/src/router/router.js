import Vue from 'vue';
import VueRouter from 'vue-router';

import Resume from '../components/Resume/resume.vue';
Vue.use(VueRouter);
export default new VueRouter({
    routes: [{
        path: '/resume',
        component: Resume
    }, {
        path: '*',
        redirect: '/resume'
    }]
})