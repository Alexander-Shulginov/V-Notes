<template>
    <button class="btn" type="button">
        <slot></slot>
    </button>
</template>

<style scoped>
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
}

.btn:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 1px;
}

.btn:active {
    background-color: var(--bg-base-hover);
}

.btn:disabled.btn--delete {
    display: none;
}

.btn:disabled:hover {
    background-color: var(--bg-base);
}

@media (any-hover: hover) {
    .btn:hover {
        background-color: var(--bg-base-hover);
    }
}

.btn--add {
    outline: 2px solid transparent;
    outline-offset: 1px;
}

@media (any-hover: hover) {
    .btn--add:hover .svg--plus {
        transform: rotate(90deg);
    }
}

.btn--add-active {
    outline-color: var(--color-accent);
    transition:
        outline-color var(--transition-short) ease-in-out,
        background-color var(--transition-short) ease-in-out;
}

@media (any-hover: hover) {
    .btn--delete:hover .svg--trash-top {
        transform-origin: right 75%;
        transform: rotate(25deg) translate(-2px, -1px);
    }
}
</style>
