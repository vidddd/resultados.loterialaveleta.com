<template>
  <div class="resultado resultado-inicio">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4>Inicio</h4>
            <h6>{{ $route.params.id }}</h6>
          </div>
        </div>
      </div>
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