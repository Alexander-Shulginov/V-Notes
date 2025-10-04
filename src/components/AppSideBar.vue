<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '@/store/notesStore'
import { useDeviceType } from '@/hooks/useDeviceType'
import AppSidebarList from '@/components/AppSidebarList.vue'
import AppControls from '@/components/AppControls.vue'

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
        <AppControls v-once />
    </aside>
</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);
    flex-shrink: 0;

    width: var(--side-bar-width);
    height: 100%;

    overflow: hidden;
    transition: var(--transition-base) ease-in-out;
}

@media (max-width: 768px) {
    .sidebar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
    }
}
</style>
