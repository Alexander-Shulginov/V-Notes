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
    <div v-if="itemsListIsEmpty" class="info">List is empty</div>
    <ul v-else class="list">
        <NotesListItem v-for="item in itemsToShow" :key="item.id" :id="item.id" :title="item.title" />
    </ul>
</template>

<style lang="scss" scoped>
.list {
    padding: 0px;
    margin: 0;
}
</style>
