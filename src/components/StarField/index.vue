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

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';

export default {
  data: () => ({
    scene: null,
    camera: null,
    renderer: null,
    starsGeometry: null,
  }),

  methods: {
    initialize() {
      this.scene = new Scene();
      this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      this.renderer = new WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      const renderModel = new RenderPass(this.scene, this.camera);
      const effectFilm = new FilmPass( 0.35, 0.75, 2048, false );
      const composer = new EffectComposer(this.renderer);

      composer.addPass(renderModel);
      composer.addPass(effectFilm);

      const node = document.getElementById("StarFieldCanvas");
      node.appendChild(this.renderer.domElement);
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

      const starsMaterial = new PointsMaterial({
        color: 0xffffff,
        size: 2,
        sizeAttenuation: false
      });
      const starField = new Points(starsGeometry, starsMaterial);
      this.scene.add(starField);

    },

    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    }
  },

  async mounted() {
    await this.initialize();
    await this.createStars();
    await this.animate();
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
