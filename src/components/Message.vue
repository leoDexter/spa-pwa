<template>
  <div style="displau:none" class="row message bg-light mb-2 rounded shadow">    
    <div class="col-2 p-1">
      <img :src="photoUrl" class="photo w-100 rounded">
    </div>
    <div clas="col-10 p-1">{{caption}}</div>    
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    photoUrl: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    }
  }
};
</script>
