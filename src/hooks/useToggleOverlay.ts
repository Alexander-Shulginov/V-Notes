export function useToggleOverlay() {
    function showOverlay() {
        document.body.setAttribute('data-overlay', 'true')
    }

    function hideOverlay() {
        document.body.removeAttribute('data-overlay')
    }

    return { showOverlay, hideOverlay }
}
