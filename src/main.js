import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.config.productionTip = false;
Vue.use(VueRouter);

import "./assets/css/bootstrap-grid.min.css";
import "./assets/css/estilos.css";

import Inicio from "./components/Inicio.vue";
import LoteriaNacional from "./components/resultados/LoteriaNacional.vue";
import Bonoloto from "./components/resultados/Bonoloto.vue";
import Primitiva from "./components/resultados/Primitiva.vue";
import GordoPrimitiva from "./components/resultados/GordoPrimitiva.vue";
import Euromillones from "./components/resultados/Euromillones.vue";
import Quiniela from "./components/resultados/Quiniela.vue";
import Quinigol from "./components/resultados/Quinigol.vue";
import Lototurf from "./components/resultados/Lototurf.vue";
import QuintuplePlus from "./components/resultados/QuintuplePlus.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/loterianacional", component: LoteriaNacional },
  { path: "/bonoloto", component: Bonoloto },
  { path: "/primitiva", component: Primitiva },
  { path: "/gordoprimitiva", component: GordoPrimitiva },
  { path: "/euromillones", component: Euromillones },
  { path: "/quiniela", component: Quiniela },
  { path: "/quinigol", component: Quinigol },
  { path: "/lototurf", component: Lototurf },
  { path: "/quintupleplus", component: QuintuplePlus }
];

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes // short for `routes: routes`
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
