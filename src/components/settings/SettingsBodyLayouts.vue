<script setup lang="ts">
import IconLayoutsRight from '@/components/icons/IconLayoutsRight.vue'
import IconLayoutsLeft from '@/components/icons/IconLayoutsLeft.vue'
import { setLocalStorage } from '@/helpers/LocalStorageActions'
</script>

<template>
    <div class="settings-layouts">
        <label class="settings-layouts__label" for="layouts-left">
            <input
                value="layouts-left"
                class="settings-layouts__radio"
                type="radio"
                name="layouts-position-left"
                id="layouts-left"
            />
            <IconLayoutsLeft />
        </label>
        <label class="settings-layouts__label" for="layouts-right">
            <input
                value="layouts-right"
                class="settings-layouts__radio"
                type="radio"
                name="layouts-position-right"
                id="layouts-right"
            />
            <IconLayoutsRight />
        </label>
    </div>
</template>

<style scoped>
.settings-layouts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    transform: translateY(30px);
}
.settings-layouts__label {
    display: flex;
    align-items: center;
    gap: var(--offset-base);

    position: relative;
    cursor: pointer;
}

.settings-layouts__radio {
    width: 20px;
    height: 20px;

    accent-color: var(--color-accent);
    cursor: pointer;
}

.settings-layouts__radio:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}
</style>
