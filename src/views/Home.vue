<template>
  <div class="home">
    <div id="messages" class="container-fluid">
      <div v-for="message in messages" :key="message.caption">        
        <Message :photoUrl="message.photo" :caption="message.caption"></Message>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
    <Poster @new-message="newMessage"></Poster>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Poster from "@/components/Poster.vue";
import Message from "@/components/Message.vue";

export default {
  name: "home",
  data: function() {
    return { messages: [] };
  },
  components: {
    HelloWorld,
    Poster,
    Message
  },
  methods: {
    newMessage(msg) {
      this.messages.push(msg);
      console.log(JSON.stringify(msg));
    }
  }
};
</script>
