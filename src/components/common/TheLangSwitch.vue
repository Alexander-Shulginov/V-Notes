<script setup lang="ts">
import IconLang from '@/components/icons/IconLang.vue'
import { ref } from 'vue';

const itemIsActive = ref()
</script>

<template>
    <div class="lang-switch">
        <button class="lang-switch__btn" type="button">
            <IconLang />
        </button>
        <ul class="lang-switch__langs">
            <li>
                <button class="lang-switch__lang lang-switch__lang--active" type="button">
                    English
                </button>
            </li>
            <li>
                <button class="lang-switch__lang" type="button">Russian</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.lang-switch {
    position: relative;
}

.lang-switch__btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity var(--transition-short) ease;
}

.lang-switch__langs {
    position: absolute;
    top: 130%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    z-index: 2;
    background-color: var(--bg-base);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 6px;

    transition: background-color var(--transition-short);
}

.lang-switch__lang {
    cursor: pointer;
    padding: 4px 12px;
    width: 100%;
    font-size: 16px;
    color: var(--color-text);
    border-radius: 2px;
    transition:
        color var(--transition-short),
        background-color var(--transition-short);
}

.lang-switch__lang--active {
    background-color: var(--color-accent);
}

@media (any-hover: hover) {
    .lang-switch__btn:hover {
        opacity: 0.8;
    }

    .lang-switch__lang:hover {
        background-color: rgba(167, 166, 166, 0.2);
    }

    .lang-switch__lang--active:hover {
        background-color: var(--color-accent);
    }
}
</style>
