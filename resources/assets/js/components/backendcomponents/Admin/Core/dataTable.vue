<template>
    <div class="data-table">
        <h1>{{headerTitle}}</h1>
        <br>
        <table class="table table-bordered table-condensed table-info table-hover">
            <thead>
                <tr>
                    <th v-for="column in columns" class="label-cell sortable-cell" :id="column" @click="sort">{{column}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="obj in filterdData" @click="clickRow" :id="obj.id">
                    <td class="label-cell" v-for="property in obj">{{property}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                required: true,
                default: []
            },
            columns: {
                required: true
            },
            headerTitle: {
                required: false,
                default: ''
            },
            // clickRow: {
            //     required: true
            // }
        },
        data() {
            return {
                filterdData: []
            }
        },
        created() {
            this.filterdData = this.filterByColumns(this.data);
        },
        methods: {
            sort(el){
                console.log('Implement some sweet sorting here!');
            },
            filterByColumns(data) {
                let newData = [];
                for(let j=0; j < data.length; ++j){
                  for(let i=0; i < this.columns.length; ++i){
                    if(!newData[j]){
                      newData[j] ={ [this.columns[i]] : data[j][this.columns[i]]};
                  }else{
                      newData[j][this.columns[i]] = data[j][this.columns[i]];
                  }
              }
          }
          return newData;
      }
  }
}
</script>
