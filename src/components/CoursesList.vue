<template lang='pug'>
#lista-cursos.container
  input(type="text" v-model="nameFilter")
  input(type="text" v-model="newFilter")
  div {{ nameFilter }}
  div {{ newFilter }}
  .lista-cursos_list
    CourseCard(v-for="course in list" :key="course.id" :course="course")
</template>

<script>
import { mapGetters } from 'vuex'
import CourseCard from '@/components/CourseCard.vue'

export default {
  name: 'CoursesList',
  components: {
    CourseCard,
  },
  computed: {
    ...mapGetters([ 'list' ])
  },
  data () {
    return {
      nameFilter: 'hello',
      newFilter: ''
    }
  },
  watch: {
    nameFilter() {
      this.$emit('filtering', this.nameFilter)
    }
  }
}
</script>
