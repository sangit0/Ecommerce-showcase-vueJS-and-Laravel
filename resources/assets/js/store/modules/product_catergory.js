const state = {
	show: true,
	categoryList: [
		{
			id: 1,
			name: 'iPhoneX1 ',
			description: "iPhone X features in a smartphone"
		},{
			id: 2,
			name: 'iPhoneX2 ',
			description: "iPhone X features in a smartphone"
		},{
			id: 3,
			name: 'iPhoneX3 ',
			description: "iPhone X features in a smartphone"
		},
	]
}


const actions = {

}
const mutations = {

}

const getters = {
	products_category: (state) => {
		return state.categoryList;
	},
	productStatusCat: (state) => {
		return state.show;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
