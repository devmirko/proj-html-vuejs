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
      <!-- menu a scomparsa -->
      <div id="hamburgher_menu">
        <ul>
          <li v-for="(item, i) in navArray" :key="i">
          <a href="#">{{item.text}}</a>
          </li>
          
        </ul>
        <a href="" class="close"><font-awesome-icon icon="fa-solid fa-xmark" /></a>
      </div>
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
  data(){
      return{
        navArray: [
        {
          text: "Home",
          url: "#",
          active: true,
        },
        {
          text: "About us",
          url: "#",
          active: false,
        },
        {
          text: "Services",
          url: "#",
          active: false,
        },
        {
          text: "Shop",
          url: "#",
          active: false,
        },
        {
          text: "Our Team",
          url: "#",
          active: false,
        },
        {
          text: "Blog",
          url: "#",
          active: false,
        },
        {
          text: "Contact Us",
          url: "#",
          active: false,
        },
      ],
          
         
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
      #hamburgher_menu{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 10;
        

        
        

        ul{
          display: flex;
          flex-direction: column;
          align-items: center;
          list-style-type: none;

          

          li{
            margin-bottom: 20px;

            a{
            color: white;
            text-decoration: none;
            font-size: 25px;

            &:hover{
              color: #BE9359;
            }
            }

          } 
        }
        .close{
          display: block;
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 30px;
          text-decoration: none;
        }
      }
      

      }
    
    }
}

</style>
