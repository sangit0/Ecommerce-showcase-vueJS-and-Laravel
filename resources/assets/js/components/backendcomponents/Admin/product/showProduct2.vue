<template>
  <div class='container'>
    <!-- <p v-if="loading">Loading...</p> -->
    <data-table
    :headerTitle="'Data Driven For Lyfe'"
    :columns="columns"
    :data="data"
    >

    </data-table>
  </div>
</template>
<script>
//  import Api from './Api';
  import DataTable from '.Core/dataTable';
  export default {
    name: 'Data Driven',
    components: {
      DataTable
    },
    data() {
      return {
        data: this.$store.getters.products,
        //loading: true,
        columns: ['id','title','price', 'quantity', 'category']
      };
    },
    // created() {
    //   Api.getUsers().then(response => {
    //     this.loading = false;
    //     this.data = response.data;
    //   }, error => {
    //     this.loading = false;
    //     console.error(error);
    //   });
    // },
    // methods: {
    //   clickRow(el) {
    //     console.log(`You clicked row ${el.target.parentElement.id}!`);
    //   }
    }
  
</script>
