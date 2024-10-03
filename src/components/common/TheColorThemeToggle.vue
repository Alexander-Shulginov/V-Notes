<script setup lang="ts">
import IconMoon from '@/components/icons/IconMoon.vue'
import IconSun from '@/components/icons/IconSun.vue'
import { useThemeStore } from '@/store/themeStore'

const themeStore = useThemeStore()
</script>

<template>
    <div class="theme">
        <input
            @click="themeStore.toggleColorTheme()"
            :checked="themeStore.activeTheme === 'dark'"
            class="theme__input"
            type="checkbox"
            name="current-theme"
            aria-label="toggle color theme"
            id="color-theme"
        />
        <label class="theme__label" for="color-theme"></label>
        <div class="theme__icon">
            <IconSun :class="'theme__icon--sun'"></IconSun>
            <IconMoon :class="'theme__icon--moon'"></IconMoon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.theme {
    position: relative;

    width: 40px;
    height: 23px;
    border-radius: 11px;

    background-color: var(--bg-base);

    transition: background-color var(--transition-short) ease-in-out;

    &__label {
        cursor: pointer;

        position: absolute;
        top: 0;
        left: 0;

        display: block;

        width: inherit;
        height: inherit;
        border-radius: 11px;
    }

    &__input {
        appearance: none;
        width: 0;
        &:checked ~ .theme__icon {
            background-color: var(--dark-light);
            transform: translate(20%, -50%);
        }

        &:checked ~ .theme__icon .theme__icon--sun {
            opacity: 0;
        }

        &:checked ~ .theme__icon .theme__icon--moon {
            opacity: 1;
        }

        &:focus-visible ~ .theme__label {
            outline: 2px solid var(--color-accent);
            border-radius: 11px;
        }
    }

    &__icon {
        pointer-events: none;

        position: absolute;
        top: 50%;
        transform: translate(103%, -50%);

        width: 18px;
        height: 18px;
        border-radius: 50%;

        background-color: var(--bg-second);

        transition-property: background-color, transform, opacity;
        transition-timing-function: ease-in-out;
        transition-duration: var(--transition-short);
    }

    &__svg {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 12px;

        transform: translate(-50%, -50%);
        transition: opacity var(--transition-short) ease-in-out;
    }

    &__icon--moon {
        opacity: 0;
    }
}
</style>
