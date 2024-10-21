<script setup lang="ts">
import { ref } from 'vue'
import SettingsBodyColors from './SettingsBodyColors.vue'
import SettingsBodyLayouts from './SettingsBodyLayouts.vue'
import SettingsBodyHotKeys from './SettingsBodyHotKeys.vue'
import SettingsBodyAbout from './SettingsBodyAbout.vue'

const tabsNav = [
    // {
    //     tabName: 'Colors',
    //     tabId: 'colors'
    // },
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
                <!-- <SettingsBodyColors v-show="activeTab === 'colors'" class="tabs__item" /> -->
                <SettingsBodyLayouts v-show="activeTab === 'layouts'" class="tabs__item" />
                <SettingsBodyHotKeys v-show="activeTab === 'hotkeys'" class="tabs__item" />
                <SettingsBodyAbout v-show="activeTab === 'about'" class="tabs__item" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tabs {
    &__inner {
        display: flex;
        flex-direction: column;
        gap: var(--gap-base);
        height: 100%;

        @media (max-width: 768px){
            gap: 22px;
        }
    }

    &__nav {
        display: flex;
        flex-shrink: 0;
        gap: var(--gap-small);
    }

    &__btn {
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

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--bg-base);
            }
        }

        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 1px;
        }
    }

    &__btn--active {
        background-color: var(--color-accent);
        transition: background-color var(--transition-short) ease-in-out;

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--color-accent);
            }
        }
    }

    &__item {
        padding-top: 0;
        color: var(--color-text);
        transition: color var(--transition-short) ease-in-out;
    }
}

[data-color-theme='light'] .tabs__btn--active {
    color: var(--bg-base);
}
</style>
