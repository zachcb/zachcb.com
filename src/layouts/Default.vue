<template>
  <div class="page max-w-full mx-auto">
    <page-header></page-header>

    <main class="content max-w-6xl mx-auto">
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
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

export default {
  name: "DefaultLayout",

  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="postcss" scoped>
.page {
	position: relative;
	color: #0E0E0E;

	height: 100%;
}

.content {
  min-height: calc(100vh - 8rem - 3rem);
}
</style>
