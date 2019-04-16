<template>
  <div class="modal fade" id="viewFinder" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog fixed-bottom" role="document">
      <div class="modal-content bg-dark">
        <div class="modal-body p-1 text-center">
          <video id="player" autoplay class="w-100 rounded"></video>
          <button
            id="shutter"
            data-dismiss="modal"
            class="fa-md rounded-circle bg-white text-danger my-2"
          >
            <font-awesome-icon icon="circle"></font-awesome-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
class Camera {
  constructor(video_node) {
    // Camera stream DOM node
    this.videoNode = video_node;
  }

  switchOn() {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 600, height: 600 },
        audio: false
      })
      .then(stream => {
        this.videoNode.srcObject = this.stream = stream;
      });
  }

  switchOff() {
    this.videoNode.pause();
    this.stream.getTracks()[0].stop();
  }

  takePhoto() {
    // Create a canvas to receive the frame
    let canvas = document.createElement("canvas");
    canvas.setAttribute("width", "600");
    canvas.setAttribute("height", "600");

    let context = canvas.getContext("2d");
    // draw frame
    context.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height);

    // image data url
    this.photo = context.canvas.toDataURL();
    context = null;
    canvas = null;

    return this.photo;
  }
}

export default {
  name: "ViewFinder",
  props: {
    photo: Object
  },
  created: () => {},
  mounted: () => {
    var camera = new Camera(document.querySelector("#player"));
    const cameraButton = document.querySelector("#shutter");
    var viewFinder = document.querySelector("#viewFinder");

    $(viewFinder).on("show.bs.modal", () => {
      camera.switchOn();
    });
  },
  methods: {
    isOpen: () => {}
  }
};
</script>

