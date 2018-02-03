<template>
    <div>

        <loginbar :className="'nav navbar-nav navbar-default navbar-right btn'">

        </loginbar>
         <br /><br /><br />
         <h3 class="text text-danger" v-if="!this.$auth.isLoggedin()"> You are not logged in! Please logged in</h3>

         <div class="row">
    <div class="col-sm-7">

    <v-list >
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
                   <v-btn @click="removeCartItem(item)" fab icon small color="pink">
                     <v-icon >close</v-icon>
                   </v-btn>

      </v-list-tile>
      <v-btn color="green" v-if="items.length>0">
          <p style="color:white;" >
              Save and Continue shopping
          </p>
      </v-btn>
      <v-btn color="red" v-else="items.length==0">
          <p style="color:black;" >
              Your bag is empty! please do shopping.
          </p>
      </v-btn>

      <div class="well" v-if="items.length>0">
          <br />
          <p class="text-info" >Total item on cart: {{items.length}}</p><br />
          <p class="text-info" >Total amount: {{this.$store.getters.total_price}}</p><br />

      </div>
    </v-list>
</div>


</div>


    <hr />

    </div>
</template>
<script>
import { mapActions } from 'vuex';
import loginbar from "./login-bar.vue"

    export default{
        data(){
            return{
                items:this.$store.getters.bagItem,
                loginstatus:this.$auth.isLoggedin
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
      },
      components: {
        loginbar
    },
    created() {
        //do something after creating vue instance
        if(this.items.length==0)
         this.$router.push('/');
      }
    }
</script>
