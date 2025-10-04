<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'
import { useStore } from '@/store/notesStore'

const store = useStore()

const clearInput = () => (store.searchText = '')
</script>

<template>
    <div class="search__field-wrap">
        <input
            v-model="store.searchText"
            @input="store.searchItems()"
            type="text"
            class="search__field"
            placeholder="Search"
        />
        <Transition name="icon-close">
            <button
                @click="clearInput"
                v-show="store.searchText"
                class="search__close"
                type="button"
            >
                <IconClose />
            </button>
        </Transition>
    </div>
</template>

<style scoped>
.search__field {
    width: 100%;
    height: 100%;
    padding: var(--offset-base);
    padding-right: calc(var(--offset-base) * 3);
    border: none;
    outline: none;
    border-radius: var(--b-radius-base);
    font-family: var(--font-base);
    font-size: var(--font-size-text);
    color: var(--color-text);
    background-color: var(--bg-base);
    transition:
        color var(--transition-short) ease-in-out,
        visibility var(--transition-base) ease-in-out,
        opacity var(--transition-base) ease-in-out,
        width var(--transition-base) ease-in-out,
        padding var(--transition-base) ease-in-out,
        background-color var(--transition-short) ease-in-out;
}

.search__field:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 1px;
    border-radius: var(--b-radius-base);
}

.search__field::placeholder {
    color: var(--color-text);
    opacity: 0.7;
    transition: color var(--transition-short) ease-in-out;
}

@media (any-hover: hover) {
    .search__field:hover {
        background-color: var(--bg-base-hover);
    }
}

@media (max-width: 768px) {
    .search__field {
        padding-right: calc(var(--offset-base) * 4);
    }
}

.search__field-wrap {
    width: 100%;
    position: relative;
}

.search__close {
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
        opacity 0.2s ease-in-out,
        visibility 0.2s ease-in-out;
}

.search__close svg {
    width: 14px;
    height: 14px;
}

.icon-close-enter-active,
.icon-close-leave-active {
    transition: opacity var(--transition-short) ease;
}

.icon-close-enter-from,
.icon-close-leave-to {
    opacity: 0;
}
</style>
