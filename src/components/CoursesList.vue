<template>
  <div id="lista-cursos" class="container">
    <div class="lista-cursos_list">
      <CourseCard v-for="course in list" :key="course.id" :title="course.name"/>
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'

export default {
  name: 'CursesList',
  components: {
    CourseCard
  },
  data() {
    return {
      list: [
        { id:"1", name:"HTML5, CSS3, JavaScript para Principiantes", price:"200"},
        { id:"2", name:"Curso de Comida Vegetariana", price:"200"},
        { id:"3", name:"Guitarra para Principiantes", price:"200"},
        { id:"4", name:"Huerto en tu casa", price:"200"},
        { id:"5", name:"Decoración con productos de tu hogar", price:"200"},
        { id:"6", name:"Diseño Web para Principiantes", price:"200"},
        { id:"7", name:"Comida Mexicana para principiantes", price:"200"},
        { id:"8", name:"Estudio Musical en tu casa", price:"200"},
        { id:"9", name:"Cosecha tus propias frutas y verduras", price:"200"},
        { id:"10", name:"Prepara galletas caseras", price:"200"},
        { id:"11", name:"JavaScript Moderno con ES6", price:"200"},
        { id:"12", name:"100 Recetas de Comida Natural", price:"200"}
      ]
    }
  }
}
</script>
