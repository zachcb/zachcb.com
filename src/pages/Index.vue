<template>
  <Layout>
    <div class="boxes absolute top-0 left-0 w-full h-full">
      <div class="box bg-gray-800 m-4 mx-auto" v-for="index in 300" :key="index"></div>
    </div>

    <div class="jumbo relative flex justify-center items-center">
      <div class="text-center font-black text-primary uppercase leading-none">
        <p class="text-5xl">Zach Barnes</p>
        <p class="text-6xl">Full-Stack Web Developer</p>
        <p class="flex text-xl justify-between items-center">
          <span>15 Commits Pushed</span>
          <span>24 Github Projects</span>
          <span>23 Spotify Hours</span>
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import gsap from "gsap";

export default {
  metaInfo: {
    title: 'Portfolio for Zach Barnes'
  },

  mounted() {
    gsap.to(".box", 1, {
      scale: 0.01,
      y: 100,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay:1,
      stagger: {
        amount: 0.5,
        grid: "auto",
        from: "center"
      }
    });
  }
}
</script>

<style lang="postcss" scoped>
.jumbo {
  min-height: calc(100vh - 8rem - 3rem);
}

.boxes {
  /* display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%; */
  /* display: grid;

  grid-template-columns: repeat(62, 1fr); */

  z-index: -1;
}

.box {
  /* display: inline-flex; */
  /* position: relative; */

  /* width: 10px;
  height: 10px; */


  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}
</style>
