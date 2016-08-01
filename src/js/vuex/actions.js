export const BangunDatar_openModal = ({ dispatch }, args) => {
	let data = {
		show: true,
		item: args.item
	};

	dispatch('BANGUN_DATAR_SHOW_MODAL', data);
}

export const BangunDatar_closeModal = ({ dispatch }) => {
	let args = { show: false };

	dispatch('BANGUN_DATAR_SHOW_MODAL', args);
}

export const BangunDatar_calculateResult = ({ dispatch }, result) => {
	dispatch('BANGUN_DATAR_RESULT', { result });
}