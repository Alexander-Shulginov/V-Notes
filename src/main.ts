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
})

// const vh = window.innerHeight * 0.01
// document.documentElement.style.setProperty('--vh', `${vh}px`)

// window.addEventListener('resize', () => {
//     const vh = window.innerHeight * 0.01
//     document.documentElement.style.setProperty('--vh', `${vh}px`)
// })
