import { nextTick } from 'vue'

export function useSetFocus() {
    function setFocus(elem: HTMLElement) {
        nextTick(() => {
            if (elem) elem.focus()
        })
    }
    return { setFocus }
}
