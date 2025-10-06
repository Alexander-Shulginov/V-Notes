<script setup lang="ts">
import { nextTick, useTemplateRef, watch } from 'vue'
import { useSwipe } from '@vueuse/core'
import { useStore } from '@/store/notesStore'
import { useToggleSidebar } from '@/hooks/useToggleSidebar'
import { useFocusStore, FocusTargets } from '@/store/focusStore'

const store = useStore()
const focusStore = useFocusStore()
const { showSidebar, hideSidebar } = useToggleSidebar()

const areaField = useTemplateRef('area-field')

const blurHandler = () => {
    store.updateText()
    store.readItem()
}

useSwipe(areaField, {
    threshold: 120,

    onSwipeEnd(e: TouchEvent, direction: String) {
        if (direction === 'left') {
            store.layoutRight ? showSidebar() : hideSidebar()
            areaField.value?.focus()
        }

        if (direction === 'right') {
            store.layoutRight ? hideSidebar() : showSidebar()
            areaField.value?.focus()
        }
    }
})

watch(
    () => focusStore.focusTarget,
    async (target) => {
        if (target === FocusTargets.TextArea) {
            await nextTick()
            areaField.value?.focus()
            focusStore.clearFocus()
        }
    }
)
</script>

<template>
    <div class="text-field">
        <textarea
            v-model="store.notesText"
            @blur="blurHandler"
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

<style scoped>
.text-field {
    flex-grow: 2;
    width: 100%;
    position: relative;
    transition: width var(--transition-base) ease-in-out;
}

.text-field::after {
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
    .text-field::after {
        content: '';
    }
}

.text-field__area {
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
}

.text-field__area::-webkit-scrollbar {
    width: 5px;
}

.text-field__area::-webkit-scrollbar-track {
    background-color: var(--bg-base);
    border-radius: 2px;
}

.text-field__area::-webkit-scrollbar-thumb {
    background-color: var(--color-accent);
    border-radius: 2px;
    cursor: pointer;
}

@media (max-height: 500px) and (orientation: landscape) {
    .text-field__area {
        min-height: 130px;
    }
}
</style>
