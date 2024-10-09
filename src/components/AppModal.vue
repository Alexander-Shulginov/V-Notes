<script setup lang="ts">
import { useClickOutside } from '@/hooks/useClickOutside'
import { useToggleOverlay } from '@/hooks/useToggleOverlay'
import { useStore } from '@/store/notesStore'
import { useTemplateRef } from 'vue'

const store = useStore()
const { hideOverlay } = useToggleOverlay()
const { clickOutside } = useClickOutside()

const modalElem = useTemplateRef('modalElem')

const hideModal = () => {
    store.modalIsOpen = false
    hideOverlay()
}
</script>

<template>
    <section class="modal" ref="modalElem">
        <div class="modal__head">
            <h3 class="modal__title">Options</h3>
            <button
                @click="clickOutside(modalElem, hideModal)"
                class="modal__close"
                type="button"
            >
                X
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background-color: var(--bg-second);
    background-color: darkcyan;
    width: 50vh;
    height: 50vh;

    padding: var(--offset-base);

    &__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        color: var(--color-text);
        font-size: var(--font-size-title);
        margin: 0;
    }

    &__close {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
}
</style>
