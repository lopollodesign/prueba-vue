<template>
  <div class="coin">
    <div class="container">
      <div v-if="asset.id" class="container">
        <h1>Coin detail: {{ asset.name }} ({{ asset.symbol }})</h1>
      </div>

      <div>
        precio: {{ asset.priceUsd }}
      </div>
      <div>
        min: {{ min }}
      </div>
      <div>
        max: {{ max }}
      </div>
      <div>
        avg: {{ avg }}
      </div>

      <line-chart :colors="['orange']" :min="min" :max="max"
                  :data="history.map(h => [h.date , parseFloat(h.priceUsd).toFixed(2)])"/>
    </div>
  </div>
</template>

<script>
import api from "@/api"

export default {
  name: 'Coin',

  data() {
    return {
      asset: {},
      history: []
    }
  },
  created() {
    this.getCoin()
  },
  computed: {
    min() {
      return Math.min(...this.history.map(h => parseFloat(h.priceUsd).toFixed(2)))
    },
    max() {
      return Math.max(...this.history.map(h => parseFloat(h.priceUsd).toFixed(2)))
    },
    avg() {
      return Math.abs(...this.history.map(h => parseFloat(h.priceUsd).toFixed(2)))
    }
  },
  methods: {
    getCoin() {
      const id = this.$route.params.id

      Promise.all([api.getAsset(id), api.getAssetHistory(id)]).then(
          ([asset, history]) => {
            this.asset = asset
            this.history = history
          }
      )
    }
  }
}
</script>
