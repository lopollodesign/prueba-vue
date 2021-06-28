<template>
  <div class="course">
    <div v-if="course" class="container">
      <img :src="course.imgSrc" class="imagen-curso u-full-width" :alt="course.name">
      <h1>{{ course.name }}</h1>
      <div>
        <b>price:</b> {{ course.price }}
      </div>
      <div>
        <b>final price:</b> {{ course.finalprice }}
      </div>
      <div>
        <a href="#" @click.prevent="addToCart(course)">
          Añadir
        </a>
        <a href="#" @click.prevent="deleteFromCart(course.id)" v-if="addedToCart">
          Eliminar
        </a>
      </div>
    </div>
    <div v-else>
      No hay curso
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Course',

  data() {
    return {
      course: {type: Object}
    }
  },
  computed: {
    ...mapGetters(['list', 'cart']),
    addedToCart() {
      return this.cart.some(c => c.id === this.course.id)
    }
  },
  methods: {
    getCourse(id) {
      return this.list.find(c => c.id === id)
    },
    ...mapActions(['addToCart', 'deleteFromCart'])
  },
  created() {
    const id = Number.parseInt(this.$route.params.id, 10)
    this.course = this.getCourse(id)
  }
}
</script>
