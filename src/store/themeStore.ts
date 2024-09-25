import { defineStore } from 'pinia'

export type colorScheme = 'dark' | 'light'

export const useThemeStore = defineStore('themeStore', {
    state: (): { activeScheme: colorScheme } => {
        return {
            activeScheme: 'dark'
        }
    },

    actions: {
        setColorScheme(name: colorScheme): void {
            this.activeScheme = name
            document.body.setAttribute('data-color-scheme', name)
        },

        loadColorScheme() {
            this.userColorSchemeIsDark
                ? this.setColorScheme('dark')
                : this.setColorScheme('light')
        },

        toggleColorScheme() {
            this.activeScheme === 'dark'
                ? this.setColorScheme('light')
                : this.setColorScheme('dark')
        }
    },

    getters: {
        userColorSchemeIsDark(): boolean {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
    }
})
