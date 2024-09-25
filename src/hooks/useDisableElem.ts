export function useDisableElem() {
    function disableElem(elem: HTMLElement) {
        if (elem) {
            elem.setAttribute('disabled', 'true')
        } else {
            throw new Error(`${elem} not found`)
        }
    }

    return { disableElem }
}
