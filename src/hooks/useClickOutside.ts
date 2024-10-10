import { nextTick } from 'vue'

export function useClickOutside() {
    function clickOutside(target: any, trigger: any, cb: Function) {
        window.addEventListener('click', (event) => {
            const e = event.target
        })

        cb()
    }

    return { clickOutside }
}
