<script setup lang="ts">
import NotesList from './NotesList.vue'
import AppControls from './AppControls.vue'
import { useStore } from '@/store/notesStore'
import { ref, watch, nextTick, onMounted } from 'vue'

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
    store.createItem()
    store.sideBar = document.querySelector('.sidebar__list')
})
</script>

<template>
    <aside class="sidebar">
        <div ref="sidebarList" class="sidebar__list">
            <div class="sidebar__list-wrapper">
                <NotesList />
            </div>
        </div>
        <AppControls />
    </aside>
</template>

<style lang="scss" scoped>
.sidebar {
    transition: 0.5s ease-in-out;
    gap: var(--gap-base);

    display: flex;
    flex-direction: column;
    width: 300px;
    flex-shrink: 0;

    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
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
        // height: calc(100vh - 255px);
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
}
</style>
