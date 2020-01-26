<template>
  <div id="Gallery" />
</template>

<script>
import Normalize from "normalize-wheel";

import Canvas from "./canvas";

class App {
  constructor() {
    this.images = [
      "https://images.unsplash.com/photo-1552922280-27619b672183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768",
      "https://images.unsplash.com/photo-1569503689347-a5dbdaca7c69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768",
      "https://images.unsplash.com/photo-1575651607650-5a5c39edce9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768",
      "https://images.unsplash.com/photo-1575905283836-a741eb65a192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768",
      "https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&h=768",
    ];

    this.mouse = {
      x: 0,
      y: 0,
    };

    this.canvas = new Canvas({
      images: this.images,
    });

    this.addEventListeners();

    this.update();
  }

  onTouchDown(event) {
    event.stopPropagation();

    this.mouse.x = event.touches ? event.touches[0].clientX : event.clientX;
    this.mouse.y = event.touches ? event.touches[0].clientY : event.clientY;

    if (this.canvas) {
      this.canvas.onTouchDown(this.mouse);
    }
  }

  onTouchMove(event) {
    event.stopPropagation();

    this.mouse.x = event.touches ? event.touches[0].clientX : event.clientX;
    this.mouse.y = event.touches ? event.touches[0].clientY : event.clientY;

    if (this.canvas) {
      this.canvas.onTouchMove(this.mouse);
    }
  }

  onTouchUp(event) {
    event.stopPropagation();

    this.mouse.x = event.changedTouches
      ? event.changedTouches[0].clientX
      : event.clientX;
    this.mouse.y = event.changedTouches
      ? event.changedTouches[0].clientY
      : event.clientY;

    if (this.canvas) {
      this.canvas.onTouchUp(this.mouse);
    }
  }

  onWheel(event) {
    const normalized = Normalize(event);
    const speed = normalized.pixelY * 0.2;

    if (this.canvas) {
      this.canvas.onWheel(speed);
    }
  }

  addEventListeners() {
    if (window) {
      window.addEventListener("mousewheel", this.onWheel.bind(this));
      window.addEventListener("wheel", this.onWheel.bind(this));

      window.addEventListener("mousedown", this.onTouchDown.bind(this));
      window.addEventListener("mousemove", this.onTouchMove.bind(this));
      window.addEventListener("mouseup", this.onTouchUp.bind(this));

      window.addEventListener("touchstart", this.onTouchDown.bind(this));
      window.addEventListener("touchmove", this.onTouchMove.bind(this));
      window.addEventListener("touchend", this.onTouchUp.bind(this));
    }
  }

  update() {
    if (this.canvas) {
      this.canvas.update();
    }

    window.requestAnimationFrame(this.update.bind(this));
  }
}


export default {
  mounted() {
    new App();
  },
};
</script>
