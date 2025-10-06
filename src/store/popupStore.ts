import { defineStore } from 'pinia'

export enum PopupNames {
    Confirm = 'confirm',
    Settings = 'settings'
}

export const usePopupStore = defineStore('popup', {
    state: () => ({
        active: '' as PopupNames | null,
        modalIsOpen: false
    }),

    actions: {
        open(name: PopupNames) {
            this.active = name
            this.modalIsOpen = true
        },

        close(name?: PopupNames) {
            if (!name || this.active === name) {
                this.active = null
                this.modalIsOpen = false
            }
        },

        isOpen(name: PopupNames) {
            return this.active === name
        }
    }
})
