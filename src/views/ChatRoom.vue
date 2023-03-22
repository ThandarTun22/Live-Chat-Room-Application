<template>
  <div class="container">
    <NavBar></NavBar>
  </div>
</template>

<script>
import { watch } from 'vue'
import NavBar from '../components/NavBar'
import getUser from '@/composable/getUser'
import {useRouter} from "vue-router"

export default {
  components: { NavBar },
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