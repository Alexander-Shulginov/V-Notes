<script setup lang="ts"></script>

<template>
    <div class="modal">
        <div class="modal__content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal__content {
    position: relative;
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
