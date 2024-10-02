import { nextTick } from 'vue'

export function useSetFocus() {
    function setFocus(elem: any | null): void {
        nextTick(() => {
            if (elem) elem.focus()
        })
    }
    return { setFocus }
}
