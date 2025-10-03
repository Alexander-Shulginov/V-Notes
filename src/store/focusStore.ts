import { defineStore } from 'pinia'

export enum FocusTargets {
    Title = 'title',
    TextArea = 'sidebar'
}

export const useFocusStore = defineStore('focus', {
    state: () => ({ focusTarget: '' as FocusTargets | '' }),
    actions: {
        requestFocus(id: FocusTargets) {
            this.focusTarget = id
        },
        clearFocus() {
            this.focusTarget = ''
        }
    }
})
