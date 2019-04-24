<template>
  <div id="app">
    <div id="nav" class="row">
      <component :is="currentMenu" :right="side === 'right' ? true: false">
        <router-link to="/">
          <font-awesome-icon icon="home"/>
          <span>Inicio</span>
        </router-link>
        <router-link to="/calculadora">
          <font-awesome-icon icon="calculator"/>
          <span>Calculadora</span>
        </router-link>
        <router-link to="/suporte">
          <font-awesome-icon icon="headset"/>
          <span>Suporte</span>
        </router-link>
        <router-link to="/sobre">
          <font-awesome-icon icon="id-card-alt"/>
          <span>Sobre</span>
        </router-link>
      </component>
    </div>

    <div class="row">
      <div class="col">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" >
import slide from "./components/MenuStyles/slide";
import Menu from "./components/Menu";

export default {
  data() {
    return {
      side: "right",
      currentMenu: "slide"
    };
  },
  components: {
    slide,
    Menu
  },
  methods: {
    changeSide(side) {
      this.side = side;
    }
  }
};
</script>

<style>
/* body {
  
} */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 40px;
  position: relative;
  background-color: #67717b;
  margin-bottom: 15px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #ffc107;
}

.bm-item-list  svg,
.bm-item-list  i {
  font-size: 23px;
  margin-right: 10px !important;
}
</style>
