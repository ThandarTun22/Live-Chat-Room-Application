<template>
  <div class="chat-window">
    <div class="message" >
        <div class="single" v-for="message in formattingMessages" :key="message.id">
            <span class="created-at">{{message.created_at}}</span>
            <span class="name">{{message.name}}</span>
            <span class="message">{{message.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import {db} from "../firebase/config"
import {formatDistanceToNow} from "date-fns"
export default {
    setup(){
        let messages = ref([]);
        let formattingMessages = computed(()=>{
            return messages.value.map((msg)=>{
                let formatTime = formatDistanceToNow(msg.created_at.toDate())
                return {...msg, created_at: formatTime}   // name,msg, created_at
            }) // [{}]
        })

        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            // console.log(snap);
            let results = [];
            snap.docs.forEach((doc)=>{
                let document = {...doc.data(), id:doc.id}
                // console.log(doc.data())
                // console.log(document)
                // if(doc.data().created_at){
                //     results.push(document);
                // }
                doc.data().created_at && results.push(document);
            })
            // console.log(results)
            messages.value = results
        })
        return {messages, formattingMessages}
    }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>