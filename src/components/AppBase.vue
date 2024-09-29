<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '@/store/notesStore'
import AppBaseTop from './AppBaseTop.vue'
import AppBaseBody from './AppBaseBody.vue'
import { useSideBarControls } from '@/hooks/useSideBarControls'

const store = useStore()

onMounted(() => {
    store.createItem()
})

const { sideBarIsActive } = useSideBarControls()
</script>

<template>
    <main class="editor" :class="sideBarIsActive ? 'sidebar--hidden' : 'sidebar--visible'">
        <AppBaseTop />
        <AppBaseBody />
    </main>
</template>

<style lang="scss">
.editor {
    max-width: 1240px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: var(--gap-base);

    padding: 0 16px;
    height: calc(100vh - 200px);

    @media (max-width: 768px) {
        padding: 0 8px;
        height: calc(100vh - 108px);
    }
}

.sidebar--visible {
    @media (max-width: 768px) {
        .editor__top {
            gap: 0;
        }
        .notes-title {
            width: 0;
            padding: 0;
            opacity: 0;
            overflow: hidden;
        }
    }
}

.sidebar--hidden {
    .search {
        width: 66px;

        &__field {
            visibility: hidden;
            opacity: 0;
            width: 0;
            padding: 0;
        }
    }

    .sidebar {
        width: 0px;
        opacity: 0;
        visibility: hidden;
    }

    .controls {
        width: 0px;
        opacity: 0;
    }

    .empty-list {
        opacity: 0;
    }

    .info {
        display: none;
    }

    .editor__body {
        gap: 0;
    }

    .text-field::after {
        background-color: rgba(0, 0, 0, 0);
    }

    .svg-arrow {
        transform: rotateY(190deg) translateX(-5px);
        transition: transform var(--transition-base) ease-in-out;
    }

    .svg-dots {
        opacity: 0;
        transition: opacity var(--transition-base) ease-in-out;
    }

    .svg-line {
        transform: translateX(-4px);
        transition: transform var(--transition-base) ease-in-out;
    }
}
</style>
