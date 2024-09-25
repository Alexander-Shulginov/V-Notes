<script setup lang="ts">
import NotesArea from './NotesArea.vue'
</script>

<template>
    <div></div>
</template>

<style scoped lang="scss">
.editor {
    &__title {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
    }

    &__textarea {
        grid-row: 2 / 4;
        grid-column: 2 / 3;
        height: 100%;
        width: 100%;
        transition:  .5s  ease-in-out;
    }
}
</style>
