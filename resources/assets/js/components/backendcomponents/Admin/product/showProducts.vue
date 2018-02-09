<template>
  <div id="container">
    <newProduct></newProduct>
    <productTable :rows="items"  :columns="columns"  :title="tableTitle"></productTable>
  </div>
</template>
<script>

import newProduct from './addProduct.vue';

import productTable from '../../../core-components/DataTable.vue';
export default {
  components: {
    productTable, newProduct
  },
  data(){
    return{
      columns: ['id', 'title', 'price', 'quantity' ],
      tableTitle: 'Product Table',
      items: this.$store.getters.products,
      dialog:false
    }
  },
  methods: {
  openDialog() {
    this.dialog=true
  },
  changeValue(value){
    this.dialog =value
  }
}
}
</script>
<style lang="scss" scoped>
</style>
