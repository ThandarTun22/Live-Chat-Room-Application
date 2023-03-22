import { ref } from "vue";
import {auth} from "../firebase/config"

let error = ref("");

let signIn = async(email, password) => {
    try{
        let res = await auth.signInWithEmailAndPassword(email, password);
        if(!res){
          throw new Error("can't login account");
        }
        // console.log(res.user)
        return res;
       }catch(err){
        // console.log(err.message);
        error.value = err.message;
        console.log(error.value)
       }
}

let useLogin = ()=>{
    return {error, signIn}
}

export default useLogin;