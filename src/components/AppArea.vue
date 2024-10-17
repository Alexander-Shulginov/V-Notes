<script setup lang="ts">
import { useToggleSidebar } from '@/hooks/useToggleSidebar'
import { useStore } from '@/store/notesStore'
import { useSwipe } from '@vueuse/core'
import { useTemplateRef } from 'vue'
const store = useStore()

const { showSidebar, hideSidebar, toggleSidebar } = useToggleSidebar()
const areaField = useTemplateRef('area-field')

useSwipe(areaField, {
    threshold: 120,

    onSwipeEnd(e: TouchEvent, direction) {
        if (direction === 'left') {
            store.layoutRight ? showSidebar() : hideSidebar()
        }

        if (direction === 'right') {
            store.layoutRight ? hideSidebar() : showSidebar()
        }
    }
})
</script>

<template>
    <div class="text-field">
        <textarea
            v-model="store.notesText"
            @blur="store.updateText(), store.readItem()"
            :disabled="store.itemsListIsEmpty"
            ref="area-field"
            class="text-field__area"
            name="user-text"
            id="area-base"
            data-notes-area
            aria-label="text field"
            spellcheck="false"
        ></textarea>
    </div>
</template>

<style scoped lang="scss">
.text-field {
    flex-grow: 2;
    width: 100%;

    transition: width var(--transition-base) ease-in-out;

    position: relative;
    &::after {
        pointer-events: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        z-index: 2;

        border-radius: var(--b-radius-base);
        background-color: var(--color-overlay);
        transition: background-color var(--transition-short) ease-in-out;
    }

    @media (max-width: 768px) {
        &::after {
            content: '';
        }
    }

    &__area {
        height: 100%;
        width: 100%;

        resize: none;
        outline: none;

        border: 6px solid transparent;

        color: var(--color-text);
        font-size: var(--font-size-text);
        font-family: var(--font-base);
        font-weight: 400;
        line-height: 1.5;

        background-color: var(--bg-second);

        border-radius: var(--b-radius-base);
        padding: calc(var(--offset-base) - 6px);

        transition:
            color var(--transition-short) ease-in-out,
            background-color var(--transition-short) ease-in-out;

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: var(--bg-base);
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color-accent);
            border-radius: 2px;
            cursor: pointer;
        }
        @media (max-height: 500px) and (orientation: landscape) {
            min-height: 130px;
        }
    }
}
</style>
