<template>
<div id="pro_barber">
    <div class="container">
        <span class="sub_title">AWARD WINNING</span>
        <h3 class="title">Pro Barbers</h3>
        <button class="btn">MEET YOUR NEW BARBER</button>
    </div>
    
</div>
</template>

<script>
export default {
  name: 'ProBarber',
  

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#pro_barber{
    width: 100%;
    min-height: 600px;
    background-image: url(../assets/avadabarbers-about-introbackground.jpg);
    display: flex;
    justify-content: center;
    position: relative;

    .container{
        width: 100%;
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


}

.btn{

    background: none;
    padding: 10px 20px;
    color:  #BE9359;
    border: 2px solid  #BE9359;
    font-size: 16px;
    cursor: pointer;

    }


@media (max-width: 1300px) {
#pro_barber .container .title{
    font-size: 30px;
}

}



</style>
