<template>
  <button @click="buttonClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  methods: {
    buttonClick() {
      this.$emit('click')
    }
  }
}
</script>
