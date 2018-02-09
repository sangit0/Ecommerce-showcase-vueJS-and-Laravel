<template>
    <div>
        <newCategory></newCategory>
        <productTable :rows="items"  :columns="columns"  :title="tableTitle"></productTable>

    </div>
</template>

<script>
import newCategory from './new-category.vue';
import productTable from '../../../core-components/DataTable.vue';

  export default {
    data () {
      return {
          columns: ['id', 'name','description' ],
          tableTitle: 'Product Category Table',
          items: this.$store.getters.products_category,
          dialog:false
            }
    },
    components: {
        newCategory,
        productTable
    }

  }
</script>
