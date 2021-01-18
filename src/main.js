import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import moment from 'moment';
var numeral = require('numeral') //http://numeraljs.com/
Vue.use(VueRouter);

Vue.filter('formatFecha', value => {
 if (value) {
        moment.locale('es');
        return moment(String(value)).format('dddd D / MMMM').toUpperCase()
    }
})
Vue.filter('formatBote', value => {
  let number = numeral(value)
  // no hay bote
  if(number.value() === null)
  {
    return '<span class="nohaybote">No hay Bote</span>'
  } else {
    if (number._value > 999999)
      return number.divide('1000000')._value + ' <span class="millones">millones €</span>'
    else return number.format('0,0') + ' <span>€</span>'
  }

})

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
import Resultado from "./components/Resultado.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/loterianacional", component: LoteriaNacional ,
                children: [{
                  name: 'ResultadoLoterianacional',
                  path: '/loterianacional/resultado/:id',
                  component: Resultado
                }],
  },
  { path: "/bonoloto", component: Bonoloto ,
                children: [{
                  name: 'ResultadoBonoloto',
                  path: '/bonoloto/resultado/:id',
                  component: Resultado
                }],
  },
  { path: "/primitiva", component: Primitiva ,
                children: [{
                  name: 'ResultadoPrimitiva',
                  path: '/primitiva/resultado/:id',
                  component: Resultado
                }],
  },
  { path: "/gordoprimitiva", component: GordoPrimitiva ,
                children: [{
                  name: 'ResultadoGordoprimitiva',
                  path: '/gordoprimitiva/resultado/:id',
                  component: Resultado
                }],
  },
  { path: "/euromillones", component: Euromillones ,
                children: [{
                  name: 'ResultadoEuromillones',
                  path: '/euromillones/resultado/:id',
                  component: Resultado
                }],
  },
  { path: "/quiniela", component: Quiniela ,
                children: [{
                  name: 'ResultadoQuiniela',
                  path: '/quiniela/resultado/:id',
                  component: Resultado
                }],
  },
  { path: "/quinigol", component: Quinigol ,
                children: [{
                  name: 'ResultadoQuinigol',
                  path: '/quinigol/resultado/:id',
                  component: Resultado
                }],
  },
  { path: "/lototurf", component: Lototurf ,
                children: [{
                  name: 'ResultadoLototurf',
                  path: '/lototurf/resultado/:id',
                  component: Resultado
                }],
  },
  { path: "/quintupleplus", component: QuintuplePlus ,
                children: [{
                  name: 'ResultadoQuintupleplus',
                  path: '/quintupleplus/resultado/:id',
                  component: Resultado
                }],
  }
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
