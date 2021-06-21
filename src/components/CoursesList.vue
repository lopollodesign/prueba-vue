<template>
  <div id="lista-cursos" class="container">
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
  }
}
</script>
