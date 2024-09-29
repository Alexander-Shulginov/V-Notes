<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
import AppArea from './AppArea.vue'
</script>

<template>
    <div class="editor__body">
        <AppArea />
        <AppSidebar />
    </div>
</template>

<style lang="scss" scoped>
.editor__body {
    position: relative;

    display: flex;
    flex-direction: row-reverse;
    gap: var(--gap-base);

    width: 100%;
    height: 100%;

    transition: gap var(--transition-base) ease-in-out;
}
</style>
