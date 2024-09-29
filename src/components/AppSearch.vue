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
    display: flex;
    gap: 6px;

    width: var(--side-bar-width);
    padding: 8px;

    outline: none;
    border-radius: var(--b-radius-base);
    background-color: var(--bg-second);

    transition: width var(--transition-short) ease-in-out;
}
</style>
