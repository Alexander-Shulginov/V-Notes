import { ref } from 'vue'

const sideBarIsActive = ref(false) //! Global state, need refactor

export function useSideBarControls() {
    function toggleSideBar() {
        sideBarIsActive.value = !sideBarIsActive.value
    }

    function hideSideBar() {
        sideBarIsActive.value = true
    }

    return {
        sideBarIsActive,
        hideSideBar,
        toggleSideBar
    }
}
