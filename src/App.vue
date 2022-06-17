<template>
  <div id="app">
    <HeaderBarber/>
    <!-- parte con il main -->
    <FooterBarber/>
   
  </div>
</template>

<script>
import HeaderBarber from './components/HeaderBarber.vue'
import FooterBarber from './components/FooterBarber.vue'


export default {
  name: 'App',
  components: {
    HeaderBarber,
    FooterBarber
  }
}
</script>

<style lang="scss">

</style>
