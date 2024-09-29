<script setup lang="ts">
import { useStore } from '@/store/notesStore'
const store = useStore()
</script>

<template>
    <div class="text-field">
        <textarea
            v-model="store.notesText"
            @blur="store.updateText(), store.readItem()"
            :disabled="store.itemsListIsEmpty"
            class="text-field__area"
            name="user-text"
            id="area-base"
        ></textarea>
        <!-- <div class="text-field__decor"></div> -->
    </div>
</template>

<style scoped lang="scss">
.text-field {
    flex-grow: 2;
    width: 100%;

    transition: width var(--transition-base) ease-in-out;

    position: relative;
    &::after {
        pointer-events: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        z-index: 2;

        border-radius: var(--b-radius-base);
        background-color: var(--color-overlay);
        transition: background-color var(--transition-short) ease-in-out;
    }

    @media (max-width: 768px) {
        &::after {
            content: '';
        }
    }

    &__area {
        height: 100%;
        width: 100%;

        resize: none;
        outline: none;

        border: 6px solid transparent;

        color: var(--color-text);
        font-size: var(--font-size-text);

        background-color: var(--bg-second);

        border-radius: var(--b-radius-base);
        padding: calc(var(--offset-base) - 6px);

        &:focus-visible {
            ~ .text-field__decor::after {
                width: 100%;
            }
        }

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: var(--bg-base);
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color-accent);
            border-radius: 2px;
            cursor: pointer;
        }
    }

    // &__decor {
    //     position: relative;
    //     &::after {
    //         content: '';
    //         width: 0;
    //         height: 3px;
    //         background-color: var(--dark-accent);
    //         border-radius: 2px;

    //         position: absolute;
    //         bottom: 2px;
    //         left: 50%;
    //         transform: translateX(-50%);

    //         transition: width 0.3s ease-in-out;
    //     }
    // }
}
</style>
