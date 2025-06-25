<script setup lang="ts">
import BaseBtn from '@/components/AppControlsBtn.vue'
import IconPlus from './icons/IconPlus.vue'
import IconTrash from './icons/IconTrash.vue'
import { useStore } from '@/store/notesStore'
import { useFocusOnTitle } from '@/hooks/useFocusOnTitle'
import { useFocusOnTextarea } from '@/hooks/useFocusOnTextarea'

const store = useStore()

const { setFocusOnTitle } = useFocusOnTitle()
const { setFocusOnTextarea } = useFocusOnTextarea()

const hideSidebarOnMobile = () => {
    if (window.innerWidth < 768) {
        store.sidebarIsActive = !store.sidebarIsActive
    }
}
</script>

<template>
    <div class="controls">
        <div class="controls__wrapper">
            <BaseBtn
                class="btn--add"
                :class="{ 'btn--add-active': store.itemsListIsEmpty }"
                @click="store.createItem(), setFocusOnTitle(), hideSidebarOnMobile()"
                ref="btnAdd"
                aria-label="Button to add new note"
            >
                <IconPlus />
            </BaseBtn>
            <BaseBtn
                :disabled="store.itemsListIsEmpty"
                class="btn--delete"
                @click="store.deleteItem(), setFocusOnTextarea()"
                aria-label="Button to delete this note"
            >
                <IconTrash />
            </BaseBtn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.controls {
    width: 100%;
    overflow: hidden;
    transition:
        width var(--transition-base) ease-in-out,
        opacity var(--transition-short) ease-in-out;

    &__wrapper {
        display: flex;
        gap: var(--gap-small);

        margin-top: auto;
        padding: var(--offset-small);

        border-radius: var(--b-radius-base);
        background-color: var(--bg-second);
        transition: background-color var(--transition-short) ease-in-out;
    }
}
</style>
