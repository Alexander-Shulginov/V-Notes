<script setup lang="ts">
import { computed, nextTick, onMounted, useTemplateRef, watch } from 'vue'
import { useStore } from '@/store/notesStore'
import NotesListItem from './NotesListItem.vue'
import { useItemsListIsEmpty } from '@/hooks/useItemsListIsEmpty'

const store = useStore()
const { itemsListIsEmpty } = useItemsListIsEmpty()
const sidebarElem = useTemplateRef('sideBarList')

function scrollSibebarToBottom() {
    nextTick(() => {
        if (sidebarElem.value) {
            const { clientHeight } = sidebarElem.value
            const { scrollHeight } = sidebarElem.value

            if (scrollHeight > clientHeight) {
                sidebarElem.value.scrollTo({
                    top: sidebarElem.value.scrollHeight
                })
            }
        }
    })
}

const itemsToShow = computed(() => {
    if (store.searchText.trim() !== '') {
        return store.filteredNotesItems
    }
    return store.notesItems
})

watch(store.notesItems, scrollSibebarToBottom)
</script>

<template>
    <ul class="list" ref="sideBarList">
        <li v-if="itemsListIsEmpty()" class="info">List is empty</li>
        <NotesListItem
            v-for="item in itemsToShow"
            :key="item.id"
            :id="item.id"
            :title="item.title"
        />
    </ul>
</template>

<style lang="scss" scoped>
.list {
    margin: 0;
    color: var(--light);
    font-size: 18px;
    overflow-y: auto;
    height: calc(100vh - 280px);
    background-color: var(--bg-side-bar);
    padding: 4px;
    border-radius: var(--b-radius-base);
    border: 6px solid transparent;

    @media (max-width: 768px) {
        height: calc(100vh - 238px);
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--dark-primary);
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--accent);
        cursor: pointer;
        border-radius: 2px;
    }
}
</style>
