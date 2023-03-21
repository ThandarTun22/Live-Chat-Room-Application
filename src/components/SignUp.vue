<template>
  <h2>Sign UP</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sigh Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import {auth} from "../firebase/config"
export default {
        setup(){
            let displayName = ref("")
            let email = ref("");
            let password = ref("");
            let error = ref(null);
            let signUp = async()=>{
                // console.log(displayName.value, email.value, password.value)
                try{
                    let res = await auth.createUserWithEmailAndPassword(email.value, password.value)
               
               if(!res){
                    throw new Error("could not create new user")
               }
                }catch(err){
                    // console.log(err.message);
                    error.value = err.message;
                }
                // console.log(res.user);
                console.log(error.value)
            }
            return {displayName, email, password, signUp}
        }
}
</script>

<style>

</style>