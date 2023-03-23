<template>
  <div class="container">
    <NavBar></NavBar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatForm from '../components/NewChatForm'
import { watch } from 'vue'
import NavBar from '../components/NavBar'
import getUser from '@/composable/getUser'
import {useRouter} from "vue-router"

export default {
  components: {
    ChatWindow,
    NewChatForm, NavBar },
    setup(){
      let {user} = getUser();
      let router = useRouter();

      watch(user, ()=>{
        if(!user.value){
          // redirect welcome page
          router.push("/")
        }
      })
    }
}
</script>

<style>

</style>