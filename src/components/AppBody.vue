<script setup lang="ts">
import AppSideBar from './AppSideBar.vue'
import NotesArea from './NotesArea.vue'
</script>

<template>
    <div class="editor__body">
        <NotesArea />
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
