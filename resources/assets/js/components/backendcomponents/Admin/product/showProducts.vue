<template>
  <div id="app">
  <v-app id="inspire">

    <v-card>
      <p class="mt-3"></p>
      <div class="text-xs-center">
      <v-btn round color="primary" dark>Add New Product</v-btn>
    </div>
      <v-card-title>
        Nutrition
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
          <td class="text-xs-center">{{ props.item.quntity }}</td>
          <td class="text-xs-center">{{ props.item.category }}</td>

        </template>
        <template slot="pageText" slot-scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data () {
    return {
      search: '',
      pagination: {},
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Title', value: 'title' },
        { text: 'Price', value: 'price' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Category', value: 'category' }
        ],
      items: this.$store.getters.products,
      
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
