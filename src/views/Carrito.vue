<template>
  <div class="carrito">
    <header id="header" class="header">
      <div class="container">
        <div class="row">
          <div class="four columns">
            <img src="../assets/logo.jpg" id="logo">
          </div>
          <div class="two columns u-pull-right">
            <ul>
              <li class="submenu">
                <img src="../assets/cart.png" id="img-carrito">
                <ShoppingList/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <div id="hero">
      <div class="container">
        <div class="row">
          <div class="six columns">
            <div class="contenido-hero">
              <h2>Aprende algo nuevo</h2>
              <p>Todos los cursos a $15</p>
              <form action="#" id="busqueda" method="post" class="formulario">
                <input class="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador">
                <input type="submit" id="submit-buscador" class="submit-buscador">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="barra">
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

    <div id="lista-cursos" class="container">
      <div class="lista-cursos_list">
        <CourseCard title="Titulo" :id="1" :price="200" :finalprice="15" @addCourse="addToList"/>
        <CourseCard title="Titulo" :id="2" :price="200" :finalprice="15" @addCourse="addToList"/>
        <CourseCard title="Titulo" :id="3" :price="200" :finalprice="15" @addCourse="addToList"/>
      </div>
    </div>

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
import CourseCard from '@/components/CourseCard.vue'
import ShoppingList from '@/components/ShoppingList.vue'

export default {
  name: 'Home',
  components: {
    CourseCard,
    ShoppingList
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    addToList(text, id) {
      this.list.push({courseID: id, name: text})
      console.log(this.list)
    },
  }
}
</script>