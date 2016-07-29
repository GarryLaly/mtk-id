import Vue from 'vue';
import app from './components/app.vue';

Vue.config.debug = true;
Vue.config.devTools = true;

let App = Vue.extend(app)
new App({ el: 'app' });
