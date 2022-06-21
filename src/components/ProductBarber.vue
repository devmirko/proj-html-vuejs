<template>
<div id="Products">
    <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:#ffffff;padding:0;"><path d="M0 100 L50 2 L100 100 Z"></path></svg>
    <!-- titolo -->
    <div class="Products_title">
        <span class="sub_title">WE HAVE YOU COVERED</span>
        <h3 class="title">Avada Grooming Products</h3>
    </div>
    <!-- prodotti offerti -->
    <div class="Products_content">
    <CardProduct v-for="(element, i) in Products" :key="i"
    :listObjectProducts = "element"
    />
      
    </div>
    <!-- call to action -->
    <div class="call_to">
        <button class="btn">SHOP OUR PRODUCT RANGE</button>
    </div>
</div>
</template>

<script>
import CardProduct from './CardProduct.vue'

export default {
  name: 'ProductBarber',
   components: {
   CardProduct
  },
  data(){
      return{
        Products: [
        {
          title: "Brush",
          price: "$15,00",
          path: require('../assets/brush_dark-400x400.png')
        },
        {
          title: "Shissors",
          price: "$85,00",
          path: require('../assets/scissors-400x400.png')
        },
        {
          title: "Hot Oil",
          price: "$15,00",
          path: require('../assets/hot_oil_dark-400x400.png')
        },
        {
          title: "Straight Razor",
          price: "$30,00",
          path: require('../assets/straight_razor_dark-400x400.png')
        },


      ],
          
         
    }
},
  

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#Products{
    width: 100%;
    height: 900px;
    background-image: url(../assets/avadabarbers-reviewsbackground.jpg);
    background-size: cover;
    position: relative;

    .Products_title{
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .sub_title{
            font-size: 16px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: #BE9359;
            
        }
        .title{
            font-size: 60px;
            font-family: Georgia, 'Times New Roman', Times, serif;
            color: #999999;
            margin: 20px 0;


        }
        
    }
    .Products_content{
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .call_to{
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;


        .btn{

        background: none;
        padding: 10px 20px;
        color:  #BE9359;
        border: 2px solid  #BE9359;
        font-size: 20px;
        cursor: pointer;

        }

    }

    .fusion-big-triangle-candy{
      position: absolute;
      top: -100px;
    }

    path{
      fill: #121315;

    }
}


</style>