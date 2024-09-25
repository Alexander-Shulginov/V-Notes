<script setup lang="ts">
import { useStore } from '@/store/notesStore'
import { onMounted } from 'vue'

const store = useStore()
onMounted(() => {
    store.titleInput = document.querySelector('.input-field')
})
</script>

<template>
    <div class="input-base">
        <input
            @blur="store.updateTitle()"
            v-model="store.notesTitle"
            ref="titleInput"
            :disabled="store.isDisabled"
            type="text"
            class="input-field"
            placeholder="Title here"
        />
    </div>
</template>

<style scoped lang="scss">
.input-base {
    position: relative;
    &::after {
        content: '';
        width: 0;
        height: 2px;
        background-color: red;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.4s ease-in-out;
    }

    @media (any-hover: hover) {
        &:hover::after {
            // width: 100%;
        }
    }
}

.input-field {
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

    @media (max-width: 768px){
        padding: 11px;
    }
}
</style>
