<template lang="pug">
.card
  img.imagen-curso.u-full-width(
    :src="course.imgSrc"
    :alt="course.name")
  .info-card
    h4 {{ course.name }}
    p pedro juan
    img(src="../assets/estrellas.png")
    .precio ${{ course.price }}
    span.u-pull-right ${{ course.finalprice }}
    a.u-full-width.button.input.detalles(
      href="#"
      @click="goToDetail(course.id)"
      style="margin-bottom: 0;"
      ) Detalles del curso
    a.u-full-width.button-primary.button.input.agregar-carrito(
      href="#"
      @click.prevent="addToCart(course)"
      :data-id="course.id"
    ) Agregar Al Carrito
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CurseCard',
  props: {
    course: { type: Object, required: true },
  },
  methods: {
    ...mapActions([ "addToCart" ]),
    goToDetail(id) {
      this.$router.push({name: 'course', params: { id } })
    }
  }
}
</script>
