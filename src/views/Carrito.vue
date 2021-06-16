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
                {{ this.addedList.length }}
                <img src="../assets/cart.png" id="img-carrito">
                <ShoppingList :list="this.addedList" @deleteCourse="deleteToList"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <div v-show="false" id="hero">
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

    <div id="lista-cursos" class="container">
      <div class="lista-cursos_list">
        <CourseCard v-for="course in list" :key="course.id" :title="course.name" :id="course.id" :price="course.price" :finalprice="course.finalprice" @addCourse="addToList"/>
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
  name: 'Carrito',
  components: {
    CourseCard,
    ShoppingList
  },
  data() {
    return {
      list: [
        { id: 1, name:"HTML5, CSS3, JavaScript para Principiantes", price: 200, finalprice: 15},
        { id: 2, name:"Curso de Comida Vegetariana", price: 200, finalprice: 15},
        { id: 3, name:"Guitarra para Principiantes", price: 200, finalprice: 15},
        { id: 4, name:"Huerto en tu casa", price: 200, finalprice: 15},
        { id: 5, name:"Decoración con productos de tu hogar", price: 200, finalprice: 15},
        { id: 6, name:"Diseño Web para Principiantes", price: 200, finalprice: 15},
        { id: 7, name:"Comida Mexicana para principiantes", price: 200, finalprice: 15},
        { id: 8, name:"Estudio Musical en tu casa", price: 200, finalprice: 15},
        { id: 9, name:"Cosecha tus propias frutas y verduras", price: 200, finalprice: 15},
        { id: 10, name:"Prepara galletas caseras", price: 200, finalprice: 15},
        { id: 11, name:"JavaScript Moderno con ES6", price: 200, finalprice: 15},
        { id: 12, name:"100 Recetas de Comida Natural", price: 200, finalprice: 15}
      ],
      addedList: []
    }
  },
  methods: {
    addToList(text, id, finalprice) {

      const addedCourse = {
        id: id,
        name: text,
        finalprice: finalprice,
        amount: 1
      }

      if (this.addedList.some(cuorse => cuorse.id === id)) {
        this.addedList = this.addedList.map(course => {
          if (course.id === id) {
            course.amount++
            return course
          } else return course
        })
      } else this.addedList.push(addedCourse)

    },
    deleteToList(id) {
      this.addedList = this.addedList.filter(course => course.id !== id)
    }
  }
}
</script>