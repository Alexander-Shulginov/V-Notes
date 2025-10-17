<script setup lang="ts">
import TheMainLogo from '@/components/common/TheMainLogo.vue'
import TheGitHubLink from '@/components/common/TheGitHubLink.vue'
import TheHeaderMenu from '@/components/common/TheHeaderMenu.vue'
import TheColorThemeToggle from '@/components/common/TheColorThemeToggle.vue'
import TheLangSwitch from './TheLangSwitch.vue'
</script>

<template>
    <header class="header">
        <div class="header__container">
            <TheMainLogo v-once />
            <TheColorThemeToggle v-once />
            <TheGitHubLink v-once />
            <TheLangSwitch />
            <TheHeaderMenu />
        </div>
    </header>
</template>

<style scoped>
.header {
    margin-bottom: var(--gap-base);

    text-align: center;
    text-transform: uppercase;

    background-color: var(--bg-second);

    transition: background-color var(--transition-short) ease-in-out;
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-base);

    margin: 0 auto;
    padding: 10px var(--offset-base);
    max-width: var(--container-width);
}

@media (max-height: 500px) and (orientation: landscape) {
    .header__container {
        padding: 4px var(--offset-base);
    }
}
</style>
