<template>
    <div class="card card-bote primitiva">
      <div class="row">
        <div class="col-3">
          <h4> La Primitiva</h4>
        </div>
        <div class="col">
          <h5 class="botenum" :inner-html.prop="laprbote.premio_bote | formatBote"></h5>
        </div>
        <div class="col-2">
          <h6 class="cuenta-atras">{{ laprbote.dia_semana }}</h6>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    laprbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
