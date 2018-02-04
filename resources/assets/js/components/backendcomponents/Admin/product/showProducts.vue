<template>
  <div id="container">
    <productTable :rows="items"  :columns="columns" ></productTable>
  </div>
</template>
<script>

import productTable from '../../../core-components/DataTable.vue';
export default {
  components: {
    productTable
  },
data(){
  return{
    columns: ['id', 'title', 'price', 'quantity' ],

    items: this.$store.getters.products,
  }
}
}
</script>
<style lang="scss" scoped>
</style>
