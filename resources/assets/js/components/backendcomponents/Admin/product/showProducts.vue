<template>
  <div id="container">
    <v-layout row justify-center>
      <v-btn color="primary" @click="openDialog" dark slot="activator">Add Product</v-btn>
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
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                :value="product.category" v-on:keyup.stop="addProductField('category', $event.target.value)"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

    </modalDialog>
    <productTable :rows="items"  :columns="columns"  :title="tableTitle"></productTable>
  </div>
</template>
<script>

import modalDialog from '../../../core-components/dialog.vue';

import productTable from '../../../core-components/DataTable.vue';
export default {
  components: {
    productTable, modalDialog
  },
  data(){
    return{
      columns: ['id', 'title', 'price', 'quantity' ],
      tableTitle: 'Product Table',
      items: this.$store.getters.products,
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
  methods: {
  openDialog() {
    this.dialog=true
  },
  changeValue(value){
    this.addProductField();
    this.dialog =value
  },
  addProductField(field, value) {
     this.$store.commit('addNewProduct', {
     	[field]: value
     });
   }
}
}
</script>
<style lang="scss" scoped>
</style>
