<template>
    <svg
        class="svg--trash"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        stroke-width="1.5px"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 4V15C3 15.5523 3.44772 16 4 16H8H12C12.5523 16 13 15.5523 13 15V4"
            stroke-linecap="round"
        />
        <path d="M6.5 8V12" stroke-linecap="round" />
        <path
            class="svg--trash-top"
            d="M4.5 3.5V2C4.5 1.44772 4.94772 1 5.5 1H8H10.5C11.0523 1 11.5 1.44772 11.5 2V3.5M4.5 3.5H0.5M4.5 3.5H11.5M11.5 3.5H15.5"
            stroke-linecap="round"
        />
        <path d="M9.5 8V12" stroke-linecap="round" />
    </svg>
</template>

<style lang="scss" scoped>
.svg--trash {
    overflow: visible;

    path {
        stroke: var(--color-text);
        fill: transparent;
        transition: var(--transition-short) ease-in-out;
    }
}
.svg--trash-top {
    transform: translateY(-0.5px);
    transition: var(--transition-base) ease-in-out;
}
</style>
