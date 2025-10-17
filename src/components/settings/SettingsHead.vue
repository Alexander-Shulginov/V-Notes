<script setup lang="ts">
import SettingsHeadClose from '@/components/settings/SettingsHeadClose.vue'
import SettingsHeadTitle from '@/components/settings/SettingsHeadTitle.vue'
</script>

<template>
    <div class="settings-modal__head">
        <SettingsHeadTitle />
        <SettingsHeadClose />
    </div>
</template>

<style scoped>
.settings-modal__head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;
}

@media (max-width: 768px) {
    .settings-modal__head {
        margin-bottom: 18px;
    }
}
</style>
