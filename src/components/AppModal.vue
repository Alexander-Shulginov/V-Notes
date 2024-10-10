<script setup lang="ts">
import { useStore } from '@/store/notesStore'
import { vOnClickOutside } from '@vueuse/components'
import { useToggleOverlay } from '@/hooks/useToggleOverlay'
import IconClose from './icons/IconClose.vue'

const store = useStore()
const { hideOverlay } = useToggleOverlay()

const hideModal = () => {
    store.modalIsOpen = false
    hideOverlay()
}
</script>

<template>
    <section class="modal" v-on-click-outside="hideModal">
        <div class="modal__head">
            <h3 class="modal__title">Settings</h3>
            <button @click="hideModal" class="modal__close" type="button">
                <IconClose />
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
    background-color: var(--bg-second);

    border-radius: var(--b-radius-base);
    width: 50vh;
    height: 50vh;

    padding: calc(var(--offset-base) * 2);

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
        padding: 0;
        border-radius: var(--b-radius-base);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;

        @media (any-hover: hover) {
            &:hover {
                svg {
                    opacity: 0.8;
                }
            }
        }
        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 1px;
        }
    }
}
</style>
