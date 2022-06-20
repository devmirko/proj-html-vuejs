<template>
<div id="card">
    <div class="box_image">
        <img :src="listObjectPosts.path" alt="">
    </div>
    <!-- title -->
    <h3 class="sub_title">{{listObjectPosts.title}}</h3>
    <!-- descrizione -->
    <p>{{listObjectPosts.text}}</p>
</div>
</template>

<script>
export default {
  name: 'CardPosts',
   props: {
    listObjectPosts : Object
   
 },
 

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#card{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    .box_image{
        width: 400px;
        height: 252px;
        
        

        img{
           width: 100%;
           height: 100%;
            
        }
    }

 
    .sub_title{
        font-size: 30px;
        font-family:  Georgia, 'Times New Roman', Times, serif;
        color: #BE9359;
       
            
    }

    p{
        font-size: 20px;
        color: #BE9359;
        text-align: center;
    }
}


</style>