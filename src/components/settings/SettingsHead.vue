<script setup lang="ts">
import SettingsHeadClose from './SettingsHeadClose.vue';
import SettingsHeadTitle from './SettingsHeadTitle.vue';

defineEmits(['hideModal'])
</script>

<template>
    <div class="modal__head">
        <SettingsHeadTitle />
        <SettingsHeadClose @hide-modal="$emit('hideModal')" />
    </div>
</template>

<style lang="scss" scoped>
.modal__head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;

    @media (max-width: 768px){
        margin-bottom: 18px;
    }
}
</style>
