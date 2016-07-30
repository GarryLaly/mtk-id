
// Page list
import Home from './components/page/Home.vue';
import BangunDatar from './components/page/BangunDatar.vue';
import About from './components/page/About.vue';

export default {
    '/home': {
    	name: 'home',
        component: Home
    },
    '/bangun-datar': {
    	name: 'bangun-datar',
        component: BangunDatar
    },
    '/about': {
    	name: 'about',
        component: About
    }
}