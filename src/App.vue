<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue'
import AppBase from '@/components/AppBase.vue'

import { onMounted } from 'vue'


</script>

<template>
    <div class="app-wrapper" :data-color-theme="'dark'">
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
