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
      <a href="#" @click.prevent="addCourse()" class="u-full-width button-primary button input agregar-carrito" :data-id="course.id">
        Agregar Al Carrito
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurseCard',
  props: {
    course: { type: Object, required: true },
  },
  methods: {
    addCourse() {
      this.$emit('addCourse', this.course.name, this.course.id, this.course.finalprice, this.course.imgSrc);
    },
  }
}
</script>
