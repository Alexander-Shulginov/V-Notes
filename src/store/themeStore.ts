import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', {
    state: () => {
        return {
            activeTheme: '',
            defaultTheme: 'dark',
        }
    },

    actions: {
        setColorTheme(themeName: string): void {
            this.activeTheme = themeName
            localStorage.setItem('color-theme', themeName)
        },

        setDefaultTheme() {
            this.setColorTheme(this.defaultTheme)
        },

        loadColorTheme() {
            this.colorThemeIsNotFound
                ? this.setDefaultTheme()
                : this.setColorTheme(this.getCurrentTheme)
        },

        toggleColorTheme() {
            this.activeTheme === 'dark' ? this.setColorTheme('light') : this.setColorTheme('dark')
        }
    },

    getters: {
        getCurrentTheme(): string {
            return localStorage.getItem('color-theme') ?? this.defaultTheme
        },

        colorThemeIsNotFound(): boolean {
            return localStorage.getItem('color-theme') === null
        }
    }
})
