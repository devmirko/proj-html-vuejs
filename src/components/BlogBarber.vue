<template>
<div id="Blog">
    <!-- titolo -->
    <div class="Blog_title">
        <span class="sub_title">TALES FROM THE BARBER SHOP</span>
        <h3 class="title">Recent Blog Posts</h3>
    </div>
    <!-- recensioni -->
    <div class="Blog_content">
    <CardPosts v-for="(element, i) in Posts" :key="i"
    :listObjectPosts = "element"
    /> 
    </div>
     <!-- call to action -->
    <div class="call_to">
        <button class="btn">READ MORE FROM OUR BLOG</button>
    </div> 
</div>
</template>

<script>
import CardPosts from './CardPosts.vue'

export default {
  name: 'BlogBarber',
   components: {
   CardPosts
  },
  data(){
      return{
        Posts : [
        {
          title: "Avada Barbers Now Open",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi",
          path: require('../assets/avadabarbers-second-blog-700x441.jpg')
        },
        {
          title: "Chosing The Right Barber",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi",
          path: require('../assets/avadabarbers-choosing-blog-700x441.jpg')
        },
        {
          title: "Quick Service Guide",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem officia cupiditate excepturi",
          path: require('../assets/avadabarbers-ourservice-blog-700x441.jpg')
        },


      ],
          
         
    }
},
  

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#Blog{
    width: 100%;
    height: 1000px;
    background-color: #F5F5F5;
   

    .Blog_title{
        width: 100%;
        height: 400px;
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
    .Blog_content{
        width: 100%;
        height: 400px;
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

   
}


</style>