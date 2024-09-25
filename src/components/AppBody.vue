<script setup lang="ts">
import AppSideBar from './AppSideBar.vue'
import NotesArea from './NotesArea.vue'
</script>

<template>
    <div class="editor__body">
        <AppSideBar />
        <NotesArea />
    </div>
</template>

<style lang="scss" scoped>
.editor__body {
    display: flex;
    gap: var(--gap-base);
    width: 100%;
}
</style>
