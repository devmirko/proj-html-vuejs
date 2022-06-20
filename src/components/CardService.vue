<template>
<div id="card">
    <div class="box_image">
        <img :src="listObjectService.path" alt="">
    </div>
    <!-- title -->
    <h3 class="sub_title">{{listObjectService.title}}</h3>
    <!-- descrizione -->
    <p>{{listObjectService.text}}</p>
</div>
</template>

<script>
export default {
  name: 'CardService',
   props: {
    listObjectService : Object
   
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
        width: 50px;
        height: 100px;

        img{
            width: 100%;
            height: 100%;
        }
    }
    .sub_title{
        font-size: 30px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #BE9359;
        margin: 20px 0;
            
    }

    p{
        font-size: 16px;
        color: #999999;
        text-align: center;
    }
}


</style>