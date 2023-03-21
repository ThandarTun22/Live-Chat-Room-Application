<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
        <LogIn></LogIn>
        <p>not a member? <span @click="showLoginForm = !showLoginForm"> create account?</span></p>
    </div>
    <div v-else>
        <SignUp></SignUp>
        <p>Already member? <span @click="showLoginForm = !showLoginForm">Login Account?</span></p>
    </div>   
  </div>
</template>

<script>
import { ref } from 'vue'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
export default {
  components: {
    LogIn, SignUp },
    setup(){
        let showLoginForm = ref(true);

        return {showLoginForm}
    }

}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
       /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>