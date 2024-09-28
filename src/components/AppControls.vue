<script setup lang="ts">
import BaseBtn from '@/ui/BaseBtn.vue'
import IconPlus from './icons/IconPlus.vue'
import IconTrash from './icons/IconTrash.vue'
import { useStore } from '@/store/notesStore'

const store = useStore()
</script>

<template>
    <div class="controls">
        <div class="controls__wrapper">
            <BaseBtn
                class="btn--add"
                :class="{ 'btn--add-active': store.itemsListIsEmpty }"
                @click="store.createItem()"
                ref="btnAdd"
            >
                <IconPlus />
            </BaseBtn>
            <BaseBtn class="btn--delete" @click="store.deleteItem()">
                <IconTrash />
            </BaseBtn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.controls {
    width: 100%;
    overflow: hidden;
    transition: width var(--transition-base) ease-in-out, opacity .3s ease-in-out;

    &__wrapper {
        display: flex;
        gap: 6px;
        margin-top: auto;
        background-color: var(--bg-side-bar);
        padding: 8px;
        border-radius: var(--b-radius-base);
    }
}
</style>
