import { useStore } from '@/store/notesStore'

export function useItemsListIsEmpty() {
    const store = useStore()

    function itemsListIsEmpty(): boolean {
        return store.notesItems.length === 0
    }

    return { itemsListIsEmpty }
}
