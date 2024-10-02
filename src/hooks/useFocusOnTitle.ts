export function useFocusOnTitle() {
    function setFocusOnTitle() {
        const titleElem = document.querySelector('[data-notes-title]') as HTMLInputElement
        if (titleElem) titleElem.focus()
    }

    return { setFocusOnTitle }
}
