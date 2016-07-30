import Vue from 'vue';
import app from './components/app.vue';
import appRoute from './routes.js';
  
import VueRouter from 'vue-router'

// Registered plugin
Vue.use(VueRouter)
const router = new VueRouter();

Vue.config.debug = true;
Vue.config.devTools = true;

// Routes list
router.map(appRoute);
// 404 error redirect
router.redirect({
  '*': '/home'
})

router.start(app, 'app');