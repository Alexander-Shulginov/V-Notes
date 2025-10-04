<script setup lang="ts">
import BasePopup from '@/components/BasePopup.vue'
import SettingsHead from '@/components/settings/SettingsHead.vue'
import SettingsBody from '@/components/settings/SettingsBody.vue'

</script>

<template>
    <BasePopup>
        <section class="settings-modal">
            <SettingsHead  />
            <SettingsBody />
        </section>
    </BasePopup>
</template>

<style scoped>
.settings-modal {
    position: relative;
    z-index: 10;
    background-color: var(--bg-second);

    border-radius: var(--b-radius-base);
    width: calc(100% - 18px);
    max-width: 350px;
    height: 440px;

    padding: calc(var(--offset-base) * 2);

    transition: background-color var(--transition-short) ease-in-out;
}

@media (max-width: 768px) {
    .settings-modal {
        height: 390px;
    }
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
