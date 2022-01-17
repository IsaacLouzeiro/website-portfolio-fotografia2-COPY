import { createApp } from 'vue'
import App from './App.vue'
import{ init } from '@emailjs/browser';
init("user_eyR7ZHv40PxSrTW34KZgt");

import AosVue from "aos-vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).use(AosVue).component("font-awesome-icon", FontAwesomeIcon).mount('#app')

import "bootstrap/dist/js/bootstrap.js";