<template>
  <div id="carrito">

    <div v-if="list.length > 0">
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
        <tr v-for="item in list" :key="item.id">
          <td>
            <img :src="item.imgSrc" :alt="name" width="100">
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
            <a href="#" @click.prevent="deleteCourse(item.id)" class="borrar-curso">X</a>
          </td>
        </tr>
        </tbody>
      </table>
      <a href="#" id="vaciar-carrito" @click.prevent="emptyCart" class="button u-full-width">Vaciar Carrito</a>
    </div>
    <div v-if="list.length === 0">
      No tienes nada en el carrito
    </div>

    <a href="#" @click="addToCart(4)">Numero</a>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'ShoppingList',
  props: {
      list: Array
  },
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions([
        "addToCart"
    ]),
    deleteCourse(id) {
      this.$emit('deleteCourse', id);
    },
    emptyCart() {
      this.$emit('emptyCart');
    },
  }
}
</script>
