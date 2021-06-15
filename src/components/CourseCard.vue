<template>
  <div class="card">
    <img v-show="false" :src="img" class="imagen-curso u-full-width" :alt="title">
    <div class="info-card">
      <h4>{{ title }}</h4>
      <p>Juan Pedro</p>
      <img src="../assets/estrellas.png">
      <p class="precio">
        ${{ price }}
        <span class="u-pull-right ">${{ finalprice }}</span>
      </p>
      <a href="#" @click="addCourse()" class="u-full-width button-primary button input agregar-carrito" :data-id="id">
        Agregar Al Carrito
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurseCard',
  props: {
    id: Number,
    title: String,
    img: String,
    range: Number,
    price: Number,
    finalprice: Number
  },
  methods: {
    addCourse() {
      this.$emit('addCourse', this.title, this.id);
    },
  }
}
</script>
