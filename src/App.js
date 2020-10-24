import Vue from 'vue';
import App from './App.vue';
import route from './router';
import './components';
import jquery from 'jquery';
window.$ = jquery;
import 'bootstrap';
import 'popper.js';
import VueParticles from 'vue-particles';
import VueTypes from 'vue-typed-js';
Vue.use(VueParticles);
Vue.use(VueTypes);

new Vue({
    router : route,
    render : h=>h(App),
}).$mount('#app');