<template>
  <header
    class="header flex justify-between items-center top-0 left-0 w-full h-auto md:h-32 text-primary"
  >
    <template v-if="isMobile">
      <g-link
        to="/"
        class="md:hidden block logo relative text-4xl font-black uppercase italic leading-loose z-20"
      >
        <span class="px-3">Z</span>
      </g-link>

      <div class="relative flex justify-between items-center rounded-full text-2xl w-12 h-12 z-20">
        <font-awesome
          v-if="isDark"
          :icon="['fa', 'moon']"
          class="moon mx-auto"
          @click="toggleTheme"
        />

        <font-awesome
          v-if="!isDark"
          :icon="['fa', 'sun']"
          class="sun mx-auto"
          @click="toggleTheme"
        />
      </div>

      <div
        class="relative flex justify-center items-center rounded-full text-xl text-center w-12 h-12 z-20"
      >
        <button
          @click="toggleMenu"
          class="block md:hidden focus:outline-none w-full h-full"
        >
          <font-awesome
            :icon="['fa', 'chevron-circle-left']"
            class="mx-auto text-3xl"
          />
        </button>
      </div>

      <div
        :class="[{
          'opacity-100': isActive,
          'opacity-0': !isActive
        }, 'content absolute top-0 left-0 h-full w-full max-w-5xl mx-auto flex justify-center md:justify-between items-center z-10 bg-invert']"
      >
        <nav class="nav flex flex-col text-2xl font-black uppercase text-center">
          <g-link
            to="/portfolio"
            class="inline-block px-4"
          >
            <span class="border-transparent border-b-4">Portfolio</span>
          </g-link>
          <g-link
            to="/resume"
            class="inline-block px-4"
          >
            <span class="border-transparent border-b-4">Resume</span>
          </g-link>
          <g-link
            to="/posts"
            class="inline-block px-4"
          >
            <span class="border-transparent border-b-4">Words</span>
          </g-link>
        </nav>
      </div>
    </template>

    <template v-else>
      <!--  -->
    </template>
  </header>
</template>

<script>
import { EventBus } from "../../Events";

export default {
  props: {
    isDark: {
      default: true,
      type: Boolean,
    },
  },

  data: () => ({
    isActive: false,
    isMobile: true,
  }),

  methods: {
    toggleTheme() {
      EventBus.$emit("TOGGLE_THEME");
    },

    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="postcss" scoped>
.header {
  transition: background-color 0.3s;
}

.content {
  transition: opacity 0.3s;
}

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
