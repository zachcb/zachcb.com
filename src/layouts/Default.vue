<template>
  <div :class="`page flex flex-col max-w-full mx-auto px-4 ${isDark ? 'theme-dark' : 'theme-light'} ${isBgTransparent ? 'bg-transparent' : 'bg-invert'}`">
    <page-header class="mb-8" :isDark="isDark"></page-header>

    <main class="content-full-height max-w-5xl w-full mx-auto">
      <slot />
    </main>

    <page-footer></page-footer>

    <slot name="background"></slot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { EventBus } from "../Events";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

export default {
  name: "DefaultLayout",

  components: {
    PageHeader,
    PageFooter
  },

  data: () => ({
    isDark: true,
  }),

  computed: {
    isBgTransparent() {
      return false;
      // return this.$route.path.includes("portfolio");
    }
  },

  created() {
    // if (this.$route.path.includes("portfolio")) {
    //   this.isDark = true;
    // }
  },

  mounted() {
    EventBus.$on("TOGGLE_THEME", () => {
      this.isDark = !this.isDark;
    })
  }
}
</script>

<style lang="postcss" scoped>
.page {
	position: relative;
	color: #0E0E0E;
  /* z-index: 1000; */
}
</style>
