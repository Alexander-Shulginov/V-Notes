<script setup lang="ts">
import SettingsHeadClose from '@/components/settings/SettingsHeadClose.vue'
import SettingsHeadTitle from '@/components/settings/SettingsHeadTitle.vue'
import { usePopupStore, PopupNames } from '@/store/popupStore'

const popup = usePopupStore()
</script>

<template>
    <div class="settings-modal__head">
        <SettingsHeadTitle />
        <SettingsHeadClose @click="popup.close(PopupNames.Settings)" />
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
