<script setup lang="ts">
import BaseSideBarToggle from '@/ui/BaseSideBarToggle.vue'
import NotesSearchInput from './NotesSearchInput.vue'
</script>

<template>
    <div class="search">
        <BaseSideBarToggle />
        <NotesSearchInput />
    </div>
</template>

<style lang="scss" scoped>
.search {
    cursor: pointer;
    display: flex;
    gap: 6px;
    background-color: var(--bg-side-bar);
    padding: 8px;
    border-radius: var(--b-radius-base);
    width: 300px;

    transition: width var(--transition-delay) ease-in-out;
    outline: none;
    @media (max-width: 1024px) {
        width: 240px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
}
</style>
