<template>
<div id="service">
    <!-- titolo -->
    <div class="service_title">
        <span class="sub_title">MENS GROOMIN</span>
        <h3 class="title">SERVICES</h3>
    </div>
    <!-- servizi offerti -->
    <div class="service_content">
    <CardService v-for="(element, i) in Service" :key="i"
    :listObjectService = "element"
    />
      
    </div>
    <!-- call to action -->
    <div class="call_to">
        <button class="btn">READ ABOUT OUR SERVICES</button>
    </div>
</div>
</template>

<script>
import CardService from './CardService.vue'

export default {
  name: 'ServicesBarber',
   components: {
   CardService
  },
  data(){
      return{
        Service: [
        {
          title: "Trim & Cut",
          text: "Avadas Barbers are expert in the lickety split trim and hair cut. Quick but careful and ridiculousy good looking",
          path: require('../assets/avadabarbers-trimcut-icon-before.png')
        },
        {
          title: "Wash & Dry",
          text: "Avadas Barbers are expert in the lickety split trim and hair cut. Quick but careful and ridiculousy good looking",
          path: require('../assets/avadabarbers-washndry-icon.png')
        },
        {
          title: "Beard Tidy",
          text: "Avadas Barbers are expert in the lickety split trim and hair cut. Quick but careful and ridiculousy good looking",
          path: require('../assets/avadabarbers-beardtrim-icon.png')
        },

      ],
          
         
    }
},
  

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#service{
    width: 100%;
    height: 900px;

    .service_title{
        width: 100%;
        height: 200px;
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
    .service_content{
        width: 100%;
        height: 500px;
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
