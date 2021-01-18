<template>
    <div class="card card-bote gordo">
      <div class="row">
        <div class="col-3">
          <h4>El Gordo de la Primitiva</h4>
        </div>
        <div class="col">
          <h5 class="botenum" :inner-html.prop="elgrbote.premio_bote | formatBote"></h5>
        </div>
        <div class="col-2">
          <h5 class="cuenta-atras">{{ elgrbote.dia_semana }}</h5>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    elgrbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
