<template>
    <div class="card card-bote euromillones">
      <div class="row">
        <div class="col-3">
          <h4>Euromillones</h4>
        </div>
        <div class="col">
          <h5 class="botenum" :inner-html.prop="emilbote.premio_bote | formatBote"></h5>
        </div>
        <div class="col-2">
          <h6 class="cuenta-atras">{{ emilbote.dia_semana }}</h6>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    emilbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
