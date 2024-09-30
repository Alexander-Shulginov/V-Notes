<script setup lang="ts">
import { computed, nextTick, useTemplateRef, watch } from 'vue'
import AppSidebarListItem from './AppSidebarListItem.vue'
import IconFolderEmpty from './icons/IconFolderEmpty.vue'
import { useStore } from '@/store/notesStore'

const store = useStore()
const sidebarElem = useTemplateRef('sideBarList')

function scrollSibebarToBottom() {
    nextTick(() => {
        if (sidebarElem.value) {
            const { clientHeight } = sidebarElem.value
            const { scrollHeight } = sidebarElem.value

            if (scrollHeight > clientHeight) {
                sidebarElem.value.scrollTo({
                    top: sidebarElem.value.scrollHeight
                })
            }
        }
    })
}

const itemsToShow = computed(() => {
    if (store.searchText.trim() !== '') {
        return store.filteredNotesItems
    }
    return store.notesItems
})

watch(store.notesItems, scrollSibebarToBottom)
</script>

<template>
    <ul class="list" ref="sideBarList">
        <Transition name="list-empty">
            <li v-if="store.itemsListIsEmpty" class="empty-list">
                <IconFolderEmpty />
            </li>
        </Transition>
        <TransitionGroup name="list">
            <AppSidebarListItem
                v-for="item in itemsToShow"
                :key="item.id"
                :id="item.id"
                :title="item.title"
            />
        </TransitionGroup>
    </ul>
</template>

<style lang="scss" scoped>
.list {
    margin: 0;
    height: calc(100vh - 280px);
    padding: 4px;

    overflow-y: auto;
    overflow-x: hidden;

    color: var(--color-text);
    font-size: 18px;
    background-color: var(--bg-second);

    border-radius: var(--b-radius-base);
    border: 6px solid transparent;

    position: relative;

    transition: background-color var(--transition-short) ease-in-out;

    @media (max-width: 768px) {
        height: calc(100vh - 238px);
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--bg-base);
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-accent);
        cursor: pointer;
        border-radius: 2px;
    }
}

.empty-list {
    list-style-type: none;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) scale(1);
}

.list-empty-enter-active {
    transition: var(--transition-short) ease-in-out;
}

.list-empty-enter-from {
    opacity: 0;
}

.list-empty-leave-active {
    opacity: 1;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: var(--transition-short) ease-in-out;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.list-leave-active {
    position: absolute;
    width: 100%;
}
</style>
