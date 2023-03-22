import { ref } from "vue";
import { auth } from '@/firebase/config';

let error = ref("");
let signOutAccount = async() => {
    try{
        await auth.signOut();
        console.log("logged out")
    }catch(err){
        // console.log(err.message)
        error.value = err.message;
        console.log(error.value);
    }
}
let useLogout = () =>{
    return {error, signOutAccount};
}

export default useLogout;