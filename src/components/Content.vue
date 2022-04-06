<template lang='pug'>
.content
  div
    slot(name="title")
  slot
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style scoped>
  .content {
    padding: 20px;
    background-color: #ddd;
    color: #000;
  }
</style>
