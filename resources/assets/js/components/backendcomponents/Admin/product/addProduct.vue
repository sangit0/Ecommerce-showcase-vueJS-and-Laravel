
<template>
<div id="container">
  <v-layout row justify-center>
    <v-btn color="primary" @click="openDialog" dark slot="activator">Add new product</v-btn>
  </v-layout>

  <modalDialog :dialogParent="dialog" @update="changeValue" :title="modalTitle">
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm4 >
            <v-text-field label="Product Title" required :value="product.title" v-on:keyup.stop="addProductField('title', $event.target.value)"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 >
            <v-text-field label="Product Price" :value="product.price" v-on:keyup.stop="addProductField('price', $event.target.value)" ></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 >
            <v-text-field label="Product Quantity" :value="product.quantity" v-on:keyup.stop="addProductField('quantity', $event.target.value)" ></v-text-field>
          </v-flex>
          <v-flex xs12  >
            <v-text-field label="Product Description" :value="product.description" v-on:keyup.stop="addProductField('description', $event.target.value)"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-select
              label="Product Category"
              multiple
              autocomplete
              chips
              :items="item"
              :value="product.category" v-on:keyup.stop="addProductField('category', $event.target.value)"
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>

  </modalDialog>

</div>
</template>

<script>
import modalDialog from '../../../core-components/dialog.vue';

  export default {

    data () {
      return {
          item:[],
          category: this.$store.getters.products_category,
          dialog:false,
          modalTitle : 'Adding New Product',
          product: [{
            id :'',
            title : '',
            thumbnail_url : '',
            price : '',
            quantity : '',
            category : '',
            description : ''
            }
          ]
      }
    },
    components: {
        modalDialog
    },
    created() {
      //do something after creating vue instance
      this.categoryGetName();

    },
    methods: {
        openDialog() {
            this.dialog=true
        },
        changeValue(value){
            this.addProductField();
            this.dialog =value
        },
        categoryGetName(){
                for (var i = 0; i < this.category.length; i++) {
                    this.item.push(this.category[i].name);
                }
        },
        addProductField(field, value) {
           this.$store.commit('addNewProduct', {
           	[field]: value
           });
         }
     }

  }
</script>
