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
        <NotesList />
        <AppControls />
    </aside>
</template>

<style lang="scss" scoped>
.sidebar {
    transition: var(--transition-delay) ease-in-out;
    gap: var(--gap-base);

    display: flex;
    flex-direction: column;
    width: 300px;
    flex-shrink: 0;
    overflow: hidden;
    transition: var(--transition-delay) ease-in-out;

    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }

    &__list--scroll {
        padding-right: var(--offset-base);
    }
}
</style>
