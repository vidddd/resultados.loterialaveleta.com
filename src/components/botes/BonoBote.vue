<template>
    <div class="card card-bote bonoloto">
      <div class="row">
        <div class="col-3">
            <h4>Bonoloto</h4>
        </div>
        <div class="col">
          <h5 class="botenum" :inner-html.prop="bonobote.premio_bote | formatBote"></h5>
        </div>
        <div class="col-2">
          <h6 class="cuenta-atras">{{ bonobote.dia_semana }}</h6>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    bonobote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
