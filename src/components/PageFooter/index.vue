<template>
  <footer class="bottom-0 h-12 w-full">
    <div class="flex justify-between items-center h-full max-w-6xl mx-auto text-base text-primary">
      <nav>
        <g-link to="/" class="pr-4">Home</g-link>
        <g-link to="/portfolio" class="pr-4">Portfolio</g-link>
        <g-link to="/blog" class="pr-4">Blog</g-link>
        <g-link to="/resume" class="pr-4">Resume</g-link>
      </nav>

      <p class="flex justify-between items-center">
        <span class="text-2xl pr-1">©</span>
        <span class="pr-1">
          {{ new Date().getFullYear() }}
        </span>
        <span>
          - Zach Barnes
        </span>
      </p>
    </div>
  </footer>
</template>
