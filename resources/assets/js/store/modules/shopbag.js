const state = {
	bagItem: [
	]
}

const mutations = {
	'UPDATE_BAG' (state, {item, quantity, itemOnList}) {
		const record = state.bagItem.find(value => value.id == item.id);
		if (record) {
			if (itemOnList) {
				record.quantity += quantity;
			} else {
				record.quantity = quantity;
			}
		}
        else {
			state.bagItem.push({
				...item,
				quantity
			});
		}
	},
	'SET_BAG' (state, product) {
		if (product) {
			state.bagItem = product;
		}
	},
	'REMOVE_ITEM' (state, {item}) {
		const record = state.bagItem.find(value => value.id == item.id);
		state.bagItem.splice(state.bagItem.indexOf(record), 1);
	}
}

const actions = {
	clearCart: ({commit}) => {
		commit('SET_BAG', []);
	}
}

const getters = {
	bagItem: (state) => {
		return state.bagItem;
	},
	checkValue: (state) => {
		let res = 0;
		state.bagItem.map((item, idx) => {
			res += item.price * item.quantity;
		});
		return res;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
