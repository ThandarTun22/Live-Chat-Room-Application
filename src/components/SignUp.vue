<template>
  <h2>Sign UP</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{error}}</div>
    <button>Sigh Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'

import useSignup from "../composable/useSignup"
export default {
        setup(props, context){
            let displayName = ref("")
            let email = ref("");
            let password = ref("");
            
            let {error, createAccount} = useSignup()
            let signUp = async()=>{
               let res = await createAccount(email.value, password.value, displayName.value)
              //  console.log(res.user)
              if (res){  //successfully create account
                // console.log(res.user)
                context.emit("enterChatroom")
              }
              
            }
            return {displayName, email, password, signUp,error};
        }
}
</script>

<style>

</style>