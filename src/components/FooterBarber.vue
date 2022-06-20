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
    </div>
    <!-- colonna destra appuntamento -->
    <div class="col_right">
      <img src="../assets/avadabarbers_footer_appointment_image-300x234.png" alt="">
      <button class="btn">BOOK YOUR APPOINTMENT</button>
    </div>
  </div>
  <!-- parte inferiore -->
  <div class="footer_bottom"></div>

</div>
</template>

<script>
import ContactBarber from './ContactBarber.vue'


export default {
  name: 'FooterBarber',
  components: {
    ContactBarber
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#footer{
  width: 100%;
  height: 600px;

  .footer_top{
    height: 480px;
    background-color: #121314;
    display: flex;
    justify-content: center;

    .col_left{
      width: 20%;
      height: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      

    }

    .col_center{
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      a img{
        margin-top: 20px;
      }
    }

    .col_right{
      width: 20%;
      height: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

  
    }
  }

  .footer_bottom{
    height: 120px;
    background-color: #161718;

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

</style>
