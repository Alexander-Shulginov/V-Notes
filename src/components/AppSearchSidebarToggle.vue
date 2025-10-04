<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useToggleSidebar } from '@/hooks/useToggleSidebar'
import IconSidebar from '@/components/icons/IconSidebar.vue'

const { toggleSidebar } = useToggleSidebar()

function keyDownToggleSidebar(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault()
        toggleSidebar()
    }
}

onMounted(() => {
    window.addEventListener('keydown', keyDownToggleSidebar)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', keyDownToggleSidebar)
})
</script>

<template>
    <button
        @click="toggleSidebar"
        class="sidebar-control"
        type="button"
        aria-label="toggle sidebar"
    >
        <IconSidebar />
    </button>
</template>

<style scoped>
.sidebar-control {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--offset-small) 12px;
    border: none;
    border-radius: var(--b-radius-base);
    cursor: pointer;
    background-color: var(--bg-base);
    transition: background-color var(--transition-short) ease-in-out;
}

@media (max-height: 500px) and (orientation: landscape) {
    .sidebar-control {
        padding: 6px 13px;
    }
}

@media (any-hover: hover) {
    .sidebar-control:hover {
        background-color: var(--bg-base-hover);
    }
}

.sidebar-control:active {
    background-color: var(--bg-base-hover);
}

.sidebar-control:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 1px;
}
</style>
