<template>
  <div class="card">
    <img :src="course.imgSrc" class="imagen-curso u-full-width" :alt="course.name">
    <div class="info-card">
      <h4>{{ course.name }}</h4>
      <p>Juan Pedro</p>
      <img src="../assets/estrellas.png">
      <p class="precio">
        ${{ course.price }}
        <span class="u-pull-right ">${{ course.finalprice }}</span>
      </p>
      <a href="#" @click="goToDetail(course.id)" class="u-full-width button input detalles" style="margin-bottom: 0;">
        Detalles del curso
      </a>
      <a href="#" @click.prevent="addToCart(course)" class="u-full-width button-primary button input agregar-carrito" :data-id="course.id">
        Agregar Al Carrito
      </a>
    </div>
  </div>
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
