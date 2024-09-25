<script setup lang="ts">
import { useStore } from '@/store/notesStore'
const store = useStore()
</script>

<template>
    <button @click="store.testt = !store.testt" class="sidebar-control" type="button">
        <svg
            width="23"
            height="20"
            viewBox="0 0 21 18"
            fill="none"
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
                d="M12.0908 8.31344C11.8955 8.5087 11.8955 8.82528 12.0908 9.02055L15.2728 12.2025C15.468 12.3978 15.7846 12.3978 15.9799 12.2025C16.1751 12.0073 16.1751 11.6907 15.9799 11.4954L13.1514 8.66699L15.9799 5.83857C16.1751 5.6433 16.1751 5.32672 15.9799 5.13146C15.7846 4.9362 15.468 4.9362 15.2728 5.13146L12.0908 8.31344ZM12.4443 9.16699H12.4444V8.16699H12.4443V9.16699Z"
                fill="white"
                class="svg-arrow"
            />
        </svg>
    </button>
</template>

<style scoped lang="scss">
.sidebar-control {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 4px;
        border-radius: var(--b-radius-base);
    }

}
</style>
