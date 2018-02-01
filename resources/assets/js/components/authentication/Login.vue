<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" :rules="emailRules" v-model="user.email" label="Email" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" v-model="user.password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary"  v-on:click="login" >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default{
    data(){
        return{
          user:{
              email:'',
              password:''
          },
        drawer: null,
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
     }
    },
    props: {
    source: String
    },
    methods:{
        login(){
            var data={
                client_id: 2,
                client_secret:'LVSBC2SrSWMvbZMruTyyAYoh4RkWiUNiWAVMyDY2',
                grant_type:'password',
                username:this.user.email,
                password:this.user.password

            };
                   axios.post('oauth/token',data)
                    .then(response => {
                        //console.log(response);
                        this.$auth.setToken(response.data.access_token,response.data.expires_in +Date.now())
                        this.$router.push("/admin/home");
                    })
        }
    }
    }
</script>
