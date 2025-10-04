<script setup lang="ts">
import IconSettings from '@/components/icons/IconSettings.vue'

</script>

<template>
    <button class="menu-btn" type="button" aria-label="settings button">
        <IconSettings />
    </button>
</template>

<style scoped>
.menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
}

@media (any-hover: hover) {
    .menu-btn:hover {
        svg {
            opacity: 0.8;
        }
    }
}

.menu-btn:focus-visible {
    outline: 2px solid var(--color-accent);
    border-radius: 4px;
}
</style>
