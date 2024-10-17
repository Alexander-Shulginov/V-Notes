import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { doubleTapDirective } from './directives/doubleTapDirective'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.directive('on-double-tap', doubleTapDirective)
app.mount('#app')
