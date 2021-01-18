<template>
    <div class="card card-bote quiniela">
      <div class="row">
        <div class="col-3">
          <h4>La Quiniela</h4>
        </div>
        <div class="col">
          <h5 class="botenum" :inner-html.prop="laqubote.premio_bote | formatBote"></h5>
        </div>
        <div class="col-2">
          <h6 class="cuenta-atras">{{ laqubote.dia_semana }}</h6>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    laqubote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
