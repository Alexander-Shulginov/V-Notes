<script setup lang="ts">
import TheMainLogo from '@/components/common/TheMainLogo.vue'
import TheColorThemeToggle from '@/components/common/TheColorThemeToggle.vue'
import TheGitHubLink from './TheGitHubLink.vue'
import TheHeaderMenu from './TheHeaderMenu.vue'
import { useStore } from '@/store/notesStore';
const store = useStore()
</script>

<template>
    <header class="header" :inert="store.modalIsOpen">
        <div class="header__container">
            <TheMainLogo />
            <TheGitHubLink />
            <TheColorThemeToggle />
            <TheHeaderMenu />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    margin-bottom: var(--gap-base);

    text-align: center;
    text-transform: uppercase;

    background-color: var(--bg-second);

    transition: background-color var(--transition-short) ease-in-out;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--gap-base);

        margin: 0 auto;
        padding: 10px var(--offset-base);
        max-width: var(--container-width);

        @media (max-height: 500px) and (orientation: landscape) {
            padding: 4px var(--offset-base);
        }
    }
}
</style>
