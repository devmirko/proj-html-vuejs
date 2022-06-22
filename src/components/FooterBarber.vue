<template>
<div id="footer">
  <!-- parte superiore  -->
  <div class="footer_top">
    <!-- colonna sinistra shop -->
    <div class="col_left">
      <img src="../assets/avadabarbers_footer_shop_image-300x234.png" alt="">
      <button class="btn">SHOP OUR RANGE NOW</button>
    </div>
    <!-- colonna centrale social -->
    <div class="col_center">
      <!-- logo -->
      <a href="#"><img src="../assets/avadabarbers-logo-x2-200x70.png" alt=""></a>
      <!-- indirizzo -->
      <ContactBarber/>
      <!-- social -->
      <SocialBarber/>

    </div>
    <!-- colonna destra appuntamento -->
    <div class="col_right">
      <img src="../assets/avadabarbers_footer_appointment_image-300x234.png" alt="">
      <button class="btn">BOOK YOUR APPOINTMENT</button>
    </div>
  </div>
  <!-- parte inferiore -->
  <div class="footer_bottom">
    <p id="copyright">@Copyright 2012-2020| Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
    <div class="arrow_top">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-angle-up" />
      </a>
    </div>
  </div>

</div>
</template>

<script>
import ContactBarber from './ContactBarber.vue'
import SocialBarber from './SocialBarber.vue'


export default {
  name: 'FooterBarber',
  components: {
    ContactBarber,
    SocialBarber
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#footer{
  width: 100%;
  min-height: 600px;

  .footer_top{
    min-height: 480px;
    background-color: #121314;
    display: flex;
    justify-content: center;

    .col_left{
      width: 20%;
      min-height: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      

    }

    .col_center{
      width: 20%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      a img{
        margin-top: 20px;
      }
    }

    .col_right{
      width: 20%;
      min-height: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

  
    }
  }

  .footer_bottom{
    height: 120px;
    background-color: #161718;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    #copyright{
      color: #4A494A;
    }

    .arrow_top{
      width: 30px;
      height: 10px;
      background-color: #4A494A;
      padding: 10px;
      position: absolute;
      bottom: 0;
      right: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      a{
        color: #fff;
        text-decoration: none;
      }
    }

  }
}

// classi generali
.btn{
          background: none;
          padding: 10px 20px;
          color:  #BE9359;
          border: 1px solid  #BE9359;
          font-size: 20px;
          cursor: pointer;

          }



@media (max-width: 1300px) {
  #footer .footer_top{
    background-color: #121314;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  }

  #footer .footer_top .col_left{
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;

    img{
      width: 50%;
    }
  }

  #footer .footer_top .col_center{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    order: 1;

  }


  #footer .footer_top .col_right{
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;

  img{
      width: 50%;
    }

  }


}


@media (max-width: 768px) {

  #footer .footer_top .col_center{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    order: 1;

    a {
     display: none;
    }

   

  }



}

</style>
