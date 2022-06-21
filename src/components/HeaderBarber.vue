<template>
<div id="header">
  <!-- parte superiore header (navbar) -->
  <section id="nav">
    <div class="container">
      <!-- logo -->
      <a href="" class="box_logo"><img src="../assets/avadabarbers-logo-x1.png" alt=""></a>
      <!-- navbar -->
      <div id="nav_bar">
        <a href=""><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
        <BurgherMenu :listObject ="navArray"/>
      </div>
    </div>
  </section>

  <!-- parte inferiore header -->
  <HeroBarber/>
 
 


</div>
</template>

<script>
import HeroBarber from './HeroBarber.vue'
import BurgherMenu from './BurgherMenu.vue'

export default {
  name: 'HeaderBarber',
  components: {
    HeroBarber,
    BurgherMenu
    
    
  },
  data(){
      return{
        navArray: [
        {
          text: "Home",
          url: "#hero",
          active: true,
        },
        {
          text: "About us",
          url: "#Reviews",
          active: false,
        },
        {
          text: "Services",
          url: "#service",
          active: false,
        },
        {
          text: "Shop",
          url: "#Products",
          active: false,
        },
        {
          text: "Our Team",
          url: "#pro_barber",
          active: false,
        },
        {
          text: "Blog",
          url: "#Blog",
          active: false,
        },
        {
          text: "Contact Us",
          url: "#footer",
          active: false,
        },
      ],
          
         
        }
  },
  methods: {
  toggle() {
      this.isOpen = !this.isOpen
     }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header{
    width: 100%;
    min-height: 980px;
    background-image: url(../assets/avadabarbers-homepage-hero-bg.jpg);
    background-position: center;
    background-size: cover;
    position: relative;

    #nav{
      height: 120px;
      display: flex;
      justify-content: center;

      .container{
       width: 60%;
       display: flex;
       justify-content: space-between;
       align-items: center;
       position: relative;


      #nav_bar{
        display: flex;
        list-style-type: none;

           a{
          font-size: 20px;
          text-decoration: none;
          color: white;
          margin-right: 20px;
          

          }

        }
        

      }
      

        
    }
      

  }
    

</style>
