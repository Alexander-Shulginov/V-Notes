<script setup lang="ts">
import AppArea from './AppArea.vue'
import AppSideBar from './AppSideBar.vue';
</script>

<template>
    <div class="editor__body">
        <AppArea />
        <AppSideBar />
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
