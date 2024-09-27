import { nextTick } from 'vue'

export function useSetFocus() {
    function setFocus(elem: HTMLElement | null): void {
        nextTick(() => {
            if (elem) elem.focus()
        })
    }
    return { setFocus }
}
