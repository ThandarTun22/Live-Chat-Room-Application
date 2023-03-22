<template>
  <h2>Login</h2>
  <form @submit.prevent="Login">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div class="error" v-if="error">{{error}}</div>
    <button>Sigh Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import {auth} from "../firebase/config"
import useLogin from '../composable/useLogin'

export default {
        setup(props, context){
            let email = ref("");
            let password = ref("");
            
            let {error, signIn} = useLogin();
            
            let Login = async()=>{
                // console.log(displayName.value, email.value, password.value)
                let res =  await signIn(email.value, password.value)
                if (res){
                  // console.log(res.user)
                  context.emit("enterChatroom")
                }
                
            }
            return {email, password, Login, error};
        }
}
</script>

<style>

</style>