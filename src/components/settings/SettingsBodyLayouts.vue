<script setup lang="ts">
import IconLayoutsRight from '../icons/IconLayoutsRight.vue'
import IconLayoutsLeft from '../icons/IconLayoutsLeft.vue'
import { setLocalStorage } from '@/helpers/LocalStorageActions'
import { StorageKeyName, useStore } from '@/store/notesStore'

const store = useStore()

const setActiveLayoutToLeft = () => {
    store.layoutRight = false
    setLocalStorage(StorageKeyName.layoutRight, false)
}

const setActiveLayoutToRight = () => {
    store.layoutRight = true
    setLocalStorage(StorageKeyName.layoutRight, true)
}
</script>

<template>
    <div class="settings-layouts">
        <label class="settings-layouts__label" for="layouts-left">
            <input
                @change="setActiveLayoutToLeft"
                checked
                value="layouts-left"
                class="settings-layouts__radio"
                type="radio"
                name="layouts-position"
                id="layouts-left"
            />
            <IconLayoutsLeft />
        </label>
        <label class="settings-layouts__label" for="layouts-right">
            <input
                @change="setActiveLayoutToRight"
                :checked="store.layoutRight"
                value="layouts-right"
                class="settings-layouts__radio"
                type="radio"
                name="layouts-position"
                id="layouts-right"
            />
            <IconLayoutsRight />
        </label>
    </div>
</template>

<style scoped lang="scss">
.settings-layouts {
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);

    &__label {
        display: flex;
        align-items: center;
        gap: var(--offset-base);

        position: relative;
        cursor: pointer;
    }

    &__radio {
        width: 20px;
        height: 20px;

        accent-color: var(--color-accent);
        cursor: pointer;
    }
}
</style>
