<template>
    <button class="btn" type="button">
        <slot></slot>
    </button>
</template>

<style lang="scss">
.btn {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: var(--offset-base);
    background-color: var(--bg-base);

    border: none;
    outline: none;
    border-radius: var(--b-radius-base);

    transition-property: background-color, opacity;
    transition-duration: var(--transition-short);
    transition-timing-function: ease-in-out;

    &:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
    }

    &:active {
        background-color: var(--bg-base-hover);
    }

    &:disabled.btn--delete {
        display: none;
    }

    &:disabled:hover {
        background-color: var(--bg-base);
    }

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--bg-base-hover);
        }
    }
}

.btn--add {
    outline: 2px solid transparent;
    outline-offset: 1px;
    @media (any-hover: hover) {
        &:hover {
            .svg--plus {
                transform: rotate(90deg);
            }
        }
    }
}

.btn--add-active {
    outline-color: var(--color-accent);
    transition:
        outline-color var(--transition-short) ease-in-out,
        background-color var(--transition-short) ease-in-out;
}

.btn--delete {
    @media (any-hover: hover) {
        &:hover {
            .svg--trash-top {
                transform-origin: right 75%;
                transform: rotate(25deg) translate(-2px, -1px);
            }
        }
    }
}
</style>
