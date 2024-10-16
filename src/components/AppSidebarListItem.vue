<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '@/store/notesStore'
import { useFocusOnTextarea } from '@/hooks/useFocusOnTextarea'
import { useToggleSidebar } from '@/hooks/useToggleSidebar'

defineProps<{
    id: number
    title: string
}>()

const store = useStore()
const { setFocusOnTextarea } = useFocusOnTextarea()
const { hideSidebar } = useToggleSidebar()

const clickHandler = (id: number) => {
    store.setId(id)
    store.readItem()
    setFocusOnTextarea()
}

function doubleTapHander(id: number) {
    clickHandler(id)
    hideSidebar()
}

const itemIsClicked = (id: number): boolean => {
    return id === store.activeItemId
}

onMounted(() => {
    store.readItem()
})
</script>

<template>
    <li
        class="list__item"
        :class="{ 'list__item--active': itemIsClicked(id) }"
        @click="clickHandler(id)"
        v-on-double-tap="doubleTapHander"
    >
        <button class="list__item-btn">
            <p class="list__item-name">
                {{ title }}
            </p>
        </button>
    </li>
</template>

<style lang="scss" scoped>
.list__item {
    list-style-type: none;
    border-radius: var(--b-radius-base);

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--bg-base);
        }
    }

    &--active {
        background-color: var(--color-accent);
        transition: background-color var(--transition-short) ease-in-out;

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--color-accent);
            }
        }

        .list__item-btn:focus-visible {
            outline: 2px solid var(--color-text);
            outline-offset: -2px;
            border-radius: var(--b-radius-base);
        }
    }

    &-btn {
        cursor: pointer;
        text-align: left;

        width: 100%;
        padding: var(--offset-base);

        transition: color var(--transition-short) ease-in-out;

        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: -2px;
            border-radius: var(--b-radius-base);
        }
    }

    &-name {
        color: var(--color-text);
        font-size: var(--font-size-text);
        font-family: var(--font-base);

        overflow: hidden;
        display: -webkit-box;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
}

[data-color-theme='light'] .list__item--active .list__item-name {
    color: var(--bg-base);
}
</style>
