<script setup lang="ts">
import { useStore } from '@/store/notesStore'

const store = useStore()
</script>

<template>
    <input
        v-model="store.searchText"
        @input="store.searchItems()"
        type="text"
        class="search__field"
        placeholder="Search"
    />
</template>

<style lang="scss" scoped>
.search__field {
    border: none;
    outline: none;
    color: #fff;
    width: 100%;
    padding: var(--offset-base);
    font-size: var(--font-size-text);
    background-color: var(--dark-primary);
    border-radius: var(--b-radius-base);

    &:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 1px;
        border-radius: var(--b-radius-base);
    }

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--dark-primary-hover);
        }
    }
}
</style>
