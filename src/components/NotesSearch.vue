<script setup lang="ts">
import { useStore } from '@/store/notesStore'

const store = useStore()
</script>

<template>
    <input
        v-model="store.searchText"
        @input="store.searchItems()"
        type="text"
        class="search"
        placeholder="Search"
    />
</template>

<style lang="scss" scoped>
.search {
    border: none;
    outline: none;
    color: #fff;
    width: 100%;
    padding: var(--offset-base);
    font-size: var(--font-size-text);
    background-color: var(--dark-primary);
    border-radius: var(--b-radius-base);
}
</style>
