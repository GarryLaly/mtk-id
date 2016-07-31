<template>
	<bangun-datar-modal></bangun-datar-modal>

  <div class="BangunDatar">
  	<h3 class="BangunDatar-title">List of Bangun Datar</h3>
  	<div class="row">
	  	<div class="col-md-4 col-sm-6 col-xs-12" v-for="item in items">
	  		<bangun-datar-block v-bind:title="item.title" v-bind:img="item.img" v-on:click="openModal()"></bangun-datar-block>
	  	</div>
  	</div>
  </div>

</template>

<script>
  import BangunDatarBlock from '../layout/BangunDatarBlock.vue';
  import BangunDatarModal from '../layout/BangunDatarModal.vue';
	import { 
		BangunDatar_openModal, 
		BangunDatar_closeModal 
	} from '../../vuex/actions.js';

  export default {
    components: { BangunDatarBlock, BangunDatarModal },
    vuex: {
    	actions: {
    		openModal: BangunDatar_openModal,
    		closeModal: BangunDatar_closeModal
    	}
    },
    data() {
    	return {
    		showModal: false,
    		items : [
	    		{
	    			title: 'Persegi',
	    			img: '/src/img/logo.png'
	    		},
	    		{
	    			title: 'Segitiga',
	    			img: '/src/img/logo.png'
	    		},
	    		{
	    			title: 'Belah Ketupat',
	    			img: '/src/img/logo.png'
	    		},
	    		{
	    			title: 'Layang-layang',
	    			img: '/src/img/logo.png'
	    		},
	    		{
	    			title: 'Persegi Panjang',
	    			img: '/src/img/logo.png'
	    		},
	    		{
	    			title: 'Trapesium',
	    			img: '/src/img/logo.png'
	    		},
	    		{
	    			title: 'Lingkaran',
	    			img: '/src/img/logo.png'
	    		},
	    		{
	    			title: 'Jajar Genjang',
	    			img: '/src/img/logo.png'
	    		}
	    	]
    	}
    }
  };

</script>