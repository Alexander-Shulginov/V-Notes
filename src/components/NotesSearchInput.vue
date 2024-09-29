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
    color: var(--color-text);
    width: 100%;
    padding: var(--offset-base);
    font-size: var(--font-size-text);
    background-color: var(--bg-base);
    border-radius: var(--b-radius-base);

    transition-property: visibility, opacity, width, padding, background-color;
    transition-duration: var(--transition-base);
    transition-timing-function: ease-in-out;

    &:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-radius: var(--b-radius-base);
    }

    &::placeholder {
        color: var(--color-text);
        opacity: .7;
    }

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--bg-base-hover);
        }
    }
}
</style>
