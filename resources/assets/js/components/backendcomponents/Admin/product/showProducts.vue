<template>
  <div id="container">
    <v-layout row justify-center>
      <v-btn color="primary" @click="openDialog" dark slot="activator">Open Dialog</v-btn>
    </v-layout>
    <modalDialog :dialogParent="dialog" @update="changeValue"></modalDialog>
    <productTable :rows="items"  :columns="columns"  :title="tableTitle"></productTable>
  </div>
</template>
<script>

import modalDialog from './addProduct.vue';

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
