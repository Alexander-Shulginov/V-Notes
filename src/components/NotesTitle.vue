<script setup lang="ts">
import { onMounted, useTemplateRef, watch } from 'vue'
import { useStore } from '@/store/notesStore'
import { useItemsListIsEmpty } from '@/hooks/useItemsListIsEmpty'
import { useSetFocus } from '@/hooks/useSetFocus'
import { useHighLightText } from '@/hooks/useHighLightText'

const store = useStore()
const { itemsListIsEmpty } = useItemsListIsEmpty()
const { setFocus } = useSetFocus()
const { highLightText } = useHighLightText()
const titleInput = useTemplateRef('titleInput')

watch(store.notesItems, () => {
    setFocus(titleInput.value)
    highLightText(titleInput.value)
})
</script>

<template>
    <div class="notes-title">
        <input
            @blur="store.updateTitle()"
            v-model="store.notesTitle"
            ref="titleInput"
            :disabled="itemsListIsEmpty()"
            type="text"
            class="notes-title__field"
            placeholder="Title here"
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
        border-bottom: 1px solid black;
        font-size: 24px;

        font-weight: 700;
        border-radius: var(--b-radius-base);
        color: var(--light-2);
        background-color: var(--dark-second);
        border: none;
        outline: none;
        width: 100%;
        // padding: var(--offset-base);
        padding: 16px;

        &:focus-visible {
            border: 2px solid red;
        }

        @media (max-width: 768px) {
            padding: 13px;
        }
    }
}
</style>
