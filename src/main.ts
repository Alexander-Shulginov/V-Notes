import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useThemeStore } from './store/themeStore'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const themeStore = useThemeStore()
themeStore.loadColorTheme()

app.mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.remove('no-transition')
    }, 100)

    if (navigator.userAgent.includes('iPhone')) {
        const headElem = document.querySelector('[name=viewport')
        if (headElem) {
            headElem.setAttribute(
                'content',
                'width=device-width, initial-scale=1, maximum-scale=1 interactive-widget=resizes-content'
            )
        }
    }
})
