<script setup lang="ts">
import { useToggleOverlay } from '@/hooks/useToggleOverlay'
import IconSettings from '../icons/IconSettings.vue'
import { useStore } from '@/store/notesStore'
import { onBeforeUnmount, onMounted } from 'vue'
const store = useStore()
const { showOverlay, hideOverlay } = useToggleOverlay()

const showModal = () => {
    store.modalIsOpen = true
    showOverlay()
}

const toggleModal = () => {
    store.modalIsOpen = !store.modalIsOpen
    store.modalIsOpen ? showOverlay() : hideOverlay()
}

const toggleMenuModal = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'm') {
        toggleModal()
    }
}

onMounted(() => {
    window.addEventListener('keyup', toggleMenuModal)
})

onBeforeUnmount(() => {
    window.removeEventListener('keyup', toggleMenuModal)
})
</script>

<template>
    <button @click="showModal" class="menu-btn">
        <IconSettings />
    </button>
</template>

<style scoped>
.menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
}

@media (any-hover: hover) {
    .menu-btn:hover {
        svg {
            opacity: 0.8;
        }
    }
}

.menu-btn:focus-visible {
    outline: 2px solid var(--color-accent);
    border-radius: 4px;
}
</style>
