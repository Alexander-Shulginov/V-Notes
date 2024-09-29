<script setup lang="ts">
import AppSearch from './AppSearch.vue'
import AppTitle from './AppTitle.vue'
</script>

<template>
    <div class="editor__top">
        <AppSearch />
        <AppTitle />
    </div>
</template>

<style lang="scss" scoped>
.editor__top {
    display: flex;
    gap: var(--gap-base);
    transition: gap var(--transition-base) ease-in-out;
}
</style>
