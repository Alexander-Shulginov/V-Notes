<script setup lang="ts">
import { ref } from 'vue'
import SettingsBodyLayouts from '@/components/settings/SettingsBodyLayouts.vue'
import SettingsBodyHotKeys from '@/components/settings/SettingsBodyHotKeys.vue'
import SettingsBodyAbout from '@/components/settings/SettingsBodyAbout.vue'

const tabsNav = [
    {
        tabName: 'Hot keys',
        tabId: 'hotkeys'
    },
    {
        tabName: 'Layouts',
        tabId: 'layouts'
    },
    {
        tabName: 'About',
        tabId: 'about'
    }
]

const activeTab = ref('hotkeys')

const changeTab = (tabId: string) => {
    activeTab.value = tabId
}
</script>

<template>
    <div class="tabs">
        <div class="tabs__inner">
            <div class="tabs__nav">
                <button
                    v-for="tab in tabsNav"
                    :key="tab.tabId"
                    :name="tab.tabId"
                    :class="{ 'tabs__btn--active': activeTab === tab.tabId }"
                    @click="changeTab(tab.tabId)"
                    class="tabs__btn"
                    type="button"
                >
                    {{ tab.tabName }}
                </button>
            </div>
            <div class="tabs__content">
                <SettingsBodyLayouts v-show="activeTab === 'layouts'" class="tabs__item" />
                <SettingsBodyHotKeys v-show="activeTab === 'hotkeys'" class="tabs__item" />
                <SettingsBodyAbout v-show="activeTab === 'about'" class="tabs__item" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.tabs__inner {
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);
    height: 100%;
}

.tabs__nav {
    display: flex;
    flex-shrink: 0;
    gap: var(--gap-small);
}

.tabs__btn {
    cursor: pointer;

    width: 100%;

    background-color: transparent;
    border: none;

    font-size: var(--font-size-text);
    color: var(--color-text);
    padding: var(--offset-base);

    list-style-type: none;

    border-radius: var(--b-radius-base);
    transition: color var(--transition-short) ease-in-out;
}

@media (any-hover: hover) {
    .tabs__btn:hover {
        background-color: var(--bg-base);
    }
}

.tabs__btn:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 1px;
}

.tabs__btn--active {
    background-color: var(--color-accent);
    transition: background-color var(--transition-short) ease-in-out;
}

@media (any-hover: hover) {
    .tabs__btn--active:hover {
        background-color: var(--color-accent);
    }
}

.tabs__item {
    padding-top: 0;
    color: var(--color-text);
    transition: color var(--transition-short) ease-in-out;
}

@media (max-width: 768px) {
    .tabs__inner {
        gap: 22px;
    }
}

[data-color-theme='light'] .tabs__btn--active {
    color: var(--bg-base);
}
</style>
