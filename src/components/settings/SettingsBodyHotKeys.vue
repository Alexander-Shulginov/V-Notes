<script setup lang="ts"></script>

<template>
    <div class="settings-keys">
        <div class="settings-keys__item">
            <code>CTRL + s </code>
            <span> - toggle sidebar</span>
        </div>
        <div class="settings-keys__item">
            <code>CTRL + c </code>
            <span> - toggle colortheme</span>
        </div>
        <div class="settings-keys__item">
            <code>CTRL + m </code>
            <span> - toggle menu</span>
        </div>
        <div class="settings-keys__item">
            <code>right swipe</code>
            <span> - show sidebar</span>
        </div>
        <div class="settings-keys__item">
            <code>left swipe</code>
            <span> - hide sidebar</span>
        </div>
        <div class="settings-keys__item">
            <code>double tap</code>
            <span> - select note</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.settings-keys {
    &__item {
        display: flex;
        align-items: center;
        gap: 4px;

        &:not(:last-child) {
            margin-bottom: var(--offset-base);
        }

        code {
            width: 94px;
            text-align: center;
            background-color: var(--bg-base);
            border-radius: 11px;
            padding: 8px;
            transition: background-color var(--transition-short) ease-in-out;
        }
    }
}
</style>
