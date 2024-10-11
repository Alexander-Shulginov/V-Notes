<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store/notesStore'

import AppBaseTop from './AppBaseTop.vue'
import AppBaseBody from './AppBaseBody.vue'
import AppModal from './modal/TheModal.vue'

const store = useStore()

const sidebarToggleClass = computed(() => {
    return store.sidebarIsActive
        ? 'sidebar--visible'
        : 'sidebar--hidden'
})
</script>

<template>
    <main class="editor" :class="sidebarToggleClass" :inert="store.modalIsOpen">
        <AppBaseTop />
        <AppBaseBody />
    </main>
    <AppModal />
</template>

<style lang="scss">
.editor {
    max-width: var(--container-width);
    margin: 0 auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--gap-base);

    flex-grow: 2;

    padding: 0 var(--offset-base);
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
        width: 64px;

        @media (max-width: 768px) {
            // width: 56px;
        }

        @media (max-height: 500px) and (orientation: landscape) {
            width: 42px;
            padding: 4px;
        }

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
        transition:
            transform var(--transition-base) ease-in-out,
            stroke var(--transition-short) ease-in-out;
    }

    .svg-dots {
        opacity: 0;
        transition: opacity var(--transition-base) ease-in-out;
    }

    .svg-line {
        transform: translateX(-4px);
        transition:
            transform var(--transition-base) ease-in-out,
            stroke var(--transition-short) ease-in-out;
    }
}

</style>
