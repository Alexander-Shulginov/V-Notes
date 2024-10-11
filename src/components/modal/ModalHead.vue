<script setup lang="ts">
import ModalTitle from './ModalTitle.vue'
import ModalButtonClose from './ModalButtonClose.vue'

defineEmits(['hideModal'])
</script>

<template>
    <div class="modal__head">
        <ModalTitle />
        <ModalButtonClose @hide-modal="$emit('hideModal')" />
    </div>
</template>

<style lang="scss" scoped>
.modal__head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;
}
</style>
