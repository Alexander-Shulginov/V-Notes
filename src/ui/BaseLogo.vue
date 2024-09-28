<script setup lang="ts"></script>

<template>
    <a href="/" class="logo">
        <svg
            class="logo__svg"
            width="32px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M29.47 21.827c3.371-5.839 0.556-13.776-6.243-17.701s-15.043-2.374-18.414 3.465c-0.326 0.564-0.551 1.149-0.764 1.747 3.574-4.909 9.64-6.806 14.176-4.187 4.918 2.84 6.156 9.875 2.771 15.738-1.613 2.794-3.985 4.806-6.561 5.848 5.952 1.826 12.211-0.019 15.035-4.911v0zM20.401 8.497c-2.954-4.433-9.359-4.573-14.273-0.339s-6.503 11.26-3.549 15.693c0.286 0.429 0.618 0.783 0.963 1.132-2.244-4.316-1.598-9.712 1.681-12.537 3.555-3.063 8.826-1.938 11.792 2.514 1.414 2.122 2.041 4.612 1.93 6.975 3.187-4.189 3.931-9.724 1.457-13.438l-0 0zM5.244 13.646c-3.048 3.029-2.986 8.872 0.071 12.85s8.007 4.747 11.055 1.717c-2.939 1.85-5.296 1.641-8.036-1.305-2.462-2.648-1.525-7.663 1.536-10.705 1.459-1.45 3.19-2.235 4.847-2.352-2.599-2.666-6.92-2.744-9.474-0.206z"
            ></path>
        </svg>

        <span class="slogan">V-Notes</span>
    </a>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;

    outline: none;

    @media (any-hover: hover) {
        &:hover {
            .slogan::after {
                width: 100%;
            }
        }
    }

    &:focus-visible {
        .slogan::after {
            width: 100%;
        }
    }

    &__svg {
        fill: var(--color-text);
        transition: fill var(--transition-base) ease-in-out;
    }
}

.slogan {
    font-family: 'K2D';
    font-size: 21px;
    color: var(--color-text);
    display: block;
    margin-top: 4px;

    transition: color var(--transition-base) ease-in-out;

    position: relative;

    &::after {
        content: '';
        width: 0;
        height: 2px;
        background-color: var(--color-accent);
        border-radius: 2px;

        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;

        transition: width var(--transition-base) ease-in-out;
    }
}
</style>
