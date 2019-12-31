<template>
  <Layout>
    <template v-slot:background>
      <star-field class="canvas"></star-field>
    </template>
  </Layout>
</template>

<script>
import StarField from "../components/StarField";

export default {
  metaInfo: {
    title: 'Portfolio'
  },

  components: {
    StarField
  }
}
</script>

<style lang="postcss" scoped>
.canvas {
  z-index: -1;
}
</style>
