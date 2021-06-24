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
                <ShoppingList :list="this.addedList" @deleteCourse="deleteToList" @emptyCart="emptyCart"/>
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

    <CoursesList :list="list" @addCourse="addToList" @filtering="hello"/>

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
import CoursesList from '@/components/CoursesList.vue'
import ShoppingList from '@/components/ShoppingList.vue'

export default {
  name: 'Carrito',
  components: {
    CoursesList,
    ShoppingList
  },
  data() {
    return {
      list: [
        { id: 1, imgSrc: "images/curso1.jpg", name:"HTML5, CSS3, JavaScript para Principiantes", price: 200, finalprice: 15},
        { id: 2, imgSrc: "images/curso2.jpg", name:"Curso de Comida Vegetariana", price: 200, finalprice: 15},
        { id: 3, imgSrc: "images/curso3.jpg", name:"Guitarra para Principiantes", price: 200, finalprice: 15},
        { id: 4, imgSrc: "images/curso4.jpg", name:"Huerto en tu casa", price: 200, finalprice: 15},
        { id: 5, imgSrc: "images/curso5.jpg", name:"Decoración con productos de tu hogar", price: 200, finalprice: 15},
        { id: 6, imgSrc: "images/curso1.jpg", name:"Diseño Web para Principiantes", price: 200, finalprice: 15},
        { id: 7, imgSrc: "images/curso2.jpg", name:"Comida Mexicana para principiantes", price: 200, finalprice: 15},
        { id: 8, imgSrc: "images/curso3.jpg", name:"Estudio Musical en tu casa", price: 200, finalprice: 15},
        { id: 9, imgSrc: "images/curso4.jpg", name:"Cosecha tus propias frutas y verduras", price: 200, finalprice: 15},
        { id: 10, imgSrc: "images/curso5.jpg", name:"Prepara galletas caseras", price: 200, finalprice: 15},
        { id: 11, imgSrc: "images/curso1.jpg", name:"JavaScript Moderno con ES6", price: 200, finalprice: 15},
        { id: 12, imgSrc: "images/curso2.jpg", name:"100 Recetas de Comida Natural", price: 200, finalprice: 15}
      ],
      addedList: [],
      nameFilter: '',
    }
  },
  computed: {
    filteredList () {
      if (!this.nameFilter) {
        return this.nameFilter
      }
      return this.list.filter(course => course.name.includes(this.nameFilter))
    }
  },
  methods: {
    addToList(text, id, finalprice, imgSrc) {
      if (this.addedList.some(cuorse => cuorse.id === id)) {
        this.addedList = this.addedList.map(course => {
          if (course.id === id) {
            course.amount++
            return course
          }
          return course
        })
      } else this.addedList.push({
        id: id,
        name: text,
        finalprice: finalprice,
        imgSrc: imgSrc,
        amount: 1
      })
    },
    deleteToList(id) {
      this.addedList = this.addedList.filter(course => course.id !== id)
    },
    emptyCart() {
      this.addedList = []
    },
    hello(text) {
      this.list = this.list.filter(course => course.name.includes(text))
    }
  }
}
</script>