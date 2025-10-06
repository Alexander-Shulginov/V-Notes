<script setup lang="ts">
import BaseBtn from '@/components/AppControlsBtn.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

import { useStore } from '@/store/notesStore'
import { useFocusStore, FocusTargets } from '@/store/focusStore'
import { usePopupStore, PopupNames } from '@/store/popupStore'

const store = useStore()
const focusStore = useFocusStore()
const popup = usePopupStore()

const hideSidebarOnMobile = () => {
    if (window.innerWidth < 768) {
        store.sidebarIsActive = !store.sidebarIsActive
    }
}

const addNotesHandler = () => {
    store.createItem()
    focusStore.requestFocus(FocusTargets.Title)
    hideSidebarOnMobile()
}
</script>

<template>
    <div class="controls">
        <div class="controls__wrapper">
            <BaseBtn
                class="btn--add"
                :class="{ 'btn--add-active': store.itemsListIsEmpty }"
                @click="addNotesHandler"
                ref="btnAdd"
                aria-label="Button to add new note"
            >
                <IconPlus />
            </BaseBtn>
            <BaseBtn
                :disabled="store.itemsListIsEmpty"
                class="btn--delete"
                @click="popup.open(PopupNames.Confirm)"
                aria-label="Button to delete this note"
            >
                <IconTrash />
            </BaseBtn>
        </div>
    </div>
</template>

<style scoped>
.controls {
    width: 100%;
    overflow: hidden;
    transition:
        width var(--transition-base) ease-in-out,
        opacity var(--transition-short) ease-in-out;
}

.controls__wrapper {
    display: flex;
    gap: var(--gap-small);

    margin-top: auto;
    padding: var(--offset-small);

    border-radius: var(--b-radius-base);
    background-color: var(--bg-second);
    transition: background-color var(--transition-short) ease-in-out;
}
</style>
