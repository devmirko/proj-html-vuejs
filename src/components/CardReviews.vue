<template>
<div id="card">
    <!-- descrizione -->
    <p>{{listObjectReviews.text}}</p>
    <!-- immagine -->
    <div class="box_image">
        <img :src="listObjectReviews.path" alt="">
    </div>
    <!-- nome -->
    <h3 class="sub_title">{{listObjectReviews.name}}</h3>
</div>
</template>

<script>
export default {
  name: 'CardReviews',
   props: {
   listObjectReviews : Object
   
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
        width: 120px;
        margin: 20px 0;

        img{
            max-width: 100%;
            border-radius: 50%;
            
        }
    }
    .sub_title{
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #BE9359;
        
            
    }

    p{
        font-size: 16px;
        color: #999999;
        text-align: center;
        padding: 0 30px;
    }
}


</style>