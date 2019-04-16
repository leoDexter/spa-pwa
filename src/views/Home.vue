<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Poster></Poster>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Poster from '@/components/Poster.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Poster
  }
}
</script>
