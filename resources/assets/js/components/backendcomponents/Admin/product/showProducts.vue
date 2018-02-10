<template>
  <div id="container">
    <addProduct></addProduct>
    <productTable :rows="items"  :columns="columns"  :title="tableTitle"></productTable>
  </div>
</template>
<script>

import addProduct from './addProduct.vue';

import productTable from '../../../core-components/DataTable.vue';
export default {
  components: {
    productTable, addProduct
  },
  data(){
    return{
      columns: ['id', 'title', 'price', 'quantity' ],
      tableTitle: 'Product Table',
      items: this.$store.getters.products,
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
