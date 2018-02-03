<template>
  <div id="app">
  <v-app id="inspire">

    <v-card>
      <p class="mt-3"></p>
      <div class="text-xs-center">
      <v-btn round color="primary" dark  @click="addproduct">Add New Product</v-btn>
    </div>
      <v-card-title>
        Showing All Products
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
          v-bind:headers="headers"
          v-bind:items="items"
          v-bind:search="search"
        >
        <template slot="items" slot-scope="props">

          <td class="text-xs-center">{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.title }}</td>
          <td class="text-xs-center">{{ props.item.price }}</td>
          <td class="text-xs-center">{{ props.item.quantity }}</td>
          <td class="text-xs-center">{{ props.item.category }}</td>

        </template>
        <template slot="pageText" slot-scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>
  </v-app>
  <addProduct :openmodal='modalsAreaHidden'></addProduct>
</div>
</template>
<script>

let addProduct = require('./addProduct.vue');

export default {
  component:{addProduct},
    data () {
    return {
      modalsAreaHidden: '',
      search: '',
      pagination: {},
      headers: [
        {
          text: 'ID',
          align: 'center',
          sortable: false,
          value: 'id'
        },
        { text: 'Title',align: 'center', value: 'title' },
        { text: 'Price',align: 'center', value: 'price' },
        { text: 'Quantity',align: 'center', value: 'quantity' },
        { text: 'Category',align: 'center', value: 'category' }
        ],
      items: this.$store.getters.products,
    }
  },
  methods: {
    addproduct() {
      this.modalsAreaHidden = 'modallg';
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
