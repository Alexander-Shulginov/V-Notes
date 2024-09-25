<template>
    <button class="btn" type="button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    cursor: pointer;
    border-radius: var(--b-radius-base);
    padding: var(--offset-base);
    background-color: var(--dark-primary);
    border: none;
    color: var(--light);
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: opacity .3s  ease-in-out;

    &:focus-visible {
        outline: 3px solid red;
        outline-offset: 2px;
    }
}
</style>
