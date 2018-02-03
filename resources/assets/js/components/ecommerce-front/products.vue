<template>
    <div class="col-sm-3" >
            <div class="thumbnail">
                <img :src="item.thumbnail_url" alt="" class="focusImage product-image-distance">
                <div class="product-details">
                    <h4 class="pull-right">
                        <v-chip label color="orange" text-color="white">
                           <v-icon left>label</v-icon>${{ item.price }}
                         </v-chip>
                    </h4>
                    <br />
                    <router-link :to="'/product/' + item.id" tag="h4"><a>{{ item.title }}</a></router-link>
                    <p>{{ item.description | filterdescription}}</p>
                </div>
                <div class="margin-left-sm">
                   <span>{{ item.quantity }} left in stock</span>
                    <p class="pull-right">
                        <button
                            class="btn btn-primary"
                            :disabled="item.quantity === 0"
                            @click="addItem">
                            Add to cart
                        </button>
                    </p>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>



</template>
<script>
    import { mapActions } from 'vuex';
	export default {
		props: ['item'],
        methods: {
            ...mapActions(['updateBag','checkValue']),
            addItem() {
                const cartHistroy = {
                    item: Object.assign({}, this.item),
                    quantity: 1,
                    itemOnList: true
                };
                this.updateBag(cartHistroy);
                this.checkValue();
            }
        },
        filters: {
            filterdescription(value) {
                if (value && value.length > 80) {
                    return value.substring(0, 80) + '...';
                } else {
                    return value;
                }
            }
        }
	}
</script>
<style scoped>
    .product-details{
        padding: 5px;
    }
    .focusImage {
        transition: all .2s ease-in-out;
    }
    .product-image-distance {
    padding: 15px;
    }
    .thumbnail:hover .focusImage {
        transform: scale(1.1);
    }


</style>
