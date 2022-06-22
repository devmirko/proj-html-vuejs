<template>
<div id="container">
    <div class="box">
        <!-- immagine prodotto -->
        <div class="col_left">
            <img src="../assets/shaving_butter-400x400.png" alt="">
        </div>
        <!-- descrizione prodotto -->
        <div class="col_right">
            <div class="box_text">
                <span class="sub_title">THIS MONTHS FEATURED PRODUCT</span>
                <h3 class="title">Shaving Butter</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, ut dolores corporis omnis a, sint dolorem in ex repellat repudiandae fugiat eos iste ad! Necessitatibus nihil pariatur ipsam sit quam?</p>
                <button class="btn">BUY NOW</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>


export default {
  name: 'ShowcaseProduct',
   components: {
   
  },
 
  

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container{
    width: 100%;
    min-height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: white;
    

    .box{
        width: 66%;
        min-height: 450px;
        background-color: #121413;
        border-top: 5px solid #BE9359;
        position: absolute;
        top: -40px;
        display: flex;

        .col_left{
            width: 33%;
            background-image: url(../assets/avadabarbers-cta-background.jpg);
            background-position: center;
            position: relative;

            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 100%;

            }
        }

        .col_right{
            width: 66%;
            padding: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
           

           .box_text{
            width: 80%;


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

            p{
            font-size: 18px;
            color: #686868;
            margin-bottom: 20px;
            }

            .btn{
            background: none;
            padding: 10px 20px;
            color:  #BE9359;
            border: 2px solid  #BE9359;
            font-size: 16px;
            cursor: pointer;

            }

           }

            

        }
    }
}

@media (max-width: 1300px) {
#container{
    width: 100%;
    min-height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: white;

  

}

#container .box{
        width: 100%;
        min-height: 100%;
        background-color: #121413;
        border-top: 5px solid #BE9359;
        position: static;
        display: flex;

        .col_right .box_text .title{
        font-size: 30px;
    }
}

}

@media (max-width: 768px) {

#container .box .col_left{
    display: none;
    
}
 
 }

</style>