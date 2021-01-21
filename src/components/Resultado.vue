<template>
  <div class="resultado resultado-inicio">
        <div class="card">
          <div class="card-header">
            <div id="pdfContainer" style="width: 100%; height: 900px; overflow: auto;">
             <embed
                :src="urlPdf"
                type="application/pdf"
                width="100%"
                height="5800px"
                id="pdfembed"
              />
            </div>
        </div>
        <div @click="arriba" class="scrollpdf arriba"></div>
        <div @click="abajo" class="scrollpdf abajo"></div>
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
  mounted () {

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
    },
    
    abajo() {
      let content = document.querySelector("#pdfContainer")
        if(content.scrollTop < content.scrollHeight){
          content.scrollTop += 200 
        }
    },
    
    arriba() {
      let content = document.querySelector("#pdfContainer")
        if(content.scrollTop < content.scrollHeight){
          content.scrollTop -= 200 
        }
    }
  }
};
</script>