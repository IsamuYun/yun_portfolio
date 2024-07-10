import './assets/main.css'
import './assets/input.css'
import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';

import { faUser, faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faUser, faEnvelope, faTerminal);

const app = createApp(App).use(router).mount('#app');

