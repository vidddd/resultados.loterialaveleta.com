<template>
  <div class="resultado resultado-inicio">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
                <h5>BOTES</h5>
          </div>
          <div class="card-body botes">
            <div class="row">
              <div class="col">
                <emil-bote v-bind:emilbote="emilbote"></emil-bote>
                <bono-bote v-bind:bonobote="bonobote"></bono-bote>
                <lapr-bote v-bind:laprbote="laprbote"></lapr-bote>
                <elgr-bote v-bind:elgrbote="elgrbote"></elgr-bote>
              </div>
              <div class="col">
                <laqu-bote v-bind:laqubote="laqubote"></laqu-bote>
                <qgol-bote v-bind:qgolbote="qgolbote"></qgol-bote>
                <lotu-bote v-bind:lotubote="lotubote"></lotu-bote>
                <qupl-bote v-bind:quplbote="quplbote"></qupl-bote>
                <!--<lnac-bote v-bind:lnacbote="lnacbote"></lnac-bote> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmilBote from './botes/EmilBote.vue'
import LnacBote from './botes/LnacBote.vue'
import LaprBote from './botes/LaprBote.vue'
import BonoBote from './botes/BonoBote.vue'
import ElgrBote from './botes/ElgrBote.vue'
import LaquBote from './botes/LaquBote.vue'
import QgolBote from './botes/QgolBote.vue'
import LotuBote from './botes/LotuBote.vue'
import QuplBote from './botes/QuplBote.vue'

export default {
  name: 'Inicio',
  components: {
    'emil-bote': EmilBote,
    'lnac-bote': LnacBote,
    'bono-bote': BonoBote,
    'elgr-bote': ElgrBote,
    'lapr-bote': LaprBote,
    'laqu-bote': LaquBote,
    'qgol-bote': QgolBote,
    'lotu-bote': LotuBote,
    'qupl-bote': QuplBote
  },
  data() {
    return {
      emilbote: {},
      lnacbote: {},
      laprbote: {},
      bonobote: {},
      elgrbote: {},
      laqubote: {},
      qgolbote: {},
      lotubote: {},
      quplbote: {},
    }
  },
  mounted() {
    const vm = this
      fetch('https://loterialaveleta.com/botes/damebotes')
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          vm.$data.emilbote = data.data.emil
          vm.$data.lnacbote = data.data.lnac
          vm.$data.laprbote = data.data.lapr
          vm.$data.bonobote = data.data.bono
          vm.$data.elgrbote = data.data.elgr
          vm.$data.laqubote = data.data.laqu
          vm.$data.qgolbote = data.data.qgol
          vm.$data.lotubote = data.data.lotu
          vm.$data.quplbote = data.data.qupl
        })
  },
};
</script>