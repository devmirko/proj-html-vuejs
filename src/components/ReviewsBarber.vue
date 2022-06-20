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
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi, maxime asperiores reprehenderit voluptatum tempore, animi eos modi quas ex adipisci libero debitis omnis reiciendis optio quidem?",
          path: require('../assets/avadabarbers-trimcut-gallery6-400x400.jpg')
        },
        {
          name: "Pete Jones",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi, maxime asperiores reprehenderit voluptatum tempore, animi eos modi quas ex adipisci libero debitis omnis reiciendis optio quidem?",
          path: require('../assets/avadabarbers-trimcut-gallery7-400x402.jpg')
        },
        {
          name: "Mark Wilson",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi, maxime asperiores reprehenderit voluptatum tempore, animi eos modi quas ex adipisci libero debitis omnis reiciendis optio quidem?",
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
    height: 600px;
    background-color: white;
   

    .Reviews_title{
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
    .Reviews_content{
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

   
}


</style>