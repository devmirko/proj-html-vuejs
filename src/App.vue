<template>
  <div id="app">
    <HeaderBarber/>
    <main>
      <ProBarber/>
      <div class="divisorio">
        <img src="./assets/triangle.svg" alt="">
      </div>
      <ServicesBarber/>
      <ProductBarber/>
      <ShowcaseProduct/>
      <ReviewsBarber/>
      <BlogBarber/>
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
import BlogBarber from './components/BlogBarber.vue'



export default {
  name: 'App',
  components: {
    HeaderBarber,
    FooterBarber,
    ProBarber,
    ServicesBarber,
    ProductBarber,
    ShowcaseProduct,
    ReviewsBarber,
    BlogBarber
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.divisorio{
  position: relative;
  width: 100%;
  height: 100px;

  img{
    position: absolute;
    width: 100%;
    height: 100px;
    top: -100px;
  }
}

</style>
