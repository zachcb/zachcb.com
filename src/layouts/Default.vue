<template>
  <div class="page max-w-full mx-auto">
    <page-header></page-header>

    <slot/>
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

export default {
  name: "DefaultLayout",

  components: {
    PageHeader
  }
}
</script>

<style lang="postcss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;

  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
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
	background-color: #1e272e;
	height: 100%;
}
</style>
