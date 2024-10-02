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
</script>

<template>
    <div class="controls">
        <div class="controls__wrapper">
            <BaseBtn
                class="btn--add"
                :class="{ 'btn--add-active': store.itemsListIsEmpty }"
                @click="store.createItem(), setFocusOnTitle()"
                ref="btnAdd"
            >
                <IconPlus />
            </BaseBtn>
            <BaseBtn class="btn--delete" @click="store.deleteItem(), setFocusOnTextarea()">
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
        gap: 6px;

        margin-top: auto;
        padding: 8px;

        border-radius: var(--b-radius-base);
        background-color: var(--bg-second);
        transition: background-color var(--transition-short) ease-in-out;
    }
}
</style>
