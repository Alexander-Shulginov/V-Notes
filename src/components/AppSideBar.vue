<script setup lang="ts">
import AppSidebarList from './AppSidebarList.vue'
import AppControls from './AppControls.vue'
</script>

<template>
    <aside class="sidebar">
        <AppSidebarList />
        <AppControls />
    </aside>
</template>

<style lang="scss" scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);
    flex-shrink: 0;

    width: var(--side-bar-width);
    height: 100%;

    overflow: hidden;
    transition: var(--transition-base) ease-in-out;

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
