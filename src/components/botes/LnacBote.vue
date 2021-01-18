<template>
    <div class="card card-bote lanc">
      <div class="row">
        <div class="col-3">
          <h4>Loteria Nacional</h4>
        </div>
        <div class="col">
          <h5 class="botenum">{{ lnacbote.tenthPrice }}00.000 €</h5>
          <span>Primer premio a la serie</span>
        </div>
        <div class="col">
          <div class="cuenta-atras">
            <span>{{ lnacbote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    lnacbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>