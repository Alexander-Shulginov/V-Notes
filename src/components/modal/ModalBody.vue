<script setup lang="ts">
import { ref } from 'vue'

const tabsNav = [
    {
        tabName: 'Apperance',
        tabId: 'apperance'
    },
    {
        tabName: 'Layouts',
        tabId: 'layouts'
    },
    {
        tabName: 'Hot keys',
        tabId: 'hotkeys'
    },
    {
        tabName: 'About',
        tabId: 'about'
    }
]

const activeTab = ref('apperance')

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
                <div v-show="activeTab === 'apperance'" class="tabs__item">tab 1</div>
                <div v-show="activeTab === 'layouts'" class="tabs__item">tab 2</div>
                <div v-show="activeTab === 'hotkeys'" class="tabs__item">tab 3</div>
                <div v-show="activeTab === 'about'" class="tabs__item">tab 4</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tabs {
    &__inner {
        display: flex;
        gap: var(--gap-base);
    }

    &__nav {
        display: flex;
        flex-direction: column;
        width: 120px;
        gap: var(--gap-small);
    }

    &__btn {
        cursor: pointer;

        width: 100%;

        text-align: left;
        background-color: transparent;
        border: none;

        font-size: var(--font-size-text);
        color: var(--color-text);
        padding: var(--offset-base);

        list-style-type: none;

        border-radius: var(--b-radius-base);

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--bg-base);
            }
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
}
</style>
