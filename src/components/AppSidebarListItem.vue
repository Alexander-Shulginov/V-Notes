<script setup lang="ts">
import { useSetFocus } from '@/hooks/useSetFocus'
import { useStore } from '@/store/notesStore'

defineProps<{
    title: string
    id: number
}>()

const store = useStore()
const { setFocus } = useSetFocus()

const itemIsClicked = (id: number): boolean => {
    return id === store.activeItemId
}

function setFocusOnTextArea() {
    let textArea = document.querySelector('.text-field__area') as HTMLTextAreaElement
    setFocus(textArea)
}
</script>

<template>
    <li
        class="list__item"
        :class="{ 'list__item--active': itemIsClicked(id) }"
        @click="store.setId(id), store.readItem(), setFocusOnTextArea()"
    >
        <p class="list__item-text">
            {{ title }}
        </p>
    </li>
</template>

<style lang="scss" scoped>
.list__item {
    cursor: pointer;

    font-size: var(--font-size-text);
    padding: var(--offset-base);

    list-style-type: none;

    border-radius: var(--b-radius-base);
    @media (any-hover: hover) {
        &:hover {
            background-color: var(--bg-base);
        }
    }
}

.list__item--active {
    background-color: var(--color-accent);
    transition: background-color var(--transition-short) ease-in-out;

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--color-accent);
        }
    }
}

.list__item-text {
    margin: 0;
    overflow: hidden;

    display: -webkit-box;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    color: var(--color-text);

    transition: color var(--transition-short) ease-in-out;
}

[data-color-theme='light'] .list__item--active .list__item-text {
    color: var(--bg-base);
}
</style>
