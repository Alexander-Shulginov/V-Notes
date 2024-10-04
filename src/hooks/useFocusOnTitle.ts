import { nextTick } from 'vue'

export function useFocusOnTitle() {
    function setFocusOnTitle() {
        const titleElem = document.querySelector('[data-notes-title]') as HTMLInputElement
        if (titleElem) {
            nextTick(() => titleElem.focus())
        }
    }

    return { setFocusOnTitle }
}
