<template>
  <div class="carrito">
    <div id="hero">
      <div class="container">
        <div class="row">
          <div class="six columns">
            <div class="contenido-hero">
              <h2>Aprende algo nuevo</h2>
              <p>Encuentra tu curso ideal</p>
              <form action="#" id="busqueda" method="post" class="formulario">
                <input v-model="nameFilter" class="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador">
                <input type="submit" id="submit-buscador" class="submit-buscador">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="false" class="barra">
      <div class="container">
        <div class="row">
          <div class="four columns icono icono1">
            <p>20,000 Cursos en línea <br>
              Explora los temas más recientes</p>
          </div>
          <div class="four columns icono icono2">
            <p>Instructores Expertos <br>
              Aprende con distintos estilos</p>
          </div>
          <div class="four columns icono icono3">
            <p>Acceso de por vida <br>
              Aprende a tu ritmo</p>
          </div>
        </div>
      </div>

    </div>
    <h1 id="encabezado" class="encabezado">Cursos En Línea</h1>

    <CoursesList :list="list" @filtering="filterList"/>

    <footer id="footer" class="footer">
      <div class="container">
        <div class="row">
          <div class="four columns">
            <nav id="principal" class="menu">
              <a class="enlace" href="#">Para tu Negocio</a>
              <a class="enlace" href="#">Conviertete en Instructor</a>
              <a class="enlace" href="#">Aplicaciones Móviles</a>
              <a class="enlace" href="#">Soporte</a>
              <a class="enlace" href="#">Temas</a>
            </nav>
          </div>
          <div class="four columns">
            <nav id="secundaria" class="menu">
              <a class="enlace" href="#">¿Quienes Somos?</a>
              <a class="enlace" href="#">Empleo</a>
              <a class="enlace" href="#">Blog</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import CoursesList from '../components/CoursesList.vue'

export default {
  name: 'Carrito',
  components: {
    CoursesList
  },
  data() {
    return {
      nameFilter: '',
    }
  },
  computed: {
    filteredList () {
      if (!this.nameFilter) {
        return this.nameFilter
      }
      return this.list.filter(course => course.name.includes(this.nameFilter))
    },
  },
  methods: {
    filterList(text) {
      this.list = this.list.filter(course => course.name.includes(text))
    }
  }
}
</script>