<script setup lang="ts">
import { useStore } from '@/store/notesStore'
import { onMounted } from 'vue'

const store = useStore()
onMounted(() => {
    store.titleInput = document.querySelector('.input-field')
})
</script>

<template>
    <div class="notes-title">
        <input
            @blur="store.updateTitle()"
            v-model="store.notesTitle"
            ref="titleInput"
            :disabled="store.isDisabled"
            type="text"
            class="notes-title__field"
            placeholder="Title here"
        />
    </div>
</template>

<style scoped lang="scss">
.notes-title {
    flex-grow: 2;

    &__field {
        border-bottom: 1px solid black;
        font-size: 24px;

        font-weight: 700;
        border-radius: var(--b-radius-base);
        color: var(--light-2);
        background-color: var(--dark-second);
        border: none;
        outline: none;
        width: 100%;
        // padding: var(--offset-base);
        padding: 16px;

        @media (max-width: 768px) {
            padding: 11px;
        }
    }
}
</style>
