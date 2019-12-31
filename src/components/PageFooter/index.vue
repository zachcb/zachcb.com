<template>
  <footer class="bottom-0 h-20 w-full hidden md:block">
    <div class="flex justify-between items-center h-full max-w-5xl mx-auto text-base text-primary ">
      <nav>
        <g-link to="/" class="pr-4 underline">Home</g-link>
        <g-link to="/portfolio" class="pr-4 underline">Portfolio</g-link>
        <g-link to="/resume" class="pr-4 underline">Resume</g-link>
        <g-link to="/blog" class="pr-4 underline">Words</g-link>

        <span class="pr-4">|</span>

        <g-link
          href="https://twitter.com/ZachForYou"
          target="_blank"
          class="pr-4 underline"
        >Twitter</g-link>
        <g-link
          href="https://github.com/zachcb"
          target="_blank"
          class="pr-4 underline"
        >Github</g-link>
        <g-link
          href="https://stackoverflow.com/users/2394442/zach"
          target="_blank"
          class="pr-4 underline"
        >Stack Overflow</g-link>
        <g-link
          href="https://www.linkedin.com/in/zachcb/"
          target="_blank"
          class="pr-4 underline"
        >LinkedIn</g-link>
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
