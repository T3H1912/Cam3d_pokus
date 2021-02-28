<template>
  <div id="cam">
    <video id = "myVideo" class="hide" autoplay></video>
  </div>  
</template>
<script>
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

export default {
  name: 'Three',
  static() {
    return {
      c:null,
      w:Number,
      h:Number,
      wc:640,
      hc:480,
      idata:null,
      data:null,
      r:null,
      g:null,
      b:null,
      index:null,
      video:null,
      cube: null,
      ambientLight: new THREE.AmbientLight(),
      spotLight: new THREE.SpotLight(),
      cubes:Array,
      mesh:new THREE.Mesh(),
      renderer: new THREE.WebGLRenderer(),
      scene: new THREE.Scene(),
      camera: null,
      canvas:null,
      colors:null,
      size:5
    }
  },
  methods: {
    init() {
    let req = { audio: false, video: true }
    navigator.mediaDevices.getUserMedia(req).then(stream => {
        this.video = document.querySelector("video");
        this.video.srcObject = stream;
        this.video.play()
      })
      .catch(err => {
        console.log(err.name + ": " + err.message)
      })

      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(35,window.innerWidth / window.innerHeight,0.1,1000)
      
      const nrOfCubesX = this.wc / this.size
      const nrOfCubesY = this.hc / this.size
      const z = 1/this.size*1200
      this.camera.position.set(nrOfCubesX/2, nrOfCubesY/2, z);
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(this.renderer.domElement)
      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      controls.target.set(nrOfCubesX/2, nrOfCubesY/2, 0);
      controls.update()
       
      
      this.geometry = new THREE.BoxGeometry(1, 1, 1)
      this.cubes = []
      this.colors = new Map()
      for(let i = 0; i < 1256; i++) {
        this.c = new THREE.Color(`rgb(${i}, ${i}, ${i})`)
        this.colors.set(i, this.c)
      }
      this.color = new THREE.Color(`rgb(0, 255, 140)`)
      for(let xC = 0; xC < nrOfCubesX; xC++) {
        for(let yC = 0; yC < nrOfCubesY; yC++) {
           this.material = new THREE.MeshBasicMaterial({ color: this.color })
           this.cube = new THREE.Mesh(this.geometry, this.material)
           this.cube.position.set(xC,yC,0)
           this.scene.add(this.cube)
           this.cubes.push(this.cube)
           
        }
      }
      this.ambientLight = new THREE.AmbientLight(0x777777)
      this.scene.add(this.ambientLight)
      this.spotLight = new THREE.SpotLight(0xbbbbbb)
      this.spotLight.position.set(0, nrOfCubesY, 100)
      this.spotLight.castShadow = true
      this.scene.add(this.spotLight)

      },
      draw(){
      this.w = this.video.videoWidth 
      this.h = this.video.videoHeight
      this.canvas.width = this.wc
      this.canvas.height = this.hc

      this.ctx.drawImage(this.video,0,0,this.w,this.h)
    
      this.idata = this.ctx.getImageData(0,0,640,480)
      this.data = this.idata.data;

      this.cubes.forEach(cube => {
        let x = cube.position.x
        let y = cube.position.y
        let col = this.Image(this.data,this.w-x*this.size, this.h-y*this.size)
        this.c = Math.round(col)
        cube.material.color = this.colors.get(this.c)
        let z = col/10 + 0.01
        cube.scale.z = z
        cube.position.z = z / 2
      })
    },
    Image(data, x0, y0){ 
        
      for(let x = x0; x < x0 + this.size; x += 1) {
        for(let y = y0; y < y0 + this.size; y += 1) {
          this.index = (x + this.w*y) * 4
          this.r = data[this.index]
          this.g = data[this.index + 1]
          this.b = data[this.index + 2]
        }
      }
      return this.r + this.g + this.b
    },
    animate() {
      requestAnimationFrame(this.animate)
      
      this.draw()
      
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted() {
    this.video = document.getElementById('myVideo')
    this.canvas = document.createElement("Canvas");
    this.ctx = this.canvas.getContext("2d");
    this.init()
    this.animate()
    
  }
}
</script>

<style lang="scss">
  body, html {
  margin: 0;
}


.hide {
display: none;
}
</style>