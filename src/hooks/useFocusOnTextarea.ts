export function useFocusOnTextarea() {
    function setFocusOnTextarea() {
        const areaElem = document.querySelector('[data-notes-area]') as HTMLTextAreaElement
        if (areaElem) areaElem.focus()
    }

    return { setFocusOnTextarea }
}
