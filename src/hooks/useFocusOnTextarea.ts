import { nextTick } from 'vue'

export function useFocusOnTextarea() {
    function setFocusOnTextarea() {
        const areaElem = document.querySelector('[data-notes-area]') as HTMLTextAreaElement
        if (areaElem && window.innerWidth > 768) {
            nextTick(() => areaElem.focus())
        }
    }

    return { setFocusOnTextarea }
}
