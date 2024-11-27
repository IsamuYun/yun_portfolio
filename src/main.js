import './assets/main.css'
import './assets/input.css'
import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';

import { faUser, faEnvelope, faTerminal, faScroll, faCube, faInfo, faSignHanging } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

library.add(faUser, faEnvelope, faTerminal, faScroll, faCube, faInfo, faSignHanging);

const app = createApp(App).use(router).mount('#app');

