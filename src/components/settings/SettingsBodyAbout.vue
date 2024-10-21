<script setup lang="ts">
import TheMainLogo from '../common/TheMainLogo.vue'

const version = import.meta.env.VITE_APP_VERSION
</script>
<template>
    <div class="settings-about">
        <TheMainLogo />
        <p>Is a simple application for creating and managing notes.</p>
        <p>License: MIT</p>
        <p>Version: {{ version }}</p>
        <p>
            <span class="settings-about__contacts"> Contacts: </span>
            <span>
                <a class="settings-about__link" href="mailto:alexander3post@gmail.com"
                    >alexander3post@gmail.com</a
                >
                <a
                    class="settings-about__link"
                    href="https://github.com/Alexander-Shulginov"
                    target="_blank"
                    title="GitHub"
                >
                    https://github.com/Alexander-Shulginov
                </a>
            </span>
        </p>
    </div>
</template>

<style scoped lang="scss">
.settings-about {
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);

    &__contacts {
        display: inline-block;
        margin-bottom: var(--gap-small);
    }

    &__link {
        color: inherit;
        margin-bottom: 6px;
        display: block;
        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 1px;
        }
    }

    .logo {
        margin: 0 auto;
    }
}
</style>
