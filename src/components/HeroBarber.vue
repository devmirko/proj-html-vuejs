<template>
<section id="hero">
    <div class="container">
        <!-- parte di sinistra con testo -->
        <div class="box_text_left">
            <div class="box_text">
                <h2>Barber Shop</h2>
                <div class="line"></div>
                <h4>The Pinnacle of Male Grooming</h4>
                <button class="btn">LEARN MORE</button>
            </div>  
        </div>
        <!-- parte di destra con immagine -->
        <div class="box_img">
            <img src="../assets/avadabarbers_hero_focalmirror-600x825.png" alt="questa e una immagine">
        </div>

    </div>
</section>
</template>

<script>
export default {
  name: 'HeroBarber',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#hero{
    width: 100%;
    height: 860px;
    display: flex;
    justify-content: center;

    .container{
        width: 80%;
        display: flex;

        .box_text_left{
            width: 50%;
            position: relative;
           
            .box_text{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                h2{
                font-family:Georgia, 'Times New Roman', Times, serif;
                font-size: 60px;
                color: #DDDDDD;
                margin-bottom: 40px;
            }
            .line{
                width: 240px;
                height: 5px;
                background-color: #BE9359;
                margin-bottom: 40px;
            }
            h4{
               font-family:Verdana, Geneva, Tahoma, sans-serif;
               font-size: 18px;
               color: #51504F;
               margin-bottom: 40px;
               
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

        .box_img{
            width: 50%;
            position: relative;

            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                

            }
        }
    }

}

@media (max-width: 1200px) {
.box_img {
display: none;
}
}

@media (max-width: 768px) {

#hero .container .box_text_left{
    width: 100%;
}    

.box_text{
    text-align: center;
}

}

</style>
