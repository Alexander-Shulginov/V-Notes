<script setup lang="ts">
import AppSidebarList from './AppSidebarList.vue'
import AppControls from './AppControls.vue'
import { onMounted } from 'vue'
import { useStore } from '@/store/notesStore'
import { useDeviceType } from '@/hooks/useDeviceType'
const store = useStore()

const { isMobile } = useDeviceType()

const hideSidebar = (): void => {
    store.sidebarIsActive = false
}
onMounted(() => {
    if (isMobile()) hideSidebar()
})
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
}
</style>
