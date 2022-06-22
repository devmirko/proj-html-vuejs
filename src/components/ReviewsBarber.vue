<template>
<div id="Reviews">
    <!-- titolo -->
    <div class="Reviews_title">
        <span class="sub_title">WHAT PEOPLE SAY</span>
        <h3 class="title">Reviews</h3>
    </div>
    <!-- recensioni -->
    <div class="Reviews_content">
    <CardReviews v-for="(element, i) in Reviews" :key="i"
    :listObjectReviews = "element"
    />
      
    </div>
    <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:#ffffff;padding:0;"><path d="M0 100 L50 2 L100 100 Z"></path></svg>
</div>
</template>

<script>
import CardReviews from './CardReviews.vue'

export default {
  name: 'ReviewsBarber',
   components: {
   CardReviews
  },
  data(){
      return{
        Reviews: [
        {
          name: "Jonh Doe",
          text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi, maxime asperiores' ",
          path: require('../assets/avadabarbers-trimcut-gallery6-400x400.jpg')
        },
        {
          name: "Pete Jones",
          text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi, maxime asperiores' ",
          path: require('../assets/avadabarbers-trimcut-gallery7-400x402.jpg')
        },
        {
          name: "Mark Wilson",
          text: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi, maxime asperiores' ",
          path: require('../assets/avadabarbers-trimcut-gallery3-400x402.jpg')
        },


      ],
          
         
    }
},
  

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#Reviews{
    width: 100%;
    min-height: 800px;
    background-color: white;
    position: relative;
   

    .Reviews_title{
        width: 100%;
        min-height: 200px;
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
    .Reviews_content{
        width: 100%;
        min-height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fusion-big-triangle-candy{
      position: absolute;
      bottom: -100px;
      transform: rotate(180deg);
    }

    path{
      fill: white
    }

   
}

@media (max-width: 768px) {

#Reviews{

  width: 100%;
  // height: 1800px;
  background-color: white;
  position: relative;


}

#Reviews .Reviews_content{

  width: 100%;
  // height: 800px;
  display: block;
 

}




}

@media (max-width: 1300px) {
#Reviews .Reviews_title .title{
    font-size: 30px;
}

}


</style>