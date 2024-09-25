<script setup lang="ts">
import { useStore } from '@/store/notesStore'
import AppTop from './AppTop.vue'
import AppBody from './AppBody.vue'

const store = useStore()
</script>

<template>
    <main class="editor" :class="{ 'sidebar-hidden': store.testt }">
        <AppTop />
        <AppBody />
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
    // height: calc(100vh - 120px);
    height: calc(100vh - 200px);

    @media (max-width: 1024px) {
        grid-template-columns: 240px 3fr;
    }

    @media (max-width: 768px) {
        padding: 0 8px;
    }
}

.svg-dots {
    transition: opacity 0.5s ease-in-out;
}

.svg-line {
    transition: transform 0.5s ease-in-out;
}

.svg-arrow {
    transform: translateX(0px);
    transform-origin: center center;
    transition: transform 0.5s ease-in-out;
}

.sidebar-hidden {
    .sidebar {
        width: 0px;
        opacity: 0;
        visibility: hidden;
    }

    .sidebar__search {
        width: 66px;
    }

    .search {
        visibility: hidden;
        opacity: 0;
        width: 0;
        padding: 0;
    }

    .svg-arrow {
        transform: rotateY(190deg) translateX(-5px);
        transition: transform 0.5s ease-in-out;
    }

    .svg-dots {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .svg-line {
        transform: translateX(-4px);
        transition: transform 0.5s ease-in-out;
    }

    .sidebar__controls {
        width: 0px;

        .btn {
            opacity: 0;
        }
    }

    .editor__body {
        gap: 0;
    }

    .editor__textarea {
        grid-column: 1 / 3;
    }
}
</style>
