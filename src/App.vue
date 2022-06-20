<template>
  <div id="app">
    <HeaderBarber/>
    <main>
      <ProBarber/>
      <ServicesBarber/>
      

    </main>
    <FooterBarber/>
  </div>
</template>

<script>
import HeaderBarber from './components/HeaderBarber.vue'
import ProBarber from './components/ProBarber.vue'
import ServicesBarber from './components/ServicesBarber.vue'
import FooterBarber from './components/FooterBarber.vue'


export default {
  name: 'App',
  components: {
    HeaderBarber,
    FooterBarber,
    ProBarber,
    ServicesBarber
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

</style>
