export default function (Vue) {
    Vue.auth = {
        setToken(token,expires_in){

            localStorage.setItem('token',token)
            localStorage.setItem('expires_in',expires_in)

        },
        getToken(){
            var token = localStorage.getItem('token')
            var expires_in =localStorage.getItem('expires_in')
            if(!token || !expires_in) return null;
            if(Date.now()> parseInt(expires_in)){
            this.destroyToken()
            return  null;
            }
            else {
                return token;
            }
        },
        destroyToken(){
            localStorage.removeItem('token')
            localStorage.removeItem('expires_in')
        },
        isLoggedin(){
            if(this.getToken()) return true;
            else return false;
        }
    }
    Object.defineProperties(Vue.prototype,{
        $auth:{
            get:() =>{
                return Vue.auth;
            }
        }
    })
}
