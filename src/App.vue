<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Cabecera></Cabecera>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Menu></Menu>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import Menu from "./components/Menu.vue";
export default {
  name: "app",
  components: {
    Cabecera,
    Menu,
  },
  data() {
    return {};
  },
};
</script>