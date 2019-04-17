<template>
  <div>
    <ViewFinder @photo-took="getPhoto"></ViewFinder>    
    <div class="container-fluid fixed-bottom">
      <div class="row bg-dark">
        <div class="col p-2 d-flex">
          <button
            id="camera"
            data-toggle="modal"
            data-target="#viewFinder"
            class="fa-lg px-3 mr-2 text-light border-light bg-dark rounded-circle"
          >
            <font-awesome-icon icon="camera"/>
          </button>
          <textarea
            id="caption"
            maxlength="150"
            style="resize: none"
            class="flex-grouw-1 w-100 rounded border-light align-middle pd-3"
            v-model="caption"
          ></textarea>
          <font-awesome-icon
            @click="sendMessage"
            id="postMessage"
            icon="comment-alt"
            size="2x"
            class="fa-lg position-absolute text-dark"
            style="right: 1.25rem;bottom: 1.25rem; padding: 0.5rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewFinder from "@/components/ViewFinder.vue";

export default {
  name: "Poster",
  components: { ViewFinder },
  data: () => {
    return {
      photoUrl: "",
      caption: ""
    };
  },
  methods: {
    getPhoto(photoUrl) {
      this.photoUrl = photoUrl;
      const cameraButton = document.querySelector("#camera");
      cameraButton.style.backgroundImage = `url(${this.photoUrl})`;
      cameraButton.classList.add("withPhoto");
    },
    sendMessage() {
      this.$emit("new-message", {
        photo: this.photoUrl,
        caption: this.caption
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#camera.withPhoto {
  color: transparent !important;
  background-size: cover;
}
</style>
