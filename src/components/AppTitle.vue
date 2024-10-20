<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useStore } from '@/store/notesStore'
import { useHighLightText } from '@/hooks/useHighLightText'

const store = useStore()
const titleInput = useTemplateRef('titleInput')
const { highLightText } = useHighLightText()
</script>

<template>
    <div class="notes-title">
        <input
            @blur="store.updateTitle()"
            @focus="highLightText(titleInput)"
            v-model="store.notesTitle"
            ref="titleInput"
            :disabled="store.itemsListIsEmpty"
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

<style scoped lang="scss">
.notes-title {
    flex-grow: 2;
    width: calc(100% - (var(--side-bar-width) + var(--gap-base)));

    overflow: hidden;

    transition-property: visibility, opacity, width, padding;
    transition-duration: var(--transition-base);
    transition-timing-function: ease-in-out;

    &__field {
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

        &::placeholder {
            opacity: 0.7;
            font-weight: normal;
            color: var(--color-text);
            transition: color var(--transition-short) ease-in-out;
        }

        @media (max-height: 500px) and (orientation: landscape) {
            padding: 6px;
        }
    }
}
</style>
