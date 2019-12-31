<template>
  <header class="h-32 text-primary">
    <div class="content flex max-w-5xl h-full mx-auto justify-between items-center">
      <div class="flex justify-between items-center">
        <g-link to="/" class="logo relative px-2 text-6xl font-black uppercase italic leading-loose">
          <span class="block">ZA</span>
          <span class="block">CH</span>
        </g-link>
      </div>

      <nav class="nav text-2xl font-black uppercase">
        <g-link to="/portfolio" class="inline-block px-4">
          <span class="border-transparent border-b-4">Portfolio</span>
        </g-link>
        <g-link to="/resume" class="inline-block px-4">
          <span class="border-transparent border-b-4">Resume</span>
        </g-link>
        <g-link to="/posts" class="inline-block px-4">
          <span class="border-transparent border-b-4">Words</span>
        </g-link>
      </nav>
      <div :class="[{
          'bg-yellow-200 border-2 border-yellow-200': !isDark,
          'border-2 border-primary': isDark
        },'relative flex justify-between items-center rounded-full p-1 text-xl text-center cursor-pointer']">
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
  </header>
</template>

<script>
import { EventBus } from "../../Events";

export default {
  props: {
    isDark: {
      default: true,
      type: Boolean
    }
  },

  methods: {
    toggleTheme() {
      EventBus.$emit("TOGGLE_THEME");
    }
  }
}
</script>

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

/* .moon {
  top: 0;
  left: -50px;
  transform: translateY(50%);
}

.sun {
  top: 0;
  right: -50px;
  transform: translateY(50%);
} */
</style>
