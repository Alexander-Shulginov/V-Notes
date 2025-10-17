<script setup lang="ts">
import AppSidebarListItem from '@/components/AppSidebarListItem.vue'
import IconFolderEmpty from '@/components/icons/IconFolderEmpty.vue'
</script>

<template>
    <ul class="list" ref="sideBarList">
        <Transition name="list-empty">
            <li class="empty-list">
                <IconFolderEmpty />
            </li>
        </Transition>
        <TransitionGroup name="list">
            <AppSidebarListItem />
        </TransitionGroup>
    </ul>
</template>

<style scoped>
.list {
    padding: 5px;
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
}

@supports (height: calc(100dvh - 240px)) {
    .list {
        height: calc(100dvh - 240px);
    }
}

.list::-webkit-scrollbar {
    width: 5px;
}

.list::-webkit-scrollbar-track {
    background-color: var(--bg-base);
    border-radius: 2px;
}

.list::-webkit-scrollbar-thumb {
    background-color: var(--color-accent);
    cursor: pointer;
    border-radius: 2px;
}

.list--offset {
    padding-right: var(--gap-small);
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
