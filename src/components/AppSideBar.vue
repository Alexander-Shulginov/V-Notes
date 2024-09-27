<script setup lang="ts">
import NotesList from './NotesList.vue'
import AppControls from './AppControls.vue'
</script>

<template>
    <aside class="sidebar">
        <NotesList />
        <AppControls />
    </aside>
</template>

<style lang="scss" scoped>
.sidebar {
    transition: var(--transition-base) ease-in-out;
    gap: var(--gap-base);

    display: flex;
    flex-direction: column;
    width: var(--side-bar-width);
    height: 100%;
    flex-shrink: 0;
    overflow: hidden;
    transition: var(--transition-base) ease-in-out;

    @media (max-width: 1024px) {
        width: var(--side-bar-width);
    }

    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
    }

    &__list--scroll {
        padding-right: var(--offset-base);
    }
}
</style>
