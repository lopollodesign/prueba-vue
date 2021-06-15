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
      <tr :v-if="list.length > 0" v-for="item in list" :key="item.id">
        <td>img</td>
        <td>
          {{ item.name }}
        </td>
        <td>
          $ {{ item.courseID }}
        </td>
        <td>
          1
        </td>
        <td>
          <a href="#" @click="deleteCourse(item.courseID)" class="borrar-curso">X</a>
        </td>
      </tr>
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
  methods: {
    deleteCourse(id) {
      this.$emit('deleteCourse', id);
    },
  }
}
</script>
