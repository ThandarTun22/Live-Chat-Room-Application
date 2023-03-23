import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from "../views/WelcomeView"
import ChatRoom from "../views/ChatRoom"
import { auth } from '@/firebase/config'


const routes = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomeView,
    beforeEnter(to, from, next){
      let user = auth.currentUser;
      if(!user){
        next();
      }
      else{
        next({name: "Chatroom"})
      }
    }
  },
  {
    path:"/chatroom",
    name: "Chatroom",
    component: ChatRoom,
    beforeEnter(to, from, next){
      let user = auth.currentUser;
      if(user){
        next();
      }
      else{
        next({name: "Welcome"})
      }
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
