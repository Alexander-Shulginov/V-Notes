import { nextTick } from 'vue'

export function useFocusOnActiveNote() {
    function focusOnActiveNote() {
        const activeNote = document.querySelector(
            '.list__item--active .list__item-btn'
        ) as HTMLButtonElement
        console.log(activeNote)
        if (activeNote) {
            nextTick(() => {
                setTimeout(() => {
                    activeNote.focus()
                }, 1000)
            })
        }
    }

    return { focusOnActiveNote }
}
