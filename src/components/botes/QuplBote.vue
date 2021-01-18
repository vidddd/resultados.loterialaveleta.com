<template>
    <div class="card card-bote quintuple-plus">
      <div class="row">
        <div class="col-3">
          <h4>Quintuple Plus</h4>
        </div>
        <div class="col">
          <h5 class="botenum" :inner-html.prop="quplbote.premio_bote | formatBote"></h5>
        </div>
        <div class="col-2">
          <h6 class="cuenta-atras">{{ quplbote.dia_semana }}</h6>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    quplbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
