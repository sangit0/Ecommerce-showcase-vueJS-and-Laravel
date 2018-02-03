<template>
    <div>
    <div class="panel panel-info">
      <div class="panel-body">
    <v-list style="text-decoration: none;">
      <v-list-tile v-for="item in items" :key="item.id" @click="" >
        <v-list-tile-action>
          <img :src="item.thumbnail_url" width="30px" height="30px"/>
        </v-list-tile-action>

        <v-list-tile-content>
            <v-chip  outline color="grey">
                {{ item.title }}
            </v-chip>

        </v-list-tile-content>

        <span class="text text-danger pull-right"> x{{item.quantity}}</span>
                   <v-btn @click="removeCartItem(item)" fab icon small color="pink">
                     <v-icon >close</v-icon>
                   </v-btn>


      </v-list-tile>
    </v-list>

    <router-link :to="'/checkout'"v-if="items.length>0" style="text-decoration: none;"><v-btn color="green" >
        <p style="color:white;" >
            Checkout
        </p>
    </v-btn></router-link>
    <v-btn color="red" v-else="items.length==0">
        <p style="color:black;" >
            Your bag is empty! please do shopping.
        </p>
    </v-btn>
    <hr />
    </div>
    </div>
    <v-alert outline color="info" icon="info" :value="true" v-if="items.length>0">Total item on cart: {{items.length}}</v-alert><br />
    <v-alert outline color="info" icon="info" :value="true" v-if="items.length>0">Total amount: {{this.$store.getters.total_price}}</v-alert><br />

</div>

</template>

<script>
import { mapActions } from 'vuex';

    export default{
        data(){
            return{
                items:this.$store.getters.bagItem,
            }
        },
        methods: {
            ...mapActions(['checkValue','removeItem']),
          removeCartItem(item) {
              this.removeItem({
                  item:item
              });
              this.checkValue();
          }
        }
    }
</script>
