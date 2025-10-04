<script setup lang="ts">
defineProps<{
    title: string
    createdAt: string
}>()
</script>

<template>
    <li class="list__item">
        <button class="list__item-btn">
            <span class="list__item-name">
                {{ title }}
            </span>
        </button>
        <div v-if="createdAt" class="list__item-tooltip">
            <span>Created at: </span>
            <span>{{ createdAt }}</span>
        </div>
    </li>
</template>

<style scoped>
.list__item {
    list-style-type: none;
    border-radius: var(--b-radius-base);
    position: relative;
}

@media (any-hover: hover) {
    .list__item:hover {
        background-color: var(--bg-base);
    }

    .list__item:hover .list__item-tooltip {
        transition-delay: 0.5s;
        visibility: visible;
        opacity: 1;
    }
}

.list__item--active {
    background-color: var(--color-accent);
    transition: background-color var(--transition-short) ease-in-out;
}

@media (any-hover: hover) {
    .list__item--active:hover {
        background-color: var(--color-accent);
    }
}

.list__item--active .list__item-btn:focus-visible {
    outline: 2px solid var(--color-text);
    outline-offset: -2px;
    border-radius: var(--b-radius-base);
}

.list__item-btn {
    cursor: pointer;
    text-align: left;
    width: 100%;
    padding: var(--offset-base);
}

.list__item-btn:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: -2px;
    border-radius: var(--b-radius-base);
}

.list__item-name {
    color: var(--color-text);
    font-size: var(--font-size-text);
    font-family: var(--font-base);
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    transition: color var(--transition-short) ease-in-out;
}

.list__item-tooltip {
    position: absolute;
    top: 125%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--dark-primary);
    width: 80%;
    text-align: center;
    border-radius: var(--b-radius-base);
    font-size: 14px;
    padding: 6px;
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    transition:
        visibility 0.2s ease-in-out,
        opacity 0.2s ease-in-out;
}

.list__item-tooltip::after {
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 11px 10px;
    border-color: transparent transparent var(--dark-primary) transparent;
    transform: rotate(0deg);
}

[data-color-theme='light'] .list__item--active .list__item-name {
    color: var(--bg-base);
}
</style>
