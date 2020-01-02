<template>
  <header
    :class="[{
    }, 'header md:block top-0 left-0 w-full h-auto md:h-32 text-primary z-10']"
  >
    <div class="w-full relative flex justify-between items-center max-w-5xl mx-auto py-2 md:py-0 z-50">
      <div class="flex justify-between items-center hidden md:block">
        <g-link
          to="/"
          class="logo block relative px-2 text-6xl font-black uppercase italic leading-loose"
        >
          <span class="block">ZA</span>
          <span class="block">CH</span>
        </g-link>
      </div>

      <g-link
        to="/"
        class="md:hidden block logo relative px-2 text-4xl font-black uppercase italic leading-loose"
      >
        <span>Z</span>
      </g-link>

      <div>
        <nav class="flex text-2xl font-black uppercase text-center">
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

        <div
          :class="[{
            'bg-yellow-200 border-2 border-yellow-200': !isDark,
            'border-2 border-primary': isDark
          },'relative flex justify-between items-center rounded-full p-1 text-xl text-center cursor-pointer']"
        >
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

          <button
            @click="toggleMenu"
            class="block md:hidden focus:outline-none"
          >
            <font-awesome
              :icon="['fa', 'chevron-circle-left']"
              class="mx-auto text-3xl"
            />
          </button>
        </div>
      </div>

      <div
        :class="[{
          'bg-invert': isActive,
          'hidden': !isActive,
          'opacity-0': !isActive,
          'opacity-100': isActive
        }, 'content absolute top-0 left-0 h-full w-full max-w-5xl mx-auto flex justify-center md:justify-between items-center z-10']"
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

        <div
          :class="[{
            'bg-yellow-200 border-2 border-yellow-200': !isDark,
            'border-2 border-primary': isDark
          },'relative flex justify-between items-center rounded-full p-1 text-xl text-center cursor-pointer hidden md:block']"
        >
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
      </div>
    </div>
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
