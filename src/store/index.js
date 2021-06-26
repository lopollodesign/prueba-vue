import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [1, 2, 3]
  },
  getters: {
    cart: store => store.cart
  },
  actions: {
    addToCart(context, number) {
      context.commit('addToCart', number)
    }
  },
  mutations: {
    addToCart(state, number) {
      state.cart.push(number)
      console.log(state.cart)
    }
  },
  modules: {
  }
})
