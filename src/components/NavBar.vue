<template>
  <nav v-if="user">
    <div >
        <p>Hi {{user.displayName}}</p>
        <p class="email">logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>

import useLogout from "../composable/useLogout"
import getUser from "../composable/getUser"
export default {
    setup(){
        
        
        let {error, signOutAccount} = useLogout();
        let {user} = getUser();

        let logout = async()=>{
           await signOutAccount();
           console.log("user logged out")
        }  

        return {logout, user};
    }
}
</script>

<style>
     nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>