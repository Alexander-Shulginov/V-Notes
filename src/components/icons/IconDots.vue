<template>
    <svg
        class="icon-dots"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="3" r="2"></circle>
        <circle cx="12" cy="12" r="2"></circle>
        <circle cx="12" cy="21" r="2"></circle>
    </svg>
</template>

<style scoped lang="scss">
.icon-dots {
    width: 22px;
    height: 22px;
    fill: var(--color-text);
    transition:
        fill var(--transition-short) ease-in-out,
        opacity var(--transition-short) ease-in-out;
}
</style>
