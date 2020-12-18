<template>
  <div class="resultado resultado-gordoprimitiva">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="wrapper-fechas">
                 <div class="list-fechas">
                     <router-link v-for="(item, index) in sorteos"
                                  :data="sorteos"
                                  :key="index"
                                  :to="{ name: 'ResultadoGordoprimitiva', params: { id: item.id }  }"
                                  class="botonfecha">{{ item.fecha | formatFecha }}</router-link>
                  </div>
                </div>
                <div @click="scroll_left" class="botonantsig anterior">&lt;</div>
                <div @click="scroll_right" class="botonantsig siguiente">&gt;</div>
          </div>
          </div>
        </div>
      </div>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      sorteos: {}
    }
  },
  mounted: function() {
    // Alias the component instance as `vm`, so that we can access it inside the promise function
    const vm = this
    fetch('https://loterialaveleta.com/sorteos/ultimossorteos/ELGR')
      .then(function(response) {
       return response.json()
      })
      .then(function(data) {
        vm.$data.sorteos = data
      })
  },
  methods: {
    scroll_left() {
      let content = document.querySelector(".wrapper-fechas");
      content.scrollLeft -= 200;
    },
    scroll_right() {
      let content = document.querySelector(".wrapper-fechas");
      content.scrollLeft += 200;
    }
  }
};
</script>