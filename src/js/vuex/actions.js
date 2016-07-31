export const BangunDatar_openModal = ({ dispatch }) => {
	dispatch('BANGUN_DATAR_SHOW_MODAL', true);
}

export const BangunDatar_closeModal = ({ dispatch }) => {
	dispatch('BANGUN_DATAR_SHOW_MODAL', false);
}