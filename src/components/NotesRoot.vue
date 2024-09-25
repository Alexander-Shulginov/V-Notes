<script setup lang="ts">
import NotesList from './NotesList.vue'
import NotesSearch from './NotesSearch.vue'
import BaseBtn from '@/ui/BaseBtn.vue'
import { useStore } from '@/store/notesStore'
import { onMounted, ref, watch, nextTick } from 'vue'
import IconPlus from './icons/IconPlus.vue'
import IconTrash from './icons/IconTrash.vue'
import BaseSideBarControl from '@/ui/BaseSideBarControl.vue'
import NotesTitle from './NotesTitle.vue'
import NotesArea from './NotesArea.vue'

const store = useStore()
const sidebarList = ref<HTMLElement | null>(null)
const toggleScrollBar = () => {
    if (sidebarList.value) {
        const elemHeight = sidebarList.value.clientHeight
        const scrollHeight = sidebarList.value.scrollHeight

        if (scrollHeight > elemHeight) {
            sidebarList.value.classList.add('sidebar__list--scroll')
        } else {
            sidebarList.value.classList.remove('sidebar__list--scroll')
        }
    }
}

watch(store.notesItems, async () => {
    await nextTick()
    toggleScrollBar()
})

onMounted(() => {
    store.btnAdd = document.querySelector('.btn--add')
    store.sideBar = document.querySelector('.sidebar__list')
})

onMounted(() => {
    store.createItem()
})
</script>

<template>
    <main class="grid-container" :class="{ 'sidebar-hidden': store.testt }">
        <div class="app-top">
            <div class="sidebar__search">
                <div class="sidebar__search-sidebar">
                    <BaseSideBarControl />
                </div>
                <NotesSearch />
            </div>
            <div class="editor__title">
                <NotesTitle />
            </div>
        </div>
        <div class="app-body">
            <aside class="sidebar">
                <div ref="sidebarList" class="sidebar__list">
                    <div class="sidebar__list-wrapper">
                        <NotesList />
                    </div>
                </div>
                <div class="sidebar__controls">
                    <div class="sidebar__controls-wrapper">
                        <BaseBtn class="btn--add" @click="store.createItem()">
                            <IconPlus />
                        </BaseBtn>
                        <BaseBtn class="btn--delete list__item-btn" @click="store.deleteItem()">
                            <IconTrash />
                        </BaseBtn>
                    </div>
                </div>
            </aside>
            <div class="editor__textarea">
                <NotesArea />
            </div>
        </div>
    </main>
</template>

<style lang="scss">
.grid-container {
    max-width: 1240px;
    margin: 0 auto;

    padding: 0 16px;
    // height: calc(100vh - 120px);

    gap: var(--gap-base);

    @media (max-width: 1024px) {
        grid-template-columns: 240px 3fr;
    }

    @media (max-width: 768px) {
        padding: 0 8px;
    }
}

.app-top {
    display: flex;
    gap: var(--gap-base);
    margin-bottom: var(--gap-base);
}

.app-body {
    display: flex;
    gap: var(--gap-base);
    transition: 0.5s ease-in-out;
}

.editor__textarea {
    width: 100%;
    flex-grow: 2;
    transition: width 0.5s ease-in-out;
}

.editor__title {
    flex-grow: 2;
}

.sidebar-hidden {
    .sidebar {
        width: 0px;
        opacity: 0;
        visibility: hidden;
    }

    .sidebar__search {
        width: 60px;
    }

    .search {
        width: 0;
        padding: 0;
        // visibility: hidden;
        // opacity: 0;
    }

    .sidebar__controls {
        width: 0px;

        .btn {
            opacity: 0;
        }
    }

    .app-body {
        gap: 0;
    }

    .editor__textarea {
        grid-column: 1 / 3;
    }
}

.search {
    transition: 0.5s ease-in-out;
}

.sidebar {
    transition: 0.5s ease-in-out;
    gap: var(--gap-base);

    display: flex;
    flex-direction: column;
    width: 300px;
    flex-shrink: 0;

    &__search {
        display: flex;
        gap: 6px;
        background-color: var(--bg-side-bar);
        padding: 8px;
        border-radius: var(--b-radius-base);
        width: 300px;

        transition: 0.5s ease-in-out;
    }

    &__search-sidebar {
        background-color: var(--dark-primary);
        border-radius: var(--b-radius-base);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
    }

    &__list {
        width: 100%;
        overflow: hidden;
        transition: width 0.5s ease-in-out;
    }

    &__list-wrapper {
        color: var(--light);
        font-size: 18px;
        overflow-y: auto;
        height: calc(100vh - 255px);
        background-color: var(--bg-side-bar);
        padding: 8px;
        border-radius: var(--b-radius-base);
        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: var(--dark-primary);
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--accent);
            cursor: pointer;
            border-radius: 2px;
        }
    }

    &__list--scroll {
        padding-right: var(--offset-base);
    }

    &__controls-wrapper {
        display: flex;
        gap: 6px;
        margin-top: auto;
        background-color: var(--bg-side-bar);
        padding: 8px;
        border-radius: var(--b-radius-base);
    }

    &__controls {
        width: 100%;
        overflow: hidden;
        transition: width 0.5s ease-in-out;
    }
}
</style>
