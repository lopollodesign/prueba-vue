<template>
  <div class="course">
    <div class="container">
      <div class="container">
        <h1>Course detail:</h1>
      </div>
      {{ $route.params.id }}
      <div>
        {{ activeItem }}
      </div>
      <div>
        {{ course }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Course',

  data() {
    return {
      course: {}
    }
  },
  computed: {
    activeItem() {
      return this.$store.state.list.find(c => c.id === 1)
    }
  },
  created() {
    this.course = this.$store.state.list.find(c => c.id === this.$route.params.id)
  }
}
</script>
