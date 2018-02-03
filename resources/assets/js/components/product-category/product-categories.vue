<template>
    <div>
  <v-layout row justify-center>
      <v-btn color="primary" @click="openDialog" dark slot="activator">Open Dialog</v-btn>
  </v-layout>
  <modalDialog :dialogParent="dialog" @update="changeValue"></modalDialog>


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
