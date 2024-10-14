<script setup lang="ts">
import { StorageKeyName, useStore } from '@/store/notesStore'
import { ref } from 'vue'
import IconLayoutsRight from '../icons/IconLayoutsRight.vue'
import IconLayoutsLeft from '../icons/IconLayoutsLeft.vue'
import { setLocalStorage } from '@/helpers/LocalStorageActions'
import ModalColors from './ModalColors.vue'
const store = useStore()
const version = import.meta.env.VITE_APP_VERSION

const tabsNav = [
    {
        tabName: 'Colors',
        tabId: 'colors'
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

const activeTab = ref('colors')

const changeTab = (tabId: string) => {
    activeTab.value = tabId
}

const setActiveLayoutToLeft = () => {
    store.layoutRight = false
    setLocalStorage(StorageKeyName.layoutRight, false)
}

const setActiveLayoutToRight = () => {
    store.layoutRight = true
    setLocalStorage(StorageKeyName.layoutRight, true)
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
                <div v-show="activeTab === 'colors'" class="tabs__item">
                    <ModalColors />
                </div>
                <div v-show="activeTab === 'layouts'" class="tabs__item tabs__item-layouts">
                    <label class="tabs__item-label" for="layouts-left">
                        <input
                            @change="setActiveLayoutToLeft"
                            checked
                            value="layouts-left"
                            class="tabs__item-radio"
                            type="radio"
                            name="layouts-position"
                            id="layouts-left"
                        />
                        <IconLayoutsLeft />
                    </label>
                    <label class="tabs__item-label" for="layouts-right">
                        <input
                            @change="setActiveLayoutToRight"
                            :checked="store.layoutRight"
                            value="layouts-right"
                            class="tabs__item-radio"
                            type="radio"
                            name="layouts-position"
                            id="layouts-right"
                        />
                        <IconLayoutsRight />
                    </label>
                </div>

                <div v-show="activeTab === 'hotkeys'" class="tabs__item">
                    <div class="tabs__item-keys">
                        <code>CTRL + s </code>
                        <span> - toggle sidebar</span>
                    </div>
                    <div class="tabs__item-keys">
                        <code>CTRL + c </code>
                        <span> - toggle colortheme</span>
                    </div>
                    <div class="tabs__item-keys">
                        <code>CTRL + m </code>
                        <span> - toggle menu</span>
                    </div>
                </div>
                <div v-show="activeTab === 'about'" class="tabs__item tabs__item-about">
                    <p>V-notes is a simple application for creating and managing notes.</p>
                    <p>License: MIT</p>
                    <p>Version: {{ version }}</p>
                    <p>
                        <span class="tabs__item-contacts"> Contacts: </span>
                        <span>
                            <a href="mailto:alexander3post@gmail.com">alexander3post@gmail.com</a>
                            <a
                                href="https://github.com/Alexander-Shulginov"
                                target="_blank"
                                title="GitHub"
                            >
                                https://github.com/Alexander-Shulginov
                            </a>
                        </span>
                    </p>
                </div>
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
        padding: var(--offset-base);
        padding-top: 0;
        color: var(--color-text);
        transition: color var(--transition-short) ease-in-out;

        a {
            color: inherit;
            margin-bottom: 6px;
            display: block;
            &:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: 1px;
            }
        }
    }

    &__item-layouts {
        display: flex;
        flex-direction: column;
        gap: var(--gap-base);
    }

    &__item-label {
        display: flex;
        align-items: center;
        gap: var(--offset-base);

        cursor: pointer;

        position: relative;
    }

    &__item-radio {
        width: 20px;
        height: 20px;
        accent-color: var(--color-accent);
        cursor: pointer;

        // &:focus-visible {
        //     outline: 2px solid var(--color-accent);
        //     outline-offset: 1px;
        // }
    }

    &__item-keys {
        display: flex;
        align-items: center;
        gap: 4px;

        &:not(:last-child) {
            margin-bottom: var(--offset-base);
        }

        code {
            background-color: var(--bg-base);
            border-radius: 11px;
            padding: 8px;
            transition: background-color var(--transition-short) ease-in-out;
        }
    }

    &__item-about {
        display: flex;
        flex-direction: column;
        gap: var(--gap-base);
    }

    &__item-contacts {
        display: inline-block;
        margin-bottom: var(--gap-small);
    }
}

[data-color-theme='light'] .tabs__btn--active {
    color: var(--bg-base);
}
</style>
