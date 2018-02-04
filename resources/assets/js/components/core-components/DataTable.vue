<template>
  <div id="">
    <table id=""  >
      <thead>
        <tr>
          <th v-for="col in columns">{{col}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td v-for="col in columns">{{row[col]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ['rows', 'columns'],
  name: "",

}
</script>
<style lang="scss" scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}


</style>
