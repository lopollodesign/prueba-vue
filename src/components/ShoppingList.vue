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
          <td>img</td>
          <td>
            {{ item.name }}
          </td>
          <td>
            ${{ item.finalprice }}
          </td>
          <td>
            {{ item.id }}
          </td>
          <td>
            <a href="#" @click.prevent="deleteCourse(item.id)" class="borrar-curso">X</a>
          </td>
        </tr>
        </tbody>
      </table>
      <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
    </div>
    <div v-if="list.length === 0">
      No tienes nada en el carrito
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  props: {
      list: Array
  },
  methods: {
    deleteCourse(id) {
      this.$emit('deleteCourse', id);
    },
  }
}
</script>
