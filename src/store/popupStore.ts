import { defineStore } from 'pinia'

export enum PopupNames {
    Confirm = 'confirm',
    Settings = 'settings'
}

export const usePopupStore = defineStore('popup', {
    state: () => ({
        active: '' as PopupNames | null
    }),

    actions: {
        open(name: PopupNames) {
            this.active = name
        },

        close(name?: PopupNames) {
            if (!name || this.active === name) {
                this.active = null
            }
        },

        isOpen(name: PopupNames) {
            return this.active === name
        }
    }
})

const popup = usePopupStore()

window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && popup.active) {
        popup.close()
    }
})
