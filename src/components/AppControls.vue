<script setup lang="ts">
import BaseBtn from '@/components/AppControlsBtn.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
</script>

<template>
    <div class="controls">
        <div class="controls__wrapper">
            <BaseBtn class="btn--add" ref="btnAdd" aria-label="Button to add new note">
                <IconPlus />
            </BaseBtn>
            <BaseBtn class="btn--delete" aria-label="Button to delete this note">
                <IconTrash />
            </BaseBtn>
        </div>
    </div>
</template>

<style scoped>
.controls {
    width: 100%;
    overflow: hidden;
    transition:
        width var(--transition-base) ease-in-out,
        opacity var(--transition-short) ease-in-out;
}

.controls__wrapper {
    display: flex;
    gap: var(--gap-small);

    margin-top: auto;
    padding: var(--offset-small);

    border-radius: var(--b-radius-base);
    background-color: var(--bg-second);
    transition: background-color var(--transition-short) ease-in-out;
}
</style>
