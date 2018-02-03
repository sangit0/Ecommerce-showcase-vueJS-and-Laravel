import Vue from 'vue';
export const updateBag = ({commit}, {item, quantity, itemOnList}) => {
	commit('UPDATE_BAG', {item, quantity, itemOnList});
	if (itemOnList) {
	}
}
export const checkValue = ({commit}) => {
	commit('TOTAL_VALUE');
}
export const removeItem = ({commit},{item}) => {
	commit('REMOVE_ITEM',{item});
}
