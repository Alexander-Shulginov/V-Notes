export function useDeviceType() {
    enum MediaSize {
        mobile = 767,
        table = 1023,
        dekstop = 1024
    }

    function isMobile(): boolean {
        return window.matchMedia(`(max-width: ${MediaSize.mobile}px)`).matches
    }

    function isTablet(): boolean {
        return window.matchMedia(
            `(min-width: ${MediaSize.mobile}px) and (max-width: ${MediaSize.table}px)`
        ).matches
    }

    function isDesktop(): boolean {
        return window.matchMedia(`(min-width: ${MediaSize.dekstop}px)`).matches
    }

    return { isMobile, isTablet, isDesktop }
}
