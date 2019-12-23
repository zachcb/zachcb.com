<template>
  <div class="page max-w-lg mx-auto">
    <header class="page-header">
      <div class="page-header-content">
        <div class="logo">
          <span>
            ZA
          </span>
          <span>
            CH
          </span>
        </div>
        <nav class="page-header-nav">
          <g-link class="nav-item" href="/portfolio">Portfolio</g-link>
          <g-link class="nav-item" href="/blog">Blog</g-link>
          <g-link class="nav-item" href="/resume">Resume</g-link>
        </nav>
      </div>
    </header>

    <slime-canvas></slime-canvas>

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
import SlimeCanvas from "../components/SlimeCanvas";

export default {
  name: "DefaultLayout",

  components: {
    SlimeCanvas
  }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

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

.page-header {
	background-color: transparent;

	& * {
		z-index: 1000;
	}
}

.page-header-content {
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 100px;
	max-width: 1200px;
	margin: 0 auto;
}

.nav-item {
	padding: 0px 15px;
	font-size: 24px;
	font-weight: bold;
	text-transform: uppercase;
	line-height: 100px;
}

.logo {
	font-size: 4rem;
	font-weight: black;
	font-style: italic;
	line-height: 3rem;

  margin-top: 50px;
	padding: 0px 15px;

	& span {
		display: block;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
	}
}
</style>
