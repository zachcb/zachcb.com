<template>
  <header class="h-32 text-primary">
    <div class="content flex max-w-6xl h-full mx-auto justify-between items-center">
      <g-link class="logo px-2 text-6xl font-black uppercase italic leading-loose" href="/">
        <span class="block">ZA</span>
        <span class="block">CH</span>
      </g-link>

      <nav class="nav text-3xl font-black uppercase">
        <g-link class="inline-block px-4" href="/portfolio">
          <span class="border-transparent border-b-4">Portfolio</span>
        </g-link>
        <g-link class="inline-block px-4" href="/blog">
          <span class="border-transparent border-b-4">Blog</span>
        </g-link>
        <g-link class="inline-block px-4" href="/resume">
          <span class="border-transparent border-b-4">Resume</span>
        </g-link>
      </nav>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.logo {
	line-height: 3rem;

	& span {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
	}
}

.nav span {
  transition: border-color 0.3s;
}

.nav a {
  &:hover span {
    border-color: var(--color-primary);
  }
}
</style>
