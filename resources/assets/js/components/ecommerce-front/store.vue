<template>
    <div>
        <headerComponents></headerComponents>
        <div class="container">

		<div class="is-flex">
			<app-product-item v-for="product in products" :item="product" :key="product.id"></app-product-item>
		</div>

	</div>
</div>


</template>

<script>
import headerComponents from './headerComponents.vue';
import products from './products.vue';
import { mapActions } from 'vuex';

    export default{
        data(){
            return {
                displayList: false

            }
        },
        components: {
          headerComponents,
          appProductItem: products

      },
      computed: {
			products() {
				return this.$store.getters.products;
			},
			loading() {
				return this.$store.getters.productStatus;
			}
		}
    }
</script>
