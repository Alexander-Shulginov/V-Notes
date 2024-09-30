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
    width: 100%;
    padding: var(--offset-base);

    border: none;
    outline: none;
    border-radius: var(--b-radius-base);

    font-size: var(--font-size-text);
    color: var(--color-text);
    background-color: var(--bg-base);

    transition:
        color var(--transition-short) ease-in-out,
        visibility var(--transition-base) ease-in-out,
        opacity var(--transition-base) ease-in-out,
        width var(--transition-base) ease-in-out,
        padding var(--transition-base) ease-in-out,
        background-color var(--transition-short) ease-in-out;

    &:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-radius: var(--b-radius-base);
    }

    &::placeholder {
        color: var(--color-text);
        opacity: 0.7;
        transition: color var(--transition-short) ease-in-out;
    }

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--bg-base-hover);
        }
    }
}
</style>
