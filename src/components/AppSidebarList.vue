<script setup lang="ts">
import { computed, nextTick, onMounted, useTemplateRef, watch } from 'vue'
import AppSidebarListItem from './AppSidebarListItem.vue'
import IconFolderEmpty from './icons/IconFolderEmpty.vue'
import { useStore } from '@/store/notesStore'

const store = useStore()
const sidebarElem = useTemplateRef('sideBarList')

const scrollSibebarToBottom = () => {
    nextTick(() => {
        if (sidebarElem.value) {
            const { clientHeight } = sidebarElem.value
            const { scrollHeight } = sidebarElem.value

            if (scrollHeight > clientHeight) {
                sidebarElem.value.classList.add('list--offset')
                sidebarElem.value.scrollTo({
                    top: sidebarElem.value.scrollHeight
                })
            } else {
                sidebarElem.value.classList.remove('list--offset')
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
    height: calc(100vh - 254px);
    padding-left: 0;
    padding-right: 0;

    overflow-y: auto;
    overflow-x: hidden;

    color: var(--color-text);
    font-size: var(--font-size-sidebar);
    background-color: var(--bg-second);

    border-radius: var(--b-radius-base);
    border: 6px solid transparent;

    position: relative;

    transition: background-color var(--transition-short) ease-in-out;

    @supports (height: calc(100dvh - 254px)) {
        height: calc(100dvh - 254px);
    }

    @media (max-width: 768px) {
        height: calc(100vh - 200px);

        @supports (height: calc(100dvh - 200px)) {
            height: calc(100dvh - 200px);
        }
    }

    @media (max-height: 500px) and (orientation: landscape) {
        height: calc(100vh - 152px);

        @supports (height: calc(100dvh - 152px)) {
            height: calc(100dvh - 152px);
        }
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

    &--offset {
        padding-right: var(--gap-small);
    }
}

.empty-list {
    list-style-type: none;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) scale(1);
}

.list-empty-enter-active,
.list-empty-leave-active {
    transition: opacity var(--transition-short) ease-in-out;
}

.list-empty-enter-from,
.list-empty-leave-to {
    opacity: 0;
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
