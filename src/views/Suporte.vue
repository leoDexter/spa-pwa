<template>
  <div>
    <div class="list-group" style="text-align:left">
      <a 
        href="javscript:void(0);"
        class="list-group-item"
        @click="changeSelection(item)"
        v-bind:class="{ active: item.selected }"
        v-for="item in infoSuporte"
      >
        <span>{{item.title}}</span>
        <font-awesome-icon class="float-right" icon="eye"/>
      </a>  
    </div>

    <div class="card card-body bg-light" v-if="suporteSelecionado" style="top:10px">
      <div>
        <font-awesome-icon icon="phone"/>
        <br>
        <a :href="'tel:'+suporteSelecionado.phone">{{suporteSelecionado.phone}}</a>
      </div>
      <div>
        <font-awesome-icon icon="envelope"/>
        <br>
        <a :href="'mailto:'+suporteSelecionado.mail">{{suporteSelecionado.mail}}</a>
      </div>

    </div>
  </div>
</template>
<script>

export default {
  name: "suporteInfo",
  data() {
    return {
      infoSuporte: [
        {
          title: "Suporte Tributário RJ e MG",
          phone: "(21) 3049-4874",
          mail: "tributario2@alertafiscal.com.br",
          selected: false
        },
        {
          title: "Suporte Tributário ES",
          phone: "(27) 3075-4277",
          mail: "es.tributario@alertafiscal.com.br",
          selected: false
        },
        {
          title: "Suporte Técnico",
          phone: "(21) 3049-4874",
          mail: "suporte@alertafiscal.com.br",
          selected: false
        },
        {
          title: "Suporte Financeiro",
          phone: "(21) 3144-8149",
          mail: "financeiro@alertafiscal.com.br",
          selected: false
        }
      ],
      suporteSelecionado: null
    };
  },
  methods: {
    changeSelection(item) {
      
      this.infoSuporte.forEach(function(tipoSuporte){ delete tipoSuporte.selected});
      
      item.selected = true;
      this.suporteSelecionado = item;
    }
  }
};
</script>
<style scoped>

a{ text-decoration: none;}

</style>

