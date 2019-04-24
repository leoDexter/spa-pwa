<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo2.png">
    <BoasVindas></BoasVindas>    
  </div>
</template>

<script>
// @ is an alias to /src
import BoasVindas from "@/components/BoasVindas.vue";

export default {
  name: "home",
  data: function() {
    return { messages: [] };
  },
  components: {
    BoasVindas,    
  }
};
</script>
