<template>
    <svg
        class="svg--plus"
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 1024 1024"
    >
        <path d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"></path>
        <path d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0"></path>
        <path
            d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"
        ></path>
    </svg>
</template>

<style lang="scss" scoped>
.svg--plus {
    fill: var(--color-text);
    transition:
        transform var(--transition-base) ease-in-out,
        fill var(--transition-base) ease-in-out;
}
</style>
