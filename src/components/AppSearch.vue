<script setup lang="ts">
import AppSearchInput from '@/components/AppSearchInput.vue'
import AppSearchSideBarToggle from '@/components/AppSearchSidebarToggle.vue'
</script>

<template>
    <div class="search">
        <AppSearchSideBarToggle />
        <AppSearchInput />
    </div>
</template>

<style lang="scss" scoped>
.search {
    display: flex;
    gap: var(--gap-small);

    width: var(--side-bar-width);
    padding: var(--offset-small);

    outline: none;
    border-radius: var(--b-radius-base);
    background-color: var(--bg-second);

    transition:
        width var(--transition-short) ease-in-out,
        background-color var(--transition-short) ease-in-out;

    @media (max-width: 768px) {
        width: 100%;
    }
}
</style>
