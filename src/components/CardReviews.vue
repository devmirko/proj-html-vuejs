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
        font-size: 18px;
        color: #999999;
        text-align: center;
        padding: 0 30px;
        line-height: 1,5;
    }
}

@media (max-width: 768px) {

#card{

  width: 100%;
  display: block;
  margin-bottom: 20px;
  padding: 0;
  position: relative;
  

  .sub_title{
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #BE9359;
        position: absolute;
        bottom: 0;
        right: 10px;
        
        
    }

    .box_image{
        width: 100px;

        img{
            max-width: 100%;
            border-radius: 50%;
            margin-left: 10px;
            
        }
    }

}


}

@media (max-width: 562px) {

#card{

  width: 100%;
  display: block;
  margin-bottom: 30px;
  padding: 0;
  position: relative;
  text-align: center;
  

  .sub_title{
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #BE9359;
        position: static;
        margin-top: 10px;
        
        
    }

    .box_image{
        width: 100px;
        display: none;

        img{
            max-width: 100%;
            border-radius: 50%;
            margin-left: 10px;
            
        }
    }

   
  

}






}


</style>