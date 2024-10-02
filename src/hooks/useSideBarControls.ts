import { ref } from 'vue'

const sideBarIsActive = ref(false) //! Global state, need refactor

export function useSideBarControls() {
    function toggleSideBar() {
        sideBarIsActive.value = !sideBarIsActive.value
    }

    return {
        sideBarIsActive,
        toggleSideBar
    }
}
