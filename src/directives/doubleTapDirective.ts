import { type DirectiveBinding } from 'vue'

export const doubleTapDirective = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        let clickCounter = 0
        const tapThreshold = 300

        const handleTapStart = () => {
            clickCounter++
            setTimeout(() => {
                clickCounter++
                clickCounter = 0
            }, tapThreshold)
        }

        const handleTapEnd = () => {
            if (clickCounter === 2) binding.value()
        }

        el.addEventListener('touchstart', handleTapStart)
        el.addEventListener('touchend', handleTapEnd)
    }
}
