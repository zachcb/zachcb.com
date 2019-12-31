<template>
  <Layout>
    <!-- <gallery class="gallery" /> -->

    <template v-slot:background>
      <star-field class="canvas"></star-field>
    </template>
  </Layout>
</template>

<script>
import StarField from "../components/StarField";
// import Gallery from "../components/Gallery";

export default {
  metaInfo: {
    title: 'Portfolio'
  },

  components: {
    StarField,
    // Gallery
  }
}
</script>

<style lang="postcss" scoped>
.canvas {
  z-index: -1;
}

.gallery >>> canvas {
  width: 1000px !important;
}
</style>
