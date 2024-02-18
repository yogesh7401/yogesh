<template>
  <div :class="this.$store.state.theme">
    <div class="min-h-screen">
      <Template></Template>
    </div>
  </div>
</template>

<script>
import Template from './components/Template.vue'

export default {
  name: 'App',
  components : {
    Template
  }
}
</script>

<style>
body {
  font-family: 'Nunito', sans-serif;
}
</style>
