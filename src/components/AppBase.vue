<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from '@/store/notesStore'
import { useThemeStore } from '@/store/themeStore'
import { fixIphoneResizeViewport } from '@/helpers/FixIphoneResizeViewPort'

import AppSearch from '@/components/AppSearch.vue'
import AppTitle from '@/components/AppTitle.vue'
import AppArea from '@/components/AppEditor.vue'
import AppSideBar from '@/components/AppSideBar.vue'
import TheSettings from '@/components/settings/TheSettings.vue'

const store = useStore()
const themeStore = useThemeStore()

const sidebarToggleClass = computed(() => {
    return store.sidebarIsActive ? 'sidebar--visible' : 'sidebar--hidden'
})

const layoutsToggleClass = computed(() => {
    return !store.layoutRight ? '' : 'layouts-right'
})

const handleLeaveOnPage = () => {
    store.updateText()
    store.updateTitle()
}

onMounted(() => {
    setTimeout(() => {
        document.body.classList.remove('no-transition')
    }, 100)

    fixIphoneResizeViewport()

    themeStore.loadColorTheme()
    window.addEventListener('beforeunload', handleLeaveOnPage)
})
</script>

<template>
    <main
        class="editor"
        :class="[sidebarToggleClass, layoutsToggleClass]"
        :inert="store.modalIsOpen"
    >
        <div class="editor__top">
            <AppSearch />
            <AppTitle />
        </div>
        <div class="editor__body">
            <AppArea />
            <AppSideBar />
        </div>
    </main>
    <TheSettings />
</template>

<style>
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

.editor__top {
    display: flex;
    gap: var(--gap-base);
    transition: gap var(--transition-base) ease-in-out;
}

.editor__body {
    position: relative;

    display: flex;
    flex-direction: row-reverse;
    gap: var(--gap-base);

    width: 100%;
    height: 100%;

    transition: gap var(--transition-base) ease-in-out;
}

.layouts-right .editor__top.search {
    flex-direction: row-reverse;
}

.layouts-right .editor__body {
    flex-direction: row;
}

.layouts-right .sidebar-control {
    transform: rotate(180deg);
}

@media (max-width: 768px) {
    .sidebar--visible .editor__top {
        gap: 0;
    }

    .sidebar--visible .notes-title {
        width: 0;
        padding: 0;
        opacity: 0;
        overflow: hidden;
    }
}

.sidebar--hidden .search {
    width: 64px;
}

@media (max-height: 500px) and (orientation: landscape) {
    .sidebar--hidden .search {
        width: 42px;
        padding: 4px;
    }
}

.sidebar--hidden .search__field {
    visibility: hidden;
    opacity: 0;
    width: 0;
    padding: 0;
}

.sidebar--hidden .search__close {
    visibility: hidden;
    opacity: 0;
}

.sidebar--hidden .sidebar {
    width: 0px;
    opacity: 0;
    visibility: hidden;
}

.sidebar--hidden .controls {
    width: 0px;
    opacity: 0;
}

.sidebar--hidden .empty-list {
    opacity: 0;
}

.sidebar--hidden .info {
    display: none;
}

.sidebar--hidden .editor__body {
    gap: 0;
}

.sidebar--hidden .text-field::after {
    background-color: rgba(0, 0, 0, 0);
}

.sidebar--hidden .svg-arrow {
    transform: rotateY(190deg) translateX(-5px);
    transition:
        transform var(--transition-base) ease-in-out,
        stroke var(--transition-short) ease-in-out;
}

.sidebar--hidden .svg-dots {
    opacity: 0;
    transition: opacity var(--transition-base) ease-in-out;
}

.sidebar--hidden .svg-line {
    transform: translateX(-4px);
    transition:
        transform var(--transition-base) ease-in-out,
        stroke var(--transition-short) ease-in-out;
}
</style>
