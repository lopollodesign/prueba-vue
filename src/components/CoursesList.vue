<template>
  <div id="lista-cursos" class="container">

    <input type="text" v-model="guille">

    {{ guille }}

    <div class="lista-cursos_list">
      <CourseCard v-for="course in list" :key="course.id" :course="course" v-bind="$attrs"/>
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue'

export default {
  name: 'CoursesList',
  components: {
    CourseCard,
  },
  props: {
    list: Array,
  },
  data () {
    return {
      guille: ''
    }
  },
  watch: {
    guille() {
      this.$emit('filtering', this.guille)
    }
  }
}
</script>
