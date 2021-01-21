<template>
  <div class="cabecera">
    <div class="row">
      <div class="col-lg-2"><div class="botes-cab"><router-link to="/" class="boton1 enlacebotes">BOTES</router-link></div></div>
      <div class="col-lg-3"></div>
      <div class="col-lg-3">
        <img
          alt="La Veleta"
          style="width:200px;"
          src="../assets/images/logo-loteria-la-veleta.svg"
        />
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //console.log('Component mounted.')
  },
};
</script>