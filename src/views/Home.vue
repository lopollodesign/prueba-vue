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
          <th></th>
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
              <router-link :to="{ name : 'coin', params: {id: coin.id } }">
                <b>{{ coin.name }}</b>
              </router-link>
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
            <td>
              <UiButton @click="goToDetail(coin.id)">Detail</UiButton>
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
import UiButton from '@/components/UiButton.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    UiButton
  },
  data () {
    return {
      assets: []
    }
  },
  methods: {
    goToDetail(id) {
      this.$router.push({name: 'coin', params: { id } })
    }
  },
  created() {
    api.getAssets()
        .then(assets => (this.assets = assets))
  }
}
</script>
