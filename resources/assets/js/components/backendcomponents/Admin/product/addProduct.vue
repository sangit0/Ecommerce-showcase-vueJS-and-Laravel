
<template>
<div id="container">
  <v-layout row justify-center>
    <v-btn color="primary" @click="openDialog" dark slot="activator">New product</v-btn>
  </v-layout>

  <modalDialog :dialogParent="dialog" @update="changeValue">

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
              :items="item"
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
      <small>*indicates required field</small>

  </modalDialog>

</div>
</template>

<script>
import modalDialog from '../../../core-components/dialog.vue';

  export default {

    data () {
      return {
          item:[],
          category: this.$store.getters.products_category,
          dialog:false
      }
    },
    components: {
        modalDialog
    },
    created() {
      //do something after creating vue instance
      this.itemGetName();

    },
    methods: {
        openDialog() {
            this.dialog=true
        },
        changeValue(value){
            this.dialog =value
        },
        itemGetName(){
                for (var i = 0; i < this.category.length; i++) {
                    this.item.push(this.category[i].name);
                }
        }
}

  }
</script>
