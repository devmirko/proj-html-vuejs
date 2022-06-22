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
    width: calc( 100% /  3 );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
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
        margin: 20px 0;
       
            
    }

    p{
        font-size: 20px;
        color:#999999;
        text-align: center;
    }
}

@media (max-width: 1300px) {

  #card{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin: 0 auto;
    position: relative;
    margin-bottom: 30px;
  }

  #card  .sub_title{
    position: absolute;
    top: 0;
    right: 20px;
     
  }

  #card  p{
    text-align: end;
  }
 

 }


 @media (max-width: 768px) {

  #card{
    width: 80%;
    display: block;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin: 0 auto;
    position: relative;
    margin-bottom: 30px;
    
  }

  #card .box_image{
        width: 80%;
        margin: 0 auto;
        min-height: 400px;
        
        

        img{
           width: 100%;
           height: 100%;
            
        }

  }    

  #card  .sub_title{
    position: static;
    text-align: center;
     
  }

  #card  p{
    text-align: center;
  }
 

 }


</style>