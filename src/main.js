// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import "./styles/main.css";
import DefaultLayout from '~/layouts/Default.vue';

config.autoAddCss = false;
library.add(faMoon, faSun, faChevronCircleLeft, faChevronCircleRight);

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Karla:400,700,700i|Open+Sans:600,800,800i&display=swap"
  });

  head.meta.push({
    name: "theme-color",
    content: "#05c46b"
  })

  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
}
