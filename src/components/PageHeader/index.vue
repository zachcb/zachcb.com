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
                Posts
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
      <div class="w-full relative flex justify-between items-center max-w-5xl mx-auto py-3 md:py-0 z-50">
        <div class="flex justify-between items-center hidden md:block">
          <g-link
            to="/"
            class="logo block relative px-2 font-black uppercase italic"
          >
            <span class="block">ZA</span>
            <span class="block">CH</span>
          </g-link>
        </div>

        <div class="flex justify-between items-center">
          <nav class="hidden sm:flex text-2xl font-black uppercase text-center">
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
            },'relative flex justify-between items-center rounded-full p-1 text-xl text-center cursor-pointer w-12 h-12']"
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
      </div>
    </template>
  </header>
</template>

<script>
import { EventBus } from "../../Events";
import { debounce } from "../../../utils";

export default {
  props: {
    isDark: {
      default: true,
      type: Boolean,
    },
  },

  data: () => ({
    isMenuActive: false,
    windowWidth: process.isClient ? window.innerWidth : 0,
  }),

  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
  },

  methods: {
    toggleTheme() {
      EventBus.$emit("TOGGLE_THEME");
    },

    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },

  created() {
    const debouncedResize = debounce(() => {
      this.windowWidth = process.isClient ? window.innerWidth : 0;
    }, 100);

    process.isClient && window.addEventListener("resize", debouncedResize);
  },
};
</script>

<style lang="postcss" scoped>
.header {
  position: relative;

  /* Sets full width regardless of padding of container */
  @media screen and (max-width: 767px) {
    width: 100vw;

    left: 50%;
    right: 50%;

    margin-left: -50vw;
    margin-right: -50vw;
  }

  transition: background-color 0.3s;
}

.menu-switch {
  transition: all 0.3s;
}
.activators {
  width: 100vw;
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
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 0px;
    background: transparent;
  }

  &.is-active {

  }
}

.nav {
  padding-right: 50px;
}

.logo {
  font-size: responsive 2.5rem 4rem;
  line-height: responsive 2.2rem 3rem;

  @media screen and (max-width: 767px){
    font-size: 2.25rem;
  }

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
