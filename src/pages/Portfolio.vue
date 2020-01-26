<template>
  <Layout>
    <!-- <template v-slot:background>
      <star-field class="canvas"></star-field>
    </template> -->
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Portfolio",
  },

  components: {

  },
};
</script>

<style lang="postcss" scoped>
.canvas {
  z-index: -1;
}

.gallery >>> canvas {
  width: 1000px !important;
}
</style>
