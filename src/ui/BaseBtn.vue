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
    background-color: var(--bg-base);
    border: none;
    outline: none;
    // color: var(--dark-light);
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition-property: background-color, opacity;
    transition-duration: var(--transition-base);
    transition-timing-function: ease-in-out;

    &:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-radius: var(--b-radius-base);
    }

    &:active {
        background-color: var(--bg-base-hover);
    }

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--bg-base-hover);
        }
    }
}

//     position: relative;
//     &::after {
//         content: '';
//         position: absolute;
//         top: -50%;
//         left: -50%;
//         width: 22px;
//         height: 50px;
//         background: linear-gradient(
//             120deg,
//             rgba(255, 255, 255, 0.2) 0%,
//             rgba(255, 255, 255, 0.6) 50%,
//             rgba(255, 255, 255, 0.2) 100%
//         );
//         transform: rotate(15deg);
//         animation: glossy-effect 1s forwards;
//     }
// }

// @keyframes glossy-effect {
//     0% {
//         top: 0%;
//         left: 0%;
//         opacity: 0;
//     }
//     50% {
//         opacity: 1;
//     }
//     100% {
//         top: 0%;
//         left: 100%;
//         opacity: 0;
//     }
// }

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
    transition: border-color var(--transition-short) ease-in-out;
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
