// initial state
const state = {
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
	],
	itemOpen: '',
	result: 0
}

// mutations
const mutations = {
	BANGUN_DATAR_SHOW_MODAL (state, args) {
		state.showModal = args.show;

		if (args.show)
			state.itemOpen = args.item;
		else
			state.itemOpen = '';

		state.result = 0;
	},
	BANGUN_DATAR_RESULT (state, args) {
		state.result = args.result;
	}
}

export default {
	state,
	mutations
}