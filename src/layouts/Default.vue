<template>
  <div class="page max-w-full mx-auto">
    <page-header></page-header>

    <main class="max-w-6xl mx-auto">
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

<style lang="postcss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;

  background-color: #1e272e;
}

html, body {
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	height: 100%;
}

a {
	color: inherit;
	text-decoration: unset;
}

.page {
	position: relative;
	color: #0E0E0E;

	height: 100%;
}
</style>
