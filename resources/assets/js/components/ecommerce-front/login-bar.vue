<template>
<div>
    <ul :class="className" v-if="!isLoggedin">
        <router-link to="/login" tag="li" ><a>Login</a></router-link>
        <router-link to="/register" tag="li" ><a>Register</a></router-link>
     </ul>
     <ul :class="className" v-else="isLoggedin">
         <li  class="li-pointer"><a @click="logout">Logout</a></li>

      </ul>

</div>

</template>
<script>
        export default{
            props: ['className'],
            data(){
                return {
                    isLoggedin:this.$auth.isLoggedin()
				}
            },
            methods: {
                logout(){
                    this.$auth.destroyToken();
                    this.isLoggedin=this.$auth.isLoggedin();
                }
            }

        }
</script>
<style>
.li-pointer{
    cursor: pointer;
}
</style>
