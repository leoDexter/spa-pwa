<template>
  <div>
    <button
      v-if="!isTalking"
      @click="startListening"
      class="btn-lg px-3 mr-2 bg-warning rounded-circle"
    >
      <font-awesome-icon icon="microphone"/>
    </button>
    <button v-else @click="stopListening" class="btn-lg px-3 mr-2 bg-warning rounded-circle">
      <font-awesome-icon icon="microphone-alt-slash"/>
    </button>
  </div>
</template>

<script>
import { truncate } from "fs";
export default {
  name: "SpeechButton",
  data() {
    return {
      isTalking: false,
      recognition: null
    };
  },
  methods: {
    startListening() {
      this.isTalking = true;
      var component = this;
      component.recognition = new webkitSpeechRecognition();
      component.recognition.interimResults = true;
      component.recognition.lang = "pt-BR";
      component.recognition.continuous = true;
      component.recognition.start();
      // This event happens when you talk in the microphone
      component.recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            if (component.isTalking) {
              component.$emit(
                "onTranscription",
                event.results[i][0].transcript.trim()
              );
            } else {
              component.recognition.stop();
              delete component.recognition;
            }
          }
        }
      };

      component.recognition.onend = function(event) {
        component.isTalking = false;
        delete component.recognition;
      };
    },
    stopListening() {
      this.isTalking = false;
    }
  }
};
</script>

<style scoped>
button {
  color: #000;
  width: 58px;
  height: 58px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-color: #aac8e6 !important;
}
</style>
