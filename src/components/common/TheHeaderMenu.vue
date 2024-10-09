<script setup lang="ts">
import { useToggleOverlay } from '@/hooks/useToggleOverlay'
import IconDots from '../icons/IconDots.vue'
import { useStore } from '@/store/notesStore'
const store = useStore()
const { showOverlay } = useToggleOverlay()

const showModal = () => {
    store.modalIsOpen = true
    showOverlay()
}
</script>

<template>
    <button @click="showModal" class="menu-btn">
        <IconDots />
    </button>
</template>

<style scoped lang="scss">
.menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    border: none;

    &:focus-visible {
        outline: 2px solid var(--color-accent);
        border-radius: 4px;
    }

    @media (any-hover: hover) {
        &:hover {
            svg {
                opacity: 0.8;
            }
        }
    }
}
</style>
