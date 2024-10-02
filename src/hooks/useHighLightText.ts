import { nextTick } from 'vue'

export function useHighLightText() {
    function highLightText(elem: HTMLInputElement | null) {
        nextTick(() => {
            if (elem) {
                elem.setSelectionRange(0, elem.value.length)
            }
        })
    }

    return { highLightText }
}
