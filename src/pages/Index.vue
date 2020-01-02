<template>
  <Layout>
    <div class="content-full-height relative flex justify-center items-center">
      <div class="md:text-center sm:text-left font-black text-primary uppercase leading-none w-full">
        <h1 class="text-2xl md:text-5xl">Zach Barnes</h1>

        <h2 class="text-4xl md:text-6xl mb-3 md:mb-0">
          <span class="block md:inline">Full-Stack </span>
          <span class="block md:inline">Web Developer</span>
        </h2>

        <div class="flex flex-col md:flex-row md:justify-between md:items-center leading-tight">
          <p>
            <span class="text-xl pr-2">1.5k</span>
            <span class="text-base">Commits Pushed</span>
          </p>

          <p>
            <span class="text-xl pr-2">24</span>
            <span>Github Projects</span>
          </p>

          <p>
            <span class="text-xl pr-2">103.4k</span>
            <span>Spotify Hours</span>
          </p>
        </div>
      </div>

      <g-link to="/portfolio" class="absolute bottom-0 mb-4 border-4 border-primary leading-loose text-2xl text-primary w-full font-black uppercase tracking-wide text-center sm:block md:hidden">Portfolio</g-link>
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
