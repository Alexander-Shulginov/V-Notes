<script setup lang="ts">
import { onMounted, watch } from 'vue'
import AppControlsBtn from '../AppControlsBtn.vue'
import { useThemeStore } from '@/store/themeStore'
const themeStore = useThemeStore()

enum ColorType {
    base = '--bg-base',
    text = '--color-text',
    second = '--bg-second',
    accent = '--color-accent',
}

const getColor = (colorName: string): string => {
    return getComputedStyle(document.body).getPropertyValue(colorName)
}

const setColor = (event: Event, colorType: string) => {
    const eventTarget = event.target as HTMLInputElement
    if (!eventTarget) return
    document.body.style.setProperty(colorType, eventTarget.value, 'important')
}

const colorsPallet = {
    text: getColor(ColorType.text),
    base: getColor(ColorType.base),
    second: getColor(ColorType.second),
    accent: getColor(ColorType.accent),
}

watch(
    () => themeStore.activeTheme,
    () => {
        const colorsPallet = {
            text: getColor(ColorType.text),
            base: getColor(ColorType.base),
            second: getColor(ColorType.second),
            accent: getColor(ColorType.accent),
        }
    }
)
</script>

<template>
    <div class="colortheme">
        <h4 class="colortheme__title">Custom color theme</h4>
        <ul class="colortheme__items">
            <li class="colortheme__item">
                <label for="base-color" class="colortheme__name">Base color</label>
                <input
                    @input="(event) => setColor(event, ColorType.base)"
                    :value="colorsPallet.base"
                    class="colortheme__input"
                    type="color"
                    name="base-color"
                    id="base-color"
                />
            </li>
            <li class="colortheme__item">
                <label for="second-color" class="colortheme__name">Second color</label>
                <input
                    @input="(event) => setColor(event, ColorType.second)"
                    :value="colorsPallet.second"
                    class="colortheme__input"
                    type="color"
                    name="second-color"
                    id="second-color"
                />
            </li>
            <li class="colortheme__item">
                <label for="accent-color" class="colortheme__name">Accent color</label>
                <input
                    @input="(event) => setColor(event, ColorType.accent)"
                    :value="colorsPallet.accent"
                    class="colortheme__input"
                    type="color"
                    name="accent-color"
                    id="accent-color"
                />
            </li>
            <li class="colortheme__item">
                <label for="text-color" class="colortheme__name">Text color</label>
                <input
                    @input="(event) => setColor(event, ColorType.text)"
                    :value="colorsPallet.text"
                    class="colortheme__input"
                    type="color"
                    name="text-color"
                    id="text-color"
                />
            </li>
        </ul>

        <AppControlsBtn>Reset</AppControlsBtn>
    </div>
</template>

<style lang="scss" scoped>
.colortheme {
    &__title {
        font-size: var(--font-size-sidebar);
        margin-bottom: var(--gap-base);
    }

    &__items {
        display: flex;
        flex-direction: column;
        gap: var(--gap-small);

        margin-bottom: var(--gap-base);

        cursor: pointer;
    }

    &__item {
        display: flex;
        align-items: center;
        gap: var(--offset-base);
    }

    &__input {
        cursor: pointer;
    }

    &__name {
        width: 120px;
        cursor: pointer;
    }

    &__reset {
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        padding: var(--offset-base);
        margin-bottom: var(--gap-base);
        background-color: var(--bg-base);

        border: none;
        outline: none;
        border-radius: var(--b-radius-base);

        transition-property: background-color, opacity;
        transition-duration: var(--transition-short);
        transition-timing-function: ease-in-out;

        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 1px;
        }

        &:active {
            background-color: var(--bg-base-hover);
        }

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--bg-base-hover);
            }
        }
    }
}
</style>
