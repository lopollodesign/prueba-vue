<template>
  <div id="lista-cursos" class="container">
    <input type="text" v-model="nameFilter">
    {{ nameFilter }}
    <div class="lista-cursos_list">
      <CourseCard v-for="course in list" :key="course.id" :course="course"/>
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
      nameFilter: ''
    }
  },
  watch: {
    nameFilter() {
      this.$emit('filtering', this.nameFilter)
    }
  }
}
</script>
