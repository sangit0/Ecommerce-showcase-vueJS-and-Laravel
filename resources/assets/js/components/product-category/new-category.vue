<template>
    <div>
  <v-layout row justify-center>
      <v-btn color="primary" @click="openDialog" dark slot="activator">Add new category</v-btn>
  </v-layout>
  <modalDialog :dialogParent="dialog" @update="changeValue(false)">

      <v-container grid-list-md>
        <v-layout wrap>

          <v-flex xs12>
            <v-text-field label="Category Name" required></v-text-field>
          </v-flex>
          <v-flex xs12>
              <v-text-field label="Description" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>

      <small>*indicates required field</small>

  </modalDialog>


  </div>
</template>

<script>
import modalDialog from '../core-components/dialog.vue';

  export default {

    data () {
      return {
          dialog:false
      }
    },
    components: {
        modalDialog
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
