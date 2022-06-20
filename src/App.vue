<template>
  <div id="app">
    <HeaderBarber/>
    <main>
      <ProBarber/>
      <ServicesBarber/>
      <ProductBarber/>
      <ShowcaseProduct/>
      <ReviewsBarber/>
    </main>
    <FooterBarber/>
  </div>
</template>

<script>
import HeaderBarber from './components/HeaderBarber.vue'
import ProBarber from './components/ProBarber.vue'
import ServicesBarber from './components/ServicesBarber.vue'
import ProductBarber from './components/ProductBarber.vue'
import FooterBarber from './components/FooterBarber.vue'
import ShowcaseProduct from './components/ShowcaseProduct.vue'
import ReviewsBarber from './components/ReviewsBarber.vue'



export default {
  name: 'App',
  components: {
    HeaderBarber,
    FooterBarber,
    ProBarber,
    ServicesBarber,
    ProductBarber,
    ShowcaseProduct,
    ReviewsBarber
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

</style>
