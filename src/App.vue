<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue'
import AppBase from '@/components/AppBase.vue'

import { useThemeStore } from '@/store/themeStore'
import { onMounted } from 'vue'
const themeStore = useThemeStore()

onMounted(() => {
    themeStore.loadColorTheme()
})
</script>

<template>
    <div class="app-wrapper" :data-color-theme="themeStore.activeTheme">
        <TheHeader />
        <AppBase />
    </div>
</template>

<style scoped>
.app-wrapper {
    height: 100%;
    background-color: var(--bg-base);
    transition: background-color var(--transition-short) ease;
}
</style>
