const state = {
	show: true,
	productList: [
		{
			id: 1,
			title: 'iPhoneX ',
			thumbnail_url: 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg',
			price: 999.9,
			quantity: 10,
			category: "iPhone",
			description: "iPhone X features a new all-screen design. Face ID, which makes your face your password. And the most powerful and smartest chip ever in a smartphone"
		},{
			id: 2,
			title: 'iPhoneX ',
			thumbnail_url: 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg',
			price: 1199.9,
			quantity: 15,
			category: "iPhone",
			description: 'iPhone X features a new all-screen design. Face ID, which makes your face your password. And the most powerful and smartest chip ever in a smartphone'
		},{
			id: 3,
			title: 'iPhoneX ',
			thumbnail_url: 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg',
			price: 1800,
			quantity: 1,
			category: "iPhone",
			description: "iPhone X features a new all-screen design. Face ID, which makes your face your password. And the most powerful and smartest chip ever in a smartphone"
		},{
			id: 4,
			title: 'Retina iPhoneX ',
			thumbnail_url: 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg',
			price: 1000,
			quantity: 0,
			category: "iPhone",
			description: "iPhone X features a new all-screen design. Face ID, which makes your face your password. And the most powerful and smartest chip ever in a smartphone"
		},
	]
}


const actions = {

}
const mutations = {
	
}

const getters = {
	products: (state) => {
		return state.productList;
	},
	productStatus: (state) => {
		return state.show;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
