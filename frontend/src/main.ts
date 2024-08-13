import './assets/main.css'
import 'flag-icons/css/flag-icons.min.css';
import 'v-phone-input/dist/v-phone-input.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// fontawesome
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons"

import { createVPhoneInput } from 'v-phone-input';

const vuetify = createVuetify({
    components,
    directives,
  })
const vPhoneInput = createVPhoneInput({
    countryIconMode: 'svg',
});
const app = createApp(App)

app.use(router).use(vuetify).use(vPhoneInput);
app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

app.mount('#app')
