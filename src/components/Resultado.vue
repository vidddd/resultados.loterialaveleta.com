<template>
  <div class="resultado resultado-inicio">
        <div class="card">
          <div class="card-header">
            <!--<h6>{{ $route.params.id }}</h6> -->
             <embed
                src="https://loterialaveleta.com/sites/default/files/resultados/lnac.pdf"
                type="application/pdf"
                width="100%"
                height="1000px"
              />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resultado',
  
  mounted() {
    //console.log('Component mounted.')
  },
};
</script>