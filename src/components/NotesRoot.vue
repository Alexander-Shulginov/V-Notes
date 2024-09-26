<script setup lang="ts">
import { useStore } from '@/store/notesStore'
import AppTop from './AppTop.vue'
import AppBody from './AppBody.vue'

const store = useStore()
window.addEventListener('resize', () => {
    if (window.innerWidth === 768) {
        store.testt = true
    }
})
</script>

<template>
    <main class="editor" :class="{ 'sidebar--hidden': store.testt }">
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
    height: calc(100vh - 200px);

    @media (max-width: 768px) {
        padding: 0 8px;
        height: calc(100vh - 108px);
    }
}

.sidebar--hidden {
    .search {
        @media (min-width: 768px) {
            width: 66px;
        }

        &__field {
            @media (min-width: 768px) {
                visibility: hidden;
                opacity: 0;
                width: 0;
                padding: 0;
            }
        }
    }

    .sidebar {
        width: 0px;
        opacity: 0;
        visibility: hidden;
    }

    .controls {
        width: 0px;

        .btn {
            opacity: 0;
        }
    }

    .editor__body {
        gap: 0;
    }

    .text-field::after {
        background-color: rgba(0, 0, 0, 0);
    }

    .svg-arrow {
        transform: rotateY(190deg) translateX(-5px);
        transition: transform var(--transition-delay) ease-in-out;
    }

    .svg-dots {
        opacity: 0;
        transition: opacity var(--transition-delay) ease-in-out;
    }

    .svg-line {
        transform: translateX(-4px);
        transition: transform var(--transition-delay) ease-in-out;
    }
}
</style>
