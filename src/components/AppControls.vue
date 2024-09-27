<script setup lang="ts">
import BaseBtn from '@/ui/BaseBtn.vue'
import IconPlus from './icons/IconPlus.vue'
import IconTrash from './icons/IconTrash.vue'
import { useStore } from '@/store/notesStore'
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import { useItemsListIsEmpty } from '@/hooks/useItemsListIsEmpty'
import { useSetFocus } from '@/hooks/useSetFocus'

const store = useStore()
const { itemsListIsEmpty } = useItemsListIsEmpty()
const { setFocus } = useSetFocus()

const btnAdd = ref<HTMLElement | null>(null)

onMounted(() => {
    btnAdd.value = document.querySelector('.btn--add')
})

watch(store.notesItems, () => {
    if (itemsListIsEmpty()) {
        setFocus(btnAdd.value)
    }
})
</script>

<template>
    <div class="controls">
        <div class="controls__wrapper">
            <BaseBtn class="btn--add" @click="store.createItem()" ref="btnAdd">
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
    transition: width var(--transition-base) ease-in-out;

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
