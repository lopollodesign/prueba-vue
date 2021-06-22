<template>
  <div class="home">
    <div class="container">
      <table style="width: 100%">
        <thead>
          <th></th>
          <th>rank</th>
          <th>Name</th>
          <th>Price Usd</th>
          <th>Market Cap Usd</th>
          <th>Change Percent 24Hr</th>
        </thead>
        <tbody style="font-size: 14px">
          <tr v-for="coin in assets" :key="coin.id">
            <td>
              <img :src="`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`" :alt="coin.name" width="30">
            </td>
            <td>
              <b>#{{ coin.rank }}</b>
            </td>
            <td>
              <b>{{ coin.name }}</b>
            </td>
            <td>
              <b>{{ coin.priceUsd }}</b>
            </td>
            <td>
              <b>{{ coin.marketCapUsd }}</b>
            </td>
            <td>
              <b>{{ coin.changePercent24Hr }}</b>
            </td>
          </tr>
        </tbody>
      </table>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import api from '@/api';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      assets: []
    }
  },
  created() {
    api.getAssets()
        .then(assets => (this.assets = assets))
  }
}
</script>
