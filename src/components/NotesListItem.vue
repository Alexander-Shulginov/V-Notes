<script setup lang="ts">
import { useStore } from '@/store/notesStore'
import { computed } from 'vue'
import IconTrash from './icons/IconTrash.vue'
import BaseBtn from '@/ui/BaseBtn.vue'

const store = useStore()
const itemIsClicked = (id: number): boolean => {
    return id === store.activeItemId
}
const itemsToShow = computed(() => {
    if (store.searchText.trim() !== '') {
        return store.filteredNotesItems
    }
    return store.notesItems
})
</script>

<template>
    <li
        class="list__item"
        :class="{ 'list__item--active': itemIsClicked(item.id) }"
        @click="store.setId(item.id), store.readItem()"
        v-for="item in itemsToShow"
        :key="item.id"
    >
        <p class="list__item-text">
            {{ item.title }}
        </p>
    </li>
</template>

<style lang="scss" scoped>
.list__item {
    cursor: pointer;

    font-size: var(--font-size-text);
    padding: var(--offset-base);
    border-radius: var(--b-radius-base);
    @media (any-hover: hover) {
        &:hover {
            background-color: var(--dark-primary);
        }
    }
}

.list__item--active {
    background-color: var(--accent-color);

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--accent-color);
        }
    }
}

.list__item-text {
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 1;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
</style>
