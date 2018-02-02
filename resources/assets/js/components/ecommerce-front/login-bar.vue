<template>
<div>
    <ul :class="className">
        <router-link to="/login" tag="li" v-if="!loginstatus"><a>Login</a></router-link>
        <!-- <li v-if="loginstatus" class="li-pointer"><a @click="logoutLocal">Logout</a></li> -->
        <router-link to="/register" tag="li" v-if="!loginstatus"><a>Register</a></router-link>
     </ul>
</div>

</template>
<script>
        export default{
            props: ['className'],
            data(){
                return {
				loginstatus : !this.$auth.isLoggedin
				}
            }
        }
</script>
