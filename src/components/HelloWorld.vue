<template>
  <div class="hello">
    <h1>Star Wars Characters</h1>
    <template v-if="showLinks">
      <ul v-if="characters?.length > 0">
        <li v-for="character of characters" :key="character.url"><a :href="character.url" target="_blank" rel="noopener">{{ character.name }}</a></li>
      </ul>
      <div v-else>No Characters</div>

    </template>
    <button @click="fetchStarWarsCharacter()">Fetch characters</button>

    <Content>
      <template #title>
        <b>
          titulo
        </b>
      </template>

      <div>
        hello
      </div>
    </Content>

  </div>
</template>

<script>
import Content from './Content'

export default {
  name: 'HelloWorld',
  components: {
    Content
  },
  props: {
    msg: String,
    msg2: String,
    showLinks: Boolean,
  },
  data() {
    return {
      characters: [],
    }
  },
  computed: {
    msg3() {
      return this.msg.replace('h', 'H')
    }
  },
  methods: {
    async fetchStarWarsCharacter() {
      const response = await fetch('http://swapi.dev/api/people/')
      const responseJson = await response.json()
      this.characters = responseJson.results
    },
  },
  
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
