<template>
  <header id="header" class="header" style="position: sticky; z-index: 10; top: 0">
    <div class="container">
      <div class="row">
        <div class="four columns">
          <img src="../assets/logo.jpg" id="logo">
        </div>
        <div class="two columns u-pull-right">
          <ul>
            <li class="submenu">
              {{ cart.length }}
              <img src="../assets/cart.png" id="img-carrito">
              <ShoppingList/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters} from 'vuex'
import ShoppingList from "./ShoppingList";

export default {
  name: 'Header',
  components: {
    ShoppingList
  },
  computed: {
    ...mapGetters(['cart'])
  },
}
</script>
