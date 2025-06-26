<script setup lang="ts">
import { computed, nextTick, onMounted, useTemplateRef, watch } from 'vue'
import AppSidebarListItem from './AppSidebarListItem.vue'
import IconFolderEmpty from './icons/IconFolderEmpty.vue'
import { useStore } from '@/store/notesStore'
import { useSwipe } from '@vueuse/core'
import { useToggleSidebar } from '@/hooks/useToggleSidebar'
import { useFocusOnTextarea } from '@/hooks/useFocusOnTextarea'

const store = useStore()
const sidebarElem = useTemplateRef('sideBarList')
const { hideSidebar, showSidebar } = useToggleSidebar()
const { setFocusOnTextarea } = useFocusOnTextarea()

const clickHandler = (id: number) => {
    store.setId(id)
    store.readItem()
    setFocusOnTextarea()
}

const doubleTapHandler = (id: number) => {
    clickHandler(id)
    hideSidebar()
}

const itemIsClicked = (id: number): boolean => {
    return id === store.activeItemId
}

useSwipe(sidebarElem, {
    threshold: 120,

    onSwipeEnd(e: TouchEvent, direction) {
        if (direction === 'left') {
            store.layoutRight ? showSidebar() : hideSidebar()
        }

        if (direction === 'right') {
            store.layoutRight ? hideSidebar() : showSidebar()
        }
    }
})

const scrollSidebarToBottom = () => {
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

watch(store.notesItems, scrollSidebarToBottom)

onMounted(() => {
    store.readItem()
})
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
                :title="item.title"
                :created-at="item.createdAt"
                :class="{ 'list__item--active': itemIsClicked(item.id) }"
                @click="clickHandler(item.id)"
                v-on-double-tap="doubleTapHandler"
            />
        </TransitionGroup>
    </ul>
</template>

<style lang="scss" scoped>
.list {
    overflow-y: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    gap: 3px;

    color: var(--color-text);
    font-size: var(--font-size-sidebar);
    background-color: var(--bg-second);

    border-radius: var(--b-radius-base);
    border: 6px solid transparent;

    position: relative;

    transition: background-color var(--transition-short) ease-in-out;

    flex-grow: 2;
    height: calc(100vh - 240px);

    @supports (height: calc(100dvh - 240px)) {
        height: calc(100dvh - 240px);
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

.list-enter-active,
.list-leave-active {
    transition: var(--transition-short) ease-in-out;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
