<script setup lang="ts">
import { ref } from 'vue'
const burgerIsActive = ref<boolean>(false)
</script>

<template>
    <button
        class="burger"
        @click="burgerIsActive = !burgerIsActive"
        :class="{ 'burger--open': burgerIsActive }"
        type="button"
        aria-label="Burger menu button"
        aria-expanded="false"
    >
        <span class="burger__line burger__line--top" aria-hidden="true"></span
        ><span class="burger__line burger__line--middle" aria-hidden="true"></span
        ><span class="burger__line burger__line--bottom" aria-hidden="true"></span>
    </button>
</template>

<style scoped lang="scss">
$burger-width: 36px;

$line-height: 2px;
$line-gap: 10px;
$line-border-radius: 6px;
$line-color: var(--light-2);

$animation-delay: 0;
$animation-duration: 0.25s;

.burger {
    cursor: pointer;

    position: relative;
    z-index: 10;
    border: none;

    width: $burger-width;
    height: ($line-height * 3) + ($line-gap * 2);

    background: transparent;

    &__line {
        position: absolute;
        right: 0;
        left: 0;

        height: $line-height;

        background: $line-color;
        border-radius: $line-border-radius;

        transition: 0.45s cubic-bezier(0.5, -0.35, 0.35, 1.5);
    }

    &__line--top {
        bottom: calc(50% + $line-gap + ($line-height / 2));
        width: 100%;
        margin-left: auto;
    }

    &__line--middle {
        top: calc(50% - ($line-height / 2));
        transition-delay: $animation-duration;
        transition-duration: 0s;
    }

    &__line--bottom {
        top: calc(50% + $line-gap + ($line-height / 2));
    }

    &--open {
        .burger__line--top {
            bottom: calc(50% - $line-height / 2);
            transform: rotate(135deg);
            width: 100%;
        }

        .burger__line--middle {
            opacity: 0;
        }

        .burger__line--bottom {
            top: calc(50% - $line-height / 2);
            transform: rotate(225deg);
        }
    }
}
</style>
