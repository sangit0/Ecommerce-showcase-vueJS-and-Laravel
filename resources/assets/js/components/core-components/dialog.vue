<template>
     <v-dialog v-model="this.getValue()"  persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{title}}</span>
        </v-card-title>
        <v-card-text>
          <slot>
              <!-- //Content will load here -->
          </slot>
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
    props: ['dialogParent','title'],

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
