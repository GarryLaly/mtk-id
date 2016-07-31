import Vue from 'vue';
import Vuex from 'vuex';
import bangundatar from './modules/bangundatar.js';

// Registered plugin
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		bangundatar
	}
});