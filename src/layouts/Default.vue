<template>
  <div :class="`page max-w-full mx-auto ${isDark ? 'theme-dark' : 'theme-light'} bg-invert`">
    <page-header :isDark="isDark"></page-header>

    <main class="content max-w-5xl mx-auto pt-10">
      <slot />
    </main>

    <page-footer></page-footer>
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
    isDark: true
  }),

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
}

.content {
  min-height: calc(100vh - 8rem - 5rem);
}
</style>
