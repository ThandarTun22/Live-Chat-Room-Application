import { ref } from "vue";
import {auth} from "../firebase/config"

let error = ref("");

let createAccount = async(email, password, displayName)=>{
    try{
        let res = await auth.createUserWithEmailAndPassword(email, password)
   
   if(!res){
        throw new Error("could not create new user")
   }
   res.user.updateProfile({displayName})
//    console.log(res.user);
   return res;
    // console.log(error.value)
    }catch(err){
        // console.log(err.message);
        error.value = err.message;
    }
}
let useSigup = ()=>{
    return {error, createAccount};
}
export default useSigup;