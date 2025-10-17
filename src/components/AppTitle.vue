<script setup lang="ts">
import { nextTick, useTemplateRef, watch } from 'vue'
import { useHighLightText } from '@/hooks/useHighLightText'

const titleInput = useTemplateRef('titleInput')
const { highLightText } = useHighLightText()
</script>

<template>
    <div class="notes-title">
        <input
            @focus="highLightText(titleInput)"
            ref="titleInput"
            autofocus
            type="text"
            class="notes-title__field"
            placeholder="Add a title"
            spellcheck="false"
            aria-label="title field"
            data-notes-title
        />
    </div>
</template>

<style scoped>
.notes-title {
    flex-grow: 2;
    width: calc(100% - (var(--side-bar-width) + var(--gap-base)));
    overflow: hidden;
    transition-property: visibility, opacity, width, padding;
    transition-duration: var(--transition-base);
    transition-timing-function: ease-in-out;
}

.notes-title__field {
    width: 100%;
    padding: 16px;
    font-size: var(--font-size-title);
    font-weight: 700;
    font-family: var(--font-base);
    color: var(--color-text);
    background-color: var(--bg-second);
    outline: none;
    border: none;
    border-radius: var(--b-radius-base);
    transition:
        background-color var(--transition-short) ease-in-out,
        color var(--transition-short) ease-in-out;
}

.notes-title__field::placeholder {
    opacity: 0.7;
    font-weight: normal;
    color: var(--color-text);
    transition: color var(--transition-short) ease-in-out;
}

@media (max-height: 500px) and (orientation: landscape) {
    .notes-title__field {
        padding: 11px;
    }
}
</style>
