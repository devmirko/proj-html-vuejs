<template>
<div id="service">
    <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:#ffffff;padding:0;"><path d="M0 100 L50 2 L100 100 Z"></path></svg>
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
    background-color: white;
    position: relative;
    box-shadow: 1px -100px 50px 10px rgba(0, 0, 0, 0.502);

    .service_title{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        .sub_title{
            font-size: 16px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: #BE9359;
            z-index: 2000;
            
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
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;


        .btn{

        background: none;
        padding: 10px 20px;
        color:  #BE9359;
        border: 2px solid  #BE9359;
        font-size: 16px;
        cursor: pointer;

        }

    }

    .fusion-big-triangle-candy{
      position: absolute;
      top: -100px;

    }
   
}


</style>
