export function useHighLightText() {
    function highLightText(elem: HTMLInputElement | null) {
        if (elem) elem.setSelectionRange(0, 8)
    }

    return { highLightText }
}
