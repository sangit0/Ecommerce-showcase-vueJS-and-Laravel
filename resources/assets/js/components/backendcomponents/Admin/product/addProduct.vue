<template>
     <v-dialog v-model="this.getValue()"  persistent max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">Product Info</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 >
                <v-text-field label="Product Title" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 >
                <v-text-field label="Product Price" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12  >
                <v-text-field label="Product Description" hint="example of helper text only on focus"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-select
                  label="Product Category"
                  multiple
                  autocomplete
                  chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="changeValue">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="changeValue">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['dialogParent'],
    computed: {
    dialog:{
        get: function () {
            return JSON.parse(this.dialogParent);
        },
        set: function (value) {
            //this.dialog =value;
            //console.log(value);
            this.$emit('update', value);
        }
       }
    },
   methods: {
   changeValue: function() {
    this.dialog = false
   },
   getValue(){
    return  this.dialog;
   }
}
  }
</script>
