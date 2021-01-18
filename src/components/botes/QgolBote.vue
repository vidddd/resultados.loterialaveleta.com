<template>
    <div class="card card-bote quinigol">
      <div class="row">
        <div class="col-3">
          <h4>Quinigol</h4>
        </div>
        <div class="col">
          <h5 class="botenum" :inner-html.prop="qgolbote.premio_bote | formatBote"></h5>
        </div>
        <div class="col-2">
          <h6 class="cuenta-atras">{{ qgolbote.dia_semana }}</h6>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    qgolbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
