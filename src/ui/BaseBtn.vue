<template>
    <button class="btn" type="button">
        <slot></slot>
    </button>
</template>

<style lang="scss">
.btn {
    cursor: pointer;
    border-radius: var(--b-radius-base);
    padding: var(--offset-base);
    background-color: var(--dark-primary);
    border: none;
    outline: none;
    color: var(--light);
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition-property: background-color, opacity;
    transition-duration: var(--transition-base);
    transition-timing-function: ease-in-out;

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--dark-primary-hover);
        }
    }

    &:active {
        background-color: var(--dark-primary-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 1px;
        border-radius: var(--b-radius-base);
    }
}

.btn--add {
    @media (any-hover: hover) {
        &:hover {
            .svg--plus {
                transform: rotate(90deg);
            }
        }
    }
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
