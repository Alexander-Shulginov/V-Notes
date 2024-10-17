export const fixIphoneResizeViewport = () => {
    if (navigator.userAgent.includes('iPhone')) {
        const headElem = document.querySelector('[name=viewport]')
        if (headElem) {
            headElem.setAttribute(
                'content',
                'width=device-width, initial-scale=1, maximum-scale=1 interactive-widget=resizes-content'
            )
        }
    }
}
