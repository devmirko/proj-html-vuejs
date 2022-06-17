<template>
<div id="header">
  <!-- parte superiore header (navbar) -->
  <section id="nav">
    <div class="container">
      <!-- logo -->
      <a href="" class="box_logo"><img src="../assets/avadabarbers-logo-x1.png" alt=""></a>
      <!-- navbar -->
      <ul id="nav_bar">
        <li><a href=""><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a></li>
        <li><a href=""><font-awesome-icon icon="fa-solid fa-bars" /></a></li>
      </ul>
    </div>
  </section>
  <!-- parte inferiore header -->
  <HeroBarber/>
 
 


</div>
</template>

<script>
import HeroBarber from './HeroBarber.vue'

export default {
  name: 'HeaderBarber',
  components: {
    HeroBarber
    
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header{
    width: 100%;
    min-height: 980px;
    background-image: url(../assets/avadabarbers-homepage-hero-bg.jpg);

    #nav{
      height: 120px;
      display: flex;
      justify-content: center;

      .container{
       width: 60%;
       display: flex;
       justify-content: space-between;
       align-items: center;


      #nav_bar{
        display: flex;
        list-style-type: none;

        li{
          margin-left: 20px;

           a{
          font-size: 20px;
          text-decoration: none;
          color: white;
          

        }

        }

      }
      

      }
    
    }
}

</style>
