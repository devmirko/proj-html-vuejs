 <template>
 <div id="container_button">
    <Slide :isOpen="this.open" :width= "2560">
        <ul id="nav_menu">
            <li v-for="(item, i) in listObject" :key="i" >
            <a href="">{{item.text}}</a>
            </li>
        </ul>
    </Slide>
 </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: 'BurgherMenu',
  props: {
    listObject: Array,
   
 },
  data() {
    return {
      open: false
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    }
  },
  components: {
    Slide
  }
};
</script>

<style  lang="scss">
#container_button{
    position: relative;


.bm-burger-button {
      position: absolute;
      width: 26px;
      height: 20px;
      left:  0;
      top: 0;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: white;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: white;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 980px; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: black; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      overflow-y: hidden;
      padding-top: 0; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      color: #b8b7ad;
      font-size: 20px;
      margin: 0;
      
    }
    .bm-item-list  {
      text-decoration: none;
      

         #nav_menu{
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            list-style: none;
            align-items: center;

            li{
                margin-bottom: 20px;

                a{
                    color: white;
                    text-decoration: none;
                    font-size: 25px;

                     &:hover{
                    color: #BE9359;
                    }

                }
            }
         }
     
     
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }









}

 















</style>