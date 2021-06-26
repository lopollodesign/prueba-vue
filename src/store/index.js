import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      { id: 1, imgSrc: "images/curso1.jpg", name:"HTML5, CSS3, JavaScript para Principiantes", price: 200, finalprice: 15, amount: 1},
      { id: 2, imgSrc: "images/curso2.jpg", name:"Curso de Comida Vegetariana", price: 200, finalprice: 15, amount: 1},
      { id: 3, imgSrc: "images/curso3.jpg", name:"Guitarra para Principiantes", price: 200, finalprice: 15, amount: 1},
      { id: 4, imgSrc: "images/curso4.jpg", name:"Huerto en tu casa", price: 200, finalprice: 15, amount: 1},
      { id: 5, imgSrc: "images/curso5.jpg", name:"Decoración con productos de tu hogar", price: 200, finalprice: 15, amount: 1},
      { id: 6, imgSrc: "images/curso1.jpg", name:"Diseño Web para Principiantes", price: 200, finalprice: 15, amount: 1},
      { id: 7, imgSrc: "images/curso2.jpg", name:"Comida Mexicana para principiantes", price: 200, finalprice: 15, amount: 1},
      { id: 8, imgSrc: "images/curso3.jpg", name:"Estudio Musical en tu casa", price: 200, finalprice: 15, amount: 1},
      { id: 9, imgSrc: "images/curso4.jpg", name:"Cosecha tus propias frutas y verduras", price: 200, finalprice: 15, amount: 1},
      { id: 10, imgSrc: "images/curso5.jpg", name:"Prepara galletas caseras", price: 200, finalprice: 15, amount: 1},
      { id: 11, imgSrc: "images/curso1.jpg", name:"JavaScript Moderno con ES6", price: 200, finalprice: 15, amount: 1},
      { id: 12, imgSrc: "images/curso2.jpg", name:"100 Recetas de Comida Natural", price: 200, finalprice: 15, amount: 1}
    ],
    cart: [],
    activeCourse: {}
  },
  getters: {
    cart: store => store.cart,
    list: store => store.list,
    getItem(id) {
      return this.state.cart.find(item => item.id ===id)
    }
  },
  actions: {
    addToCart(context, course) {
      context.commit('addToCart', course)
    },
    deleteFromCart(context, id) {
      context.commit('deleteFromCart', id)
    },
    emptyCart(context) {
      context.commit('emptyCart')
    },
    setActiveCourse(context, id) {
      context.commit('setActiveCourse', id)
    }
  },
  mutations: {
    addToCart(state, course) {
      if (state.cart.some(c => c.id === course.id)) {
        state.cart = state.cart.map(c => {
          if (c.id === course.id) {
            c.amount++
            return course
          }
          return course
        })
      } else {
        state.cart.push(course)
      }
    },
    setActiveCourse(state, id) {
      state.activeCourse = state.cart.find(c => c.id === id)
    },
    deleteFromCart(state, id) {
      state.cart = state.cart.filter(c => c.id !== id)
    },
    emptyCart(state) {
      state.cart = []
    },
  },
  modules: {
  }
})
