<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'
import { useStore } from '@/store/notesStore'
import { useSetFocus } from '@/hooks/useSetFocus'
import { useHighLightText } from '@/hooks/useHighLightText'

const store = useStore()
const { setFocus } = useSetFocus()
const { highLightText } = useHighLightText()
const titleInput = useTemplateRef('titleInput')

watch(store.notesItems, () => {
    if (!store.itemsListIsEmpty) {
        setFocus(titleInput.value)
        highLightText(titleInput.value)
    }
})
</script>

<template>
    <div class="notes-title">
        <input
            @blur="store.updateTitle()"
            v-model="store.notesTitle"
            ref="titleInput"
            :disabled="store.itemsListIsEmpty"
            type="text"
            class="notes-title__field"
            placeholder="Title here"
        />
        <div class="notes-title__decor"></div>
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

        font-size: 24px;
        font-weight: 700;
        color: var(--color-text);
        background-color: var(--bg-second);

        outline: none;
        border: none;
        border-radius: var(--b-radius-base);

        transition:
            background-color var(--transition-short) ease-in-out,
            color var(--transition-short) ease-in-out;

        &:focus-visible {
            ~ .notes-title__decor::after {
                width: 100%;
            }
        }

        &::placeholder {
            color: var(--color-text);
            transition: color var(--transition-short) ease-in-out;
        }

        @media (max-width: 768px) {
            padding: 13px;
        }
    }

    &__decor {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);

            width: 0;
            height: 3px;
            border-radius: 2px;
            background-color: var(--color-accent);

            transition: width 0.3s ease-in-out;
        }
    }
}
</style>
