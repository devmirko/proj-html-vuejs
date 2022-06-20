<template>
<ul id="Contact">
    <li v-for="(item, i) in Contact" :key="i">{{item}}</li>
 

</ul>
</template>

<script>
export default {
  name: 'ContactBarber',
  data(){
      return{
        Contact: [
          "Avada Barbers",
          "123 New York Street",
          "New York City",
          "info@yourwebsite.com",
          "+1(555)555-1212"
      ],
    }
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#Contact{
  list-style-type: none;
  margin-top: 20px;

  li{
    color: #4A494A;
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
  }
}


</style>
