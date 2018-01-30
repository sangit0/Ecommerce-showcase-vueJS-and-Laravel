<template>
    <div class="panel panel-info">
      <div class="panel-body">
    <v-list>
      <v-list-tile v-for="item in items" :key="item.id" @click="">
        <v-list-tile-action>
          <img :src="item.thumbnail_url" width="30px" height="30px"/>
        </v-list-tile-action>

        <v-list-tile-content>
            <v-chip  outline color="grey">
                {{ item.title }}
            </v-chip>

        </v-list-tile-content>

        <span class="text text-danger pull-right"> x{{item.quantity}}</span>
                   <v-btn fab icon small color="pink">
                     <v-icon>close</v-icon>
                   </v-btn>


      </v-list-tile>
    </v-list>

    <v-btn color="green" v-if="items.length>0">
        Checkout
    </v-btn>
    <v-btn color="red" v-else="items.length==0">
        Your bag is empty! please do shopping.
    </v-btn>

    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default{
        data(){
            return{
                items:this.$store.getters.bagItem,
            }
        }
    }
</script>
