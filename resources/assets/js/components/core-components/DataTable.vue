<template>
  <div id="">
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">{{title}}</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>
      <!--
      <md-table-empty-state md-label="No User found" :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
    </md-table-empty-state>
  -->
  <md-table-row>
    <md-table-head  v-for="col in columns"  :key="col.key">{{col}}</md-table-head>
  </md-table-row>

  <md-table-row v-for="row in rows" :key="row.key">
    <md-table-cell v-for="col in columns" :key="col.key">{{row[col]}}</md-table-cell>
  </md-table-row>

</md-table>

</div>
</template>

<script>
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
    },
    toLower(text) {
      return text.toString().toLowerCase()
    },
    searchByName(items, term) {
      if (term) {
        return items.filter(function(item) {
          return toLower(item.name).includes(toLower(term))
        })
      }
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
