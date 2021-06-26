import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {
    cart: store => store.cart
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
