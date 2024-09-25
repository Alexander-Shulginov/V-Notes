<script setup lang="ts">
import { useStore } from '@/store/notesStore'
import { onMounted } from 'vue'
const store = useStore()
onMounted(() => {
    store.textArea = document.querySelector('.area')
})
</script>

<template>
    <div class="text-field">
        <textarea
            v-model="store.notesText"
            @blur="store.updateText(), store.readItem()"
            ref="textArea"
            :disabled="store.isDisabled"
            class="text-field__area"
            name="user-text"
            id="area-base"
        ></textarea>
    </div>
</template>

<style scoped lang="scss">
.text-field {
    width: 100%;
    flex-grow: 2;
    transition: width 0.5s ease-in-out;

    &__area {
        height: 100%;
        width: 100%;

        resize: none;
        outline: none;

        border: 6px solid transparent;

        color: var(--light-2);
        font-size: var(--font-size-text);

        background-color: var(--dark-second);

        border-radius: var(--b-radius-base);
        padding: calc(var(--offset-base) - 6px);

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: var(--dark-primary);
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--accent);
            border-radius: 2px;
            cursor: pointer;
        }
    }
}
</style>
