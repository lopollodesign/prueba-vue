<template>
  <div class="coin">
    <div v-if="asset.id" class="container">
      <h1>Coin detail: {{ asset.name }} ({{ asset.symbol }})</h1>
    </div>
  </div>
</template>

<script>
import api from "@/api"

export default {
  name: 'Coin',

  data () {
    return {
      asset: {}
    }
  },

  created() {
    this.getCoin()
  },

  methods: {
    getCoin () {
      const id = this.$route.params.id
      api.getAsset(id).then(asset => this.asset = asset)
    }
  }
}
</script>
