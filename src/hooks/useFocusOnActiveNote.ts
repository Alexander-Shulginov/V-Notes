export function useFocusOnActiveNote() {
    function focusOnActiveNote() {
        const activeNote = document.querySelector('.sidebar-control') as HTMLButtonElement
        if (activeNote) {
            setTimeout(() => {
                activeNote.focus()
            }, 500)
        }
    }

    return { focusOnActiveNote }
}
