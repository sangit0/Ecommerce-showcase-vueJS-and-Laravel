import Vue from 'vue';
export const updateBag = ({commit}, {item, quantity, itemOnList}) => {
	commit('UPDATE_BAG', {item, quantity, itemOnList});
	if (itemOnList) {


	}
}
