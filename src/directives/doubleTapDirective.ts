// import { DirectiveBinding } from 'vue'

function handleDoubleTap(el: HTMLElement, binding) {
    let lastTap = 0
    const doubleTapThreshold = 300 // Максимальный интервал между двумя тапами

    el.addEventListener('touchend', (event) => {
        const currentTime = new Date().getTime()
        const tapLength = currentTime - lastTap

        if (tapLength < doubleTapThreshold && tapLength > 0) {
            // Если это двойной тап, выполняем все переданные действия
            binding.value()
        }

        lastTap = currentTime
    })
}

export default {
    mounted(el: HTMLElement, binding) {
        handleDoubleTap(el, binding)
    },
    unmounted(el: HTMLElement) {
        // Если нужно, добавляем очистку событий
        el.removeEventListener('touchend', () => {})
    }
}
