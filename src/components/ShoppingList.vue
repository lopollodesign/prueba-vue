<template>
  <div id="carrito">

    <div v-if="cart.length > 0">
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
        <tr v-for="item in cart" :key="item.id">
          <td>
            <img :src="item.imgSrc" :alt="item.name" width="100">
          </td>
          <td>
            {{ item.name }}
          </td>
          <td>
            ${{ item.finalprice * item.amount }}
          </td>
          <td>
            {{ item.amount }}
          </td>
          <td>
            <a href="#" @click.prevent="deleteFromCart(item.id)" class="borrar-curso">X</a>
          </td>
        </tr>
        </tbody>
      </table>
      <a href="#" id="vaciar-carrito" @click.prevent="emptyCart" class="button u-full-width">Vaciar Carrito</a>
    </div>
    <div v-if="cart.length === 0">
      No tienes nada en el carrito
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ShoppingList',
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions([
        "emptyCart",
        "deleteFromCart"
    ])
  }
}
</script>
