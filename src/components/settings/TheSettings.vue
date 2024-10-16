<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { useStore } from '@/store/notesStore'
import { useToggleOverlay } from '@/hooks/useToggleOverlay'
import { onBeforeUnmount, onMounted } from 'vue'
import SettingsHead from './SettingsHead.vue'
import SettingsBody from './SettingsBody.vue'

const store = useStore()
const { hideOverlay } = useToggleOverlay()

const hideModal = () => {
    store.modalIsOpen = false
    hideOverlay()
}

const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && store.modalIsOpen) {
        hideModal()
    }
}

onMounted(() => {
    window.addEventListener('keyup', handleKeyUp)
})

onBeforeUnmount(() => {
    window.removeEventListener('keyup', handleKeyUp)
})
</script>

<template>
    <Transition name="modal">
        <section class="modal" v-show="store.modalIsOpen" v-on-click-outside="hideModal">
            <SettingsHead @hide-modal="hideModal" />
            <SettingsBody />
        </section>
    </Transition>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background-color: var(--bg-second);
    background-color: var(--bg-second);

    border-radius: var(--b-radius-base);
    width: 100%;
    max-width: 450px;
    height: 400px;

    padding: calc(var(--offset-base) * 2);

    transition: background-color var(--transition-short) ease-in-out;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity var(--transition-short) ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
