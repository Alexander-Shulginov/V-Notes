<script setup lang="ts">
import SettingsHeadClose from '@/components/settings/SettingsHeadClose.vue'
import SettingsHeadTitle from '@/components/settings/SettingsHeadTitle.vue'

defineEmits(['hideModal'])
</script>

<template>
    <div class="modal__head">
        <SettingsHeadTitle />
        <SettingsHeadClose @hide-modal="$emit('hideModal')" />
    </div>
</template>

<style scoped>
.modal__head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;
}

@media (max-width: 768px) {
    .modal__head {
        margin-bottom: 18px;
    }
}
</style>
