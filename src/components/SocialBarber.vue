<template>
<div>
    <h2>FOLLOW US</h2>
    <ul id="social">
        <li>
            <a href="">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </a>
        </li>
         <li>
            <a href="">
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
        </li>
         <li>
            <a href="">
                <font-awesome-icon icon="fa-brands fa-youtube" />
            </a>
        </li>
         <li>
            <a href="">
               <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
        </li>
        
    

    </ul>
</div>
</template>

<script>
export default {
  name: 'SocialBarber',
  

}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2{
    margin-top: 20px;
    color: #BE9359;
}
#social{
    margin-top: 20px;
    list-style-type: none;
    display: flex;
    justify-content: center;

    li{
        margin-right: 10px;

        a{
            text-decoration: none;
            color: #fff;
        }
        
    }
}



</style>
