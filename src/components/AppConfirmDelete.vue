<script setup lang="ts">
import AppControlsBtn from '@/components/AppControlsBtn.vue'
import BasePopup from '@/components/BasePopup.vue'
</script>

<template>
    <Transition name="modal">
        <BasePopup>
            <div class="confirm-delete">
                <span class="confirm-delete__text">Are you sure you want to delete this note?</span>
                <div class="confirm-delete__wrap">
                    <AppControlsBtn class="confirm-delete__btn">Yes</AppControlsBtn>
                    <AppControlsBtn class="confirm-delete__btn">No</AppControlsBtn>
                </div>
            </div>
        </BasePopup>
    </Transition>
</template>

<style lang="scss">
.confirm-delete {
    background-color: var(--bg-second);
    border-radius: var(--b-radius-base);
    z-index: 10;
    padding: 30px;
}

.confirm-delete__text {
    min-width: 250px;
    display: block;
    text-align: center;
    color: var(--color-text);
    margin-bottom: 20px;
}

.confirm-delete__wrap {
    display: flex;
    gap: var(--offset-base);
}

.confirm-delete__btn {
    color: var(--color-text);
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity var(--transition-short) ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
