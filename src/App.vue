<template>
  <div id="nav">
    <div class="container">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/carrito">Carrito</router-link>
    </div>
  </div>
  <UiHeader></UiHeader>
  <router-view/>
</template>

<script>
import UiHeader from "./components/UiHeader";

export default {
  name: 'App',
  components: {
    UiHeader
  }
}
</script>

<style>

#nav {
  background-color: #333;
  padding: 5px 0;
  color: #ddd;
}

#nav a {
  font-weight: bold;
  color: #ddd;
}

#nav a:hover,
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
