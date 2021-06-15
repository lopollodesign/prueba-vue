<template>
  <div id="carrito">

    <table id="lista-carrito" class="u-full-width">
      <thead>
      <tr>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
        {{ this.list }}
      </tbody>
    </table>

    <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  props: {
      list: Array
  },
}
</script>
