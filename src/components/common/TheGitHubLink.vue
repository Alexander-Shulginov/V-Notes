<script setup lang="ts">
import IconGitHubLogo from '@/components/icons/IconGitHubLogo.vue'
</script>

<template>
    <a
        class="github-link"
        href="https://github.com/Alexander-Shulginov/V-Notes"
        target="_blank"
        title="GitHub"
    >
        <IconGitHubLogo />
    </a>
</template>

<style scoped>
.github-link {
    display: flex;
    align-items: center;
    justify-content: center;
}

.github-link:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
    border-radius: 50%;
}
</style>
