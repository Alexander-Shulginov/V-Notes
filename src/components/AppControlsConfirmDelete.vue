<script setup lang="ts">
import AppControlsBtn from '@/components/AppControlsBtn.vue'
import { useToggleOverlay } from '@/hooks/useToggleOverlay'
import { useStore } from '@/store/notesStore'
import { useFocusStore, FocusTargets } from '@/store/focusStore'
import { usePopupStore, PopupNames } from '@/store/popupStore'

const store = useStore()
const popup = usePopupStore()
const focusStore = useFocusStore()

const { hideOverlay } = useToggleOverlay()
</script>

<template>
    <Teleport to="#app">
        <div class="confirm-delete">
            <span class="confirm-delete__text">Are you sure you want to delete this note?</span>
            <div class="confirm-delete__wrap">
                <AppControlsBtn
                    @click="
                        (hideOverlay(),
                        store.deleteItem(),
                        popup.close(PopupNames.Confirm),
                        focusStore.requestFocus(FocusTargets.TextArea))
                    "
                    class="confirm-delete__btn"
                    >Yes</AppControlsBtn
                >
                <AppControlsBtn
                    @click="(popup.close(PopupNames.Confirm), hideOverlay())"
                    class="confirm-delete__btn"
                    >No</AppControlsBtn
                >
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.confirm-delete {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--bg-second);
    border-radius: var(--b-radius-base);
    z-index: 10;
    padding: 30px;
}

.confirm-delete__text {
    display: block;
    margin-bottom: calc(var(--offset-small) * 3);
    color: var(--color-text);
    text-align: center;
}

.confirm-delete__wrap {
    display: flex;
    justify-content: center;
    gap: var(--offset-base);
}

.confirm-delete__btn {
    width: 100px;
    color: var(--color-text);
}
</style>
