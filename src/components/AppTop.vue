<script setup lang="ts">
import AppSearch from './AppSearch.vue'
import NotesTitle from './NotesTitle.vue'
</script>

<template>
    <div class="editor__top">
        <AppSearch />
        <NotesTitle />
    </div>
</template>

<style lang="scss" scoped>
.editor__top {
    display: flex;
    gap: var(--gap-base);
    transition: gap var(--transition-base) ease-in-out;
}
</style>
