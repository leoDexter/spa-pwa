<template>
  <div>
    <div class="hello">
      <h4>Especializada em classificação fiscal.</h4>
      <p>
        Com o nosso software o seu negócio rende mais e melhor.
        Veja abaixo os serviços que a ALERTA FISCAL tem pra lhe oferecer.
      </p>
      <div>
        <input
          type="text"
          id="FiltroBusca"
          class="form-control FiltroBusca ui-autocomplete-input ToolTip"
          name="search"
          placeholder="Faça aqui sua busca tributária"
          autocomplete="off"
          role="textbox"
          aria-autocomplete="list"
          aria-haspopup="true"
          data-toggle="tooltip"
          data-placement="top"
          data-original-title="Faça aqui sua busca tributária"
        >
      </div>
    </div>
    <div>
      <SpeechButton @onTranscription="transcription_received"></SpeechButton>
    </div>

    <div class="row bg-light">
      <div class="rounded box-shadow" style="padding: 15px; text-align: left;">
        <div class="media text-muted pt-3">
          <svg
            id="i-clipboard"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 34"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path d="M12 2 L12 6 20 6 20 2 12 2 Z M11 4 L6 4 6 30 26 30 26 4 21 4"></path>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">Revisão Fiscal</strong>
            Sabia que você pode estar pagando impostos além do que deveria? Sabia que você pode estar sonegando sem saber e correndo o risco de multas? Nossa equipe oferece um diagnóstico gratuito para identificar essas inconsistências em seu cadastro de produtos.
          </p>
        </div>

        <div class="media text-muted pt-3">
          <svg
            id="i-clipboard"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 34"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18"></path>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">Integração com Retaguardas</strong>
            Nosso portal disponibiliza tecnologia de integração para a sua retaguarda. Ligue para o nosso suporte técnico para orientações ou clique no botão ao lado.
          </p>
        </div>

        <div class="media text-muted pt-3">
          <svg
            id="i-msg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 34"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z"></path>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">Dúvidas?</strong>
            Alguma dificuldade ou dúvida? Envie um e-mail para
            <a
              href="mailto:suporte@alertafiscal.com.br"
              title="entre em contato com nosso suporte"
            >suporte@alertafiscal.com.br</a> ou clique no botão ao lado, que sua solicitação prontamente será encaminhada para o setor responsável. Estamos às ordens!
          </p>
        </div>

        <small class="d-block text-right mt-3">
          <a href="#">All updates</a>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import SpeechButton from "@/components/SpeechButton";
export default {
  name: "HelloWorld",
  components: { SpeechButton },
  methods: {
    transcription_received(texto) {
        var searchInput = document.querySelector("#FiltroBusca");
        searchInput.value = texto;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input[type="text"] {
  height: 60px;
  font-size: 18px;
  text-align: center;
  background: #85c1f11f;
  border: 2px ridge #fcb730;
}
</style>
