import { setLocalStorage } from '@/helpers/LocalStorageActions'
import { StorageKeyName, useStore } from '@/store/notesStore'

export function useToggleSidebar() {
    const store = useStore()

    function toggleSidebar() {
        store.sidebarIsActive = !store.sidebarIsActive
        setLocalStorage(StorageKeyName.sidebar, store.sidebarIsActive)
    }

    function showSidebar() {
        store.sidebarIsActive = true
        setLocalStorage(StorageKeyName.sidebar, store.sidebarIsActive)
    }

    function hideSidebar() {
        store.sidebarIsActive = false
        setLocalStorage(StorageKeyName.sidebar, store.sidebarIsActive)
    }

    return { toggleSidebar, showSidebar, hideSidebar }
}
