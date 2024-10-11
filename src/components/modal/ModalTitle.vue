<template>
    <h3 class="modal__title">
        <slot>Settings</slot>
    </h3>
</template>

<style lang="scss" scoped>
.modal__title {
    color: var(--color-text);
    font-size: var(--font-size-title);
    margin: 0;
}
</style>
