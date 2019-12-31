<template>
  <div id="StarFieldCanvas" class="wrapper"></div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Geometry,
  Points,
  PointsMaterial,
  Vector3,
  Math as Math3
} from "three";

import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';

var radius = 6371;
var tilt = 0.41;
var rotationSpeed = 0.02;

export default {
  data: () => ({
    scene: null,
    camera: null,
    renderer: null,
    composer: null,
    starsGeometry: null,
    controls: null,
    screenHeight: window.innerHeight,
    screenWidth: window.innerWidth
  }),

  methods: {
    initialize() {
      this.scene = new Scene();
      this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      this.renderer = new WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      const renderModel = new RenderPass(this.scene, this.camera);
      const effectFilm = new FilmPass( 0.35, 0.75, 2048, false );
      this.composer = new EffectComposer(this.renderer);

      this.composer.addPass(renderModel);
      this.composer.addPass(effectFilm);

      const node = document.getElementById("StarFieldCanvas");
      node.appendChild(this.renderer.domElement);

      this.controls = new FlyControls(this.camera, this.renderer.domElement);
      this.controls.movementSpeed = 1000;
      this.controls.domElement = this.renderer.domElement;
      this.controls.rollSpeed = Math.PI / 24;
      this.controls.autoForward = false;
      this.controls.dragToLook = false;
    },

    createStars() {
      const starsGeometry = new Geometry();

      for (let i = 0; i < 10000; i ++) {
        const star = new Vector3();

        star.x = Math3.randFloatSpread(2000);
        star.y = Math3.randFloatSpread(2000);
        star.z = Math3.randFloatSpread(2000);

        starsGeometry.vertices.push(star);
      }

      const starsMaterials = [
        new PointsMaterial({
          color: 0x888888,
          size: 2,
          sizeAttenuation: false
        }),
        new PointsMaterial({
          color: 0x888888,
          size: 1,
          sizeAttenuation: false
        }),
      ];

      const starField1 = new Points(starsGeometry.slice(0, starsGeometry.length / 2), starsMaterials[0]);
      const starField2 = new Points(starsGeometry.slice(starsGeometry.length / 2 + 1, starsGeometry.length), starsMaterials[1]);
      console.log(starField)
      this.scene.add(starField1);
      this.scene.add(starField2);
    },

    clearScene() {
      while(this.scene.children.length > 0){
        this.scene.remove(this.scene.children[0]);
      }
    },

    onWindowResize() {
				this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;

				this.camera.aspect = this.screenWidth / this.screenHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize( this.screenWidth, this.screenHeight );
				this.composer.setSize( this.screenWidth, this.screenHeight );
			},


    animate() {
      // requestAnimationFrame(this.animate);
      // this.render()
      this.renderer.render(this.scene, this.camera);
    },

    render() {
      // var delta = clock.getDelta();
			// 	this.controls.movementSpeed = 0.33 * d;
			// 	this.controls.update( delta );
      //   this.composer.render( delta );
        this.composer.render()
			}
  },

  async mounted() {
    await this.initialize();
    await this.createStars();
    await this.animate();

    window.addEventListener("resize", this.onWindowResize);

    this.camera.position.z = 5;
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
