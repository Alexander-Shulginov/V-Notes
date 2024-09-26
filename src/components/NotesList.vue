<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store/notesStore'
import NotesListItem from './NotesListItem.vue'

const store = useStore()
const itemsListIsEmpty = computed((): boolean => {
    return store.notesItems.length === 0
})

const itemsToShow = computed(() => {
    if (store.searchText.trim() !== '') {
        return store.filteredNotesItems
    }
    return store.notesItems
})
</script>

<template>
    <ul class="list">
        <li v-if="itemsListIsEmpty" class="info">List is empty</li>
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
