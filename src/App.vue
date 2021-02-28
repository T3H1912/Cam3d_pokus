<template>
  <div id="app">
    <Three/>
    <!-- <LoadingApp/> -->
    <!-- <CanvasMalovani/> -->
    <!-- <Pokus3Babylon />  -->
    <!-- <Camera v-on:getpicture="this.getpicture"/> -->
    <!-- <GalleryCamera/> -->
    <!-- <Three/> -->
    <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
      <router-view />
    </transition>
  </div>
</template>

<script> 
// import LoadingApp from '@/components/LoadingApp.vue'
// import BG from '@/components/BG.vue'
// import CanvasMalovani from '@/components/CanvasMalovani.vue'
// import Pokus2 from '@/components/Pokus2.vue'
// import Pokus3Babylon from '@/components/Pokus3Babylon.vue'
// import Camera from '@/components/Camera.vue'
//import Audio from '@/components/pokusy/Audio.vue'
//import VilageBabylon from './components/VilageBabylon.vue'
import Three from './components/Three.vue'

export default {
  name: "App",

  components: {
    //LoadBabylonFirstApperThree,
    //VilageBabylon,
    // CanvasMalovani
    // Pokus2
    //Pokus3Babylon
    // Camera,
    // GalleryCamera,
    //Audio,
    Three
  
  }
  // na ukladání picture to GalleryCamera.vue
  // methods:{
  //   getpicture(){
  //     // let ratio = (window.innerHeight > window.innerWidth) ? 16/9 : 9/16 
  //     const picture = document.querySelector("canvas")

  //     const ctx = picture.getContext("2d")
  //     ctx.imageSmoothingEnabled = true
  //     ctx.imageSmoothingQuality = "high"
  //     ctx.drawImage(document.querySelector("video"),0,0, picture.width, picture.height)
  //   }
   }


</script>


<style lang="scss">
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }
</style>
  
<style scoped>


@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; /*vue transition animation*/
 
  html,body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      /*background-color: black;*/
  }
  #app{
    position: absolute;
    width: 100%;
    height: 100vh;
    /*background-color: black;*/
    z-index: -1;
  }
   /* body
   {background: #fff;}    */

.nav{
  position: relative;
  z-index: 0;
  transform: rotate(-90deg);
  
}
.nav.navigace {
  transform: rotate(360deg);
  position: absolute;
  bottom: 600px;
  left: 100px;
}
#routa{
  padding: 10px;
  margin: 10px;
  text-decoration: none;
}
</style>