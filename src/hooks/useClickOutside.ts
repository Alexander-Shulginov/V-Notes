import { nextTick } from 'vue'

export function useClickOutside() {
    function clickOutside(target: HTMLElement, cb: Function) {
        window.addEventListener('click', (event) => {
            const e = event.target
            nextTick(() => {
                console.log(!target.contains(e))
            })
        })

        cb()
    }

    return { clickOutside }
}
