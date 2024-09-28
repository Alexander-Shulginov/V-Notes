<script setup lang="ts">
import BaseLogo from '@/ui/BaseLogo.vue'
import BaseColorScheme from '@/ui/BaseColorScheme.vue'
import BaseSideBarControl from '@/ui/BaseSideBarToggle.vue'
</script>

<template>
    <header class="header">
        <div class="header__container">
            <!-- <BaseSideBarControl /> -->
            <BaseLogo />
            <BaseColorScheme />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    text-align: center;
    background-color: var(--bg-second);
    text-transform: uppercase;
    margin-bottom: 26px;

    transition: background-color var(--transition-base) ease-in-out;

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
