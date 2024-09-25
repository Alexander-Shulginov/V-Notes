<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store/notesStore'
import NotesListItem from './NotesListItem.vue'

const store = useStore()
const itemsListIsEmpty = computed((): boolean => {
    return store.notesItems.length === 0
})
</script>

<template>
    <div v-if="itemsListIsEmpty" class="info">List is empty</div>
    <ul v-else class="list">
        <NotesListItem />
    </ul>
</template>

<style lang="scss" scoped>
.list {
    padding: 0px;
    margin: 0;
}
</style>
