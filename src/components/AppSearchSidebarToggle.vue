<script setup lang="ts">
import { useSideBarControls } from '@/hooks/useSideBarControls'
const { toggleSideBar } = useSideBarControls()
</script>

<template>
    <button @click="toggleSideBar" class="sidebar-control" type="button">
        <svg
            width="23"
            height="20"
            viewBox="0 0 21 18"
            class="svg-sidebar"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1" y="1" width="19" height="16" rx="1" stroke="white" stroke-width="2" />
            <line
                class="svg-line"
                x1="8"
                y1="0.666504"
                x2="8"
                y2="17.3332"
                stroke="white"
                stroke-width="2"
            />
            <line class="svg-dots" x1="3" y1="5" x2="6" y2="5" stroke="white" stroke-width="2" />
            <line class="svg-dots" x1="3" y1="9" x2="6" y2="9" stroke="white" stroke-width="2" />
            <line class="svg-dots" x1="3" y1="13" x2="6" y2="13" stroke="white" stroke-width="2" />
            <path
                class="svg-arrow"
                d="M12.0908 8.31344C11.8955 8.5087 11.8955 8.82528 12.0908 9.02055L15.2728 12.2025C15.468 12.3978 15.7846 12.3978 15.9799 12.2025C16.1751 12.0073 16.1751 11.6907 15.9799 11.4954L13.1514 8.66699L15.9799 5.83857C16.1751 5.6433 16.1751 5.32672 15.9799 5.13146C15.7846 4.9362 15.468 4.9362 15.2728 5.13146L12.0908 8.31344ZM12.4443 9.16699H12.4444V8.16699H12.4443V9.16699Z"
                fill="white"
            />
        </svg>
    </button>
</template>

<style scoped lang="scss">
.sidebar-control {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 12px;
    border: none;
    border-radius: var(--b-radius-base);

    cursor: pointer;
    background-color: var(--bg-base);

    transition: background-color var(--transition-short) ease-in-out;

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--bg-base-hover);
        }
    }

    &:active {
        background-color: var(--bg-base-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
    }
}

.svg-sidebar {
    fill: var(--bg-base);
    transition: fill var(--transition-short) ease-in-out;
    rect,
    line,
    path {
        stroke: var(--color-text);
    }

    rect {
        transition: stroke var(--transition-short) ease-in-out;
    }
}

.svg-dots {
    transition:
        opacity var(--transition-base) ease-in-out,
        stroke var(--transition-short) ease-in-out;
}

.svg-line {
    transition:
        transform var(--transition-base) ease-in-out,
        stroke var(--transition-short) ease-in-out;
}

.svg-arrow {
    transform: translateX(0px);
    transform-origin: center center;
    transition:
        transform var(--transition-base) ease-in-out,
        stroke var(--transition-short) ease-in-out;
}
</style>
