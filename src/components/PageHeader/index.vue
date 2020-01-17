<template>
  <header
    class="header flex top-0 left-0 md:h-32 w-full text-primary"
  >
    <template v-if="isMobile">
      <div
        :class="[{
          'is-active': isMenuActive,
          'is-dark': isDark
        }, 'mobile-header-content']"
      >
        <div class="flex">
          <div class="activators w-1/2 flex justify-between items-center">
            <g-link
              to="/"
              class="logo md:hidden block relative text-4xl font-black uppercase italic leading-loose z-20"
            >
              <span class="px-3">Z</span>
            </g-link>

            <div
              class="light-switch relative flex justify-between items-center rounded-full text-2xl w-12 h-12 z-20"
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

            <div
              class="menu-switch relative flex justify-center items-center rounded-full text-xl text-center w-12 h-12 z-20"
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
          </div>


          <div
            :class="[{
              'is-active': isMenuActive
            }, 'mobile-nav-container w-1/2 flex justify-start md:justify-between items-center z-10 bg-invert']"
          >
            <nav class="nav flex flex-row text-2xl font-black uppercase text-center">
              <g-link
                to="/portfolio"
                class="inline-block px-2"
              >
                Portfolio
              </g-link>
              <g-link
                to="/resume"
                class="inline-block px-2"
              >
                Resume
              </g-link>
              <g-link
                to="/posts"
                class="inline-block px-2"
              >
                Words
              </g-link>
              <g-link
                to="/contact"
                class="inline-block px-2"
              >
                Contact
              </g-link>
            </nav>
          </div>
        </div>
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
    isMenuActive: false,
    isMobile: true,
  }),

  methods: {
    toggleTheme() {
      EventBus.$emit("TOGGLE_THEME");
    },

    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style lang="postcss" scoped>
.header {
  position: relative;

  width: 100vw;

  left: 50%;
  right: 50%;

  margin-left: -50vw;
  margin-right: -50vw;

  transition: background-color 0.3s;
}

.menu-switch {
  transition: all 0.3s;
}
.activators {
  /* display: flex */
  width: 100vw;
  /* max-width: 100%; */
}

.mobile-header-content {
  display: block;
  position: relative;
  transition: transform 0.3s;

  /* width: 200%; */

  &.is-active {
    transform: translateX(calc(-50% + 25px));

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;

      width: 75px;
      height: 100%;

      z-index: 10;

      pointer-events: none;
      background-color: inherit;
      background: linear-gradient(
        to right,
        rgba(210, 218, 226, 0) 0%,
        rgba(210, 218, 226, 1) 100%
      );
    }

    &.is-dark {
      &::after {
        background: linear-gradient(
          to right,
          rgba(30, 39, 46, 0) 0%,
          rgba(30, 39, 46, 1) 100%
        );
      }
    }
  }
}


.mobile-nav-container {
  position: relative;
  width: calc(100vw - 50px);
  right: 0;
  /* max-width: 100%; */
  transition: opacity 0.3s;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0px;
    background: transparent;
  }

  &.is-active {

  }
}

.nav {
  padding-right: 15px;
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
