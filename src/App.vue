<template>
  <div id="nav">
    <router-link to="Home">Home</router-link> |
    <router-link to="About">About</router-link> |
    <router-link to="Carrito">Carrito</router-link>
  </div>
  <router-view/>
</template>

<style>

#nav {
  background-color: #fff;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
