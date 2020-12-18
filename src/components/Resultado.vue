<template>
  <div class="resultado resultado-inicio">
        <div class="card">
          <div class="card-header">
            <!--<h6>{{ $route.params.id }}</h6> -->
             <embed
                :src=" urlPdf "
                type="applic ation/pdf"
                width="100%"
                height="1000px"
              />
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Resultado',
  data() {
        return { urlPdf: "" }
    },
  created () {
    this.getContent(this.$route.params.id);
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.id);
    next()
  },

  methods: {
    getContent (sorteoid) {
     const vm = this
     axios
      .get("https://loterialaveleta.com/sorteos/dameresultado-pdf/"+sorteoid)
      .then(response => (
        vm.urlPdf = response.data
        ))
  }
},
};
</script>