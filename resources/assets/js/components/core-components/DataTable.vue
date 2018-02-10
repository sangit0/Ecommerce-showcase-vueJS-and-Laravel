<template>
  <div id="">
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">{{title}}</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by product..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>
      <md-table-empty-state
         md-label="No Product found"
         :md-description="`No Product found for this '${search}' query. Try a different search term or create a new user.`">
       </md-table-empty-state>


  <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell v-for="col in columns" :key="col.key" :md-label="col">{{item[col]}}</md-table-cell>
   </md-table-row>

</md-table>

</div>
</template>

<script>
const toLower = text => {
   return text.toString().toLowerCase()
 }
<<<<<<< HEAD

=======
>>>>>>> 010dbfb89f2898eae94b5e329fe830d2dbecabc8
 const searchByName = (items, term) => {
   if (term) {
     return items.filter(item => toLower(item.title).includes(toLower(term)))
   }
<<<<<<< HEAD

   return items
 }

=======
   return items
 }
>>>>>>> 010dbfb89f2898eae94b5e329fe830d2dbecabc8
export default {
  props: ['rows', 'columns', 'title'],
  name: "TableSearch",
  data(){
    return{

      search: null,
      searched: [],
      users: this.rows
    }
  },
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.users, this.search)
  }
},
  created() {
    this.searched = this.users
  }
}
</script>
<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
.md-table{
  padding: 20px;
}
</style>
