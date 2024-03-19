import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './store';

const vuetify = createVuetify();
const app = createApp(App)
app.config.devtools = true;
app.use(router)
app.use(vuetify)
app.use(store)
app.mount('#app')
