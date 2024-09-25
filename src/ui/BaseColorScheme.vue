<script setup lang="ts">
import IconMoon from '@/components/icons/IconMoon.vue'
import IconSun from '@/components/icons/IconSun.vue'
import { useThemeStore } from '@/store/themeStore'

const themeStore = useThemeStore()
</script>

<template>
    <div class="theme" tabindex="1">
        <input
            tabindex="0"
            @click="themeStore.toggleColorScheme()"
            :checked="themeStore.userColorSchemeIsDark"
            class="theme__input"
            type="checkbox"
            name="current-theme"
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
    background-color: var(--dark-primary);

    &__label {
        cursor: pointer;
        display: block;
        width: inherit;
        height: inherit;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 11px;
        outline: 1px solid var(--light-2);
    }

    &__input {
        appearance: none;
        &:checked ~ .theme__icon {
            background-color: var(--light-2);
            transform: translate(20%, -50%);
        }

        &:checked ~ .theme__icon .theme__icon--sun {
            opacity: 0;
        }

        &:checked ~ .theme__icon .theme__icon--moon {
            opacity: 1;
        }

        &:focus-visible ~ .theme__label {
            outline: 2px solid var(--accent);
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
        background-color: var(--light-2);

        transition-property: background-color, transform, opacity;
        transition-timing-function: ease-in-out;
        transition-duration: 0.3s;
    }

    &__svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease-in-out;

        width: 12px;
    }

    &__icon--moon {
        opacity: 0;
    }
}
</style>
