<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'
defineEmits(['hideModal'])
</script>

<template>
    <button @click="$emit('hideModal')" class="modal__close" type="button">
        <IconClose />
    </button>
</template>

<style scoped lang="scss">
.modal__close {
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
</style>
