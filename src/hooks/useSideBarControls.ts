import { ref } from 'vue'

const sideBarIsActive = ref(false) //! Global state, need refactor

export function useSideBarControls() {

    function showSideBar() {
        sideBarIsActive.value = true
    }

    function hideSideBar() {
        sideBarIsActive.value = false
    }

    function toggleSideBar() {
        sideBarIsActive.value = !sideBarIsActive.value
    }

    return {
        sideBarIsActive,
        showSideBar,
        hideSideBar,
        toggleSideBar
    }
}
