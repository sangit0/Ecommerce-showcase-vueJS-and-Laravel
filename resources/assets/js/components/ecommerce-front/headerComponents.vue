<template>
<div>


	 <nav class="navbar navbar-default" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
				<img :src="logo.url" :alt="logo.alt" width="100px" />
            </div>
			<router-link to="/" class="navbar-brand">Ecommerce online store </router-link><br />
			<small>{{slogan}}</small>

            <ul class="nav navbar-nav navbar-right">
						  <v-btn icon  @click.stop="$store.state.shopping_cart_btn = !$store.state.shopping_cart_btn">
							  <v-badge overlap color="red"> <span slot="badge">{{cartItemLength}}</span>
							  <v-icon color="white lighten-1">shopping_cart</v-icon>
						  </v-badge>
					  	  </v-btn>
		     </ul>
			 <login :className="'nav navbar-nav navbar-default navbar-right'"></login>

			 	<!-- showing cart list -->

        </div>
        <!-- /.container -->
    </nav>
	<v-navigation-drawer
			temporary
			v-model="$store.state.shopping_cart_btn"
			absolute dark right
			width="600">
			   <v-toolbar flat>
				 <v-list>
					 <v-list-tile-title class="title">
					   Bag
					 </v-list-tile-title>
				 </v-list>
			   </v-toolbar>
	  <cart></cart>
	 </v-navigation-drawer>

</div>

</template>

<script>
   import cart from "./cart.vue"
   import login from "./login-bar.vue"

        export default{
            data(){
                return {
				logo:{
					url: "logo.png",
					alt: "Ecommerce demo logo"
				},
				slogan:"Happy shopping and enjoy",
				}
            },
			components: {
			  cart,login
		  }
		  ,computed: {
    			cartItemLength() {
    				return this.$store.getters.bagItem.length;
    			}
    		}
        }
</script>
<style>
.fab{
	border-radius: 40%;
}

</style>
