<template>
  <div id="app">
    <div id="nav">
      <component :is="currentMenu" :right="side === 'right' ? true: false">
        <router-link to="/">
          <font-awesome-icon icon="bell"/>
          <span>Home</span>
        </router-link>
        <router-link to="/about">
          <font-awesome-icon icon="bell"/>
          <span>about</span>
        </router-link>
        <a href="#">
          <font-awesome-icon icon="bell"/>
          <span>Alerts</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-envelope-o"></i>
          <span>Messages</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-comment-o"></i>
          <span>Comments</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-bar-chart-o"></i>
          <span>Analytics</span>
        </a>
        <a href="#">
          <i class="fa fa-fw fa-newspaper-o"></i>
          <span>Reading</span>
        </a>
      </component>
    </div>
    <router-view/>
  </div>
</template>

<script>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
