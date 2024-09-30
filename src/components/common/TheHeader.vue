<script setup lang="ts">
import TheMainLogo from '@/components/common/TheMainLogo.vue'
import TheColorThemeToggle from '@/components/common/TheColorThemeToggle.vue'
</script>

<template>
    <header class="header">
        <div class="header__container">
            <TheMainLogo />
            <TheColorThemeToggle />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    margin-bottom: 26px;

    text-align: center;
    text-transform: uppercase;

    background-color: var(--bg-second);

    transition: background-color var(--transition-short) ease-in-out;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 1240px;
        padding: 18px;
        margin: 0 auto;
    }
}
</style>
