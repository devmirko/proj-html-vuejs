<template>
<div id="card">
    <div class="box_image">
        <img :src="listObjectProducts.path" alt="">
    </div>
    <!-- title -->
    <h3 class="sub_title">{{listObjectProducts.title}}</h3>
    <!-- descrizione -->
    <p>{{listObjectProducts.price}}</p>
</div>
</template>

<script>
export default {
  name: 'CardProduct',
   props: {
    listObjectProducts : Object
   
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

 
    .sub_title{
        font-size: 30px;
        font-family:  Georgia, 'Times New Roman', Times, serif;
        color: #BE9359;
        margin: 20px 0;
            
    }

    p{
        font-size: 20px;
        color: #BE9359;
        text-align: center;
    }
}

@media (max-width: 1300px) {
#card{
    width: 33%;
    margin-bottom: 20px;
    
}


}

@media (max-width: 768px) {

#card{
    width: 80%;
    
}
 
 }


</style>