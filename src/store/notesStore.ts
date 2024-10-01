import { defineStore } from 'pinia'

interface NotesItem {
    id: number
    title: string
    text: string
    itemIsActive: boolean
}

const StorageKeyName = {
    id: 'activeItemId',
    items: 'notesItems'
}

export const useStore = defineStore('storeBase', {
    state: () => {
        return {
            activeItemId: JSON.parse(localStorage.getItem(StorageKeyName.id) || '0'),
            notesTitle: 'Untitled',
            notesText: '',
            searchText: '',
            notesItems: JSON.parse(
                localStorage.getItem(StorageKeyName.items) || '[]'
            ) as NotesItem[],
            filteredNotesItems: JSON.parse(
                localStorage.getItem(StorageKeyName.items) || '[]'
            ) as NotesItem[]
        }
    },

    actions: {
        saveToLocalStorage() {
            localStorage.setItem('notesItems', JSON.stringify(this.notesItems))
            localStorage.setItem('activeItemId', JSON.stringify(this.activeItemId))
        },

        createItem(): void {
            const newItem: NotesItem = {
                id: Date.now(),
                title: 'Untitled',
                text: '',
                itemIsActive: true
            }

            this.notesItems.push(newItem)
            this.filteredNotesItems.push(newItem)
            this.saveToLocalStorage()
            this.setId(newItem.id)
            this.resetTextToDefault()
        },

        readItem(): void {
            const activeItem = this.getActiveItem
            if (activeItem) {
                this.notesText = activeItem.text
                this.notesTitle = activeItem.title
            }
        },

        updateTitle(): void {
            const activeItem = this.getActiveItem
            if (activeItem) {
                activeItem.title = this.notesTitle
                this.saveToLocalStorage()
            }
        },

        updateText(): void {
            const activeItem = this.getActiveItem
            if (activeItem) {
                activeItem.text = this.notesText
                this.saveToLocalStorage()
            }
        },

        setId(id: number): void {
            this.activeItemId = id
            this.saveToLocalStorage()
        },

        resetTextToDefault(): void {
            this.notesTitle = 'Untitled'
            this.notesText = ''
        },

        deleteItem(): void {
            const index = this.notesItems.findIndex((item) => item.id === this.activeItemId)

            if (index !== -1) {
                this.notesItems.splice(index, 1)
                this.filteredNotesItems.splice(index, 1)
                this.saveToLocalStorage()

                if (index > 0) {
                    this.activeItemId = this.notesItems[index - 1]?.id
                } else if (this.notesItems.length > 0) {
                    this.activeItemId = this.notesItems[0].id
                } else {
                    this.activeItemId = 0
                    this.resetTextToDefault()
                }
            }
            this.readItem()
        },

        searchItems() {
            if (this.searchText === '') {
                this.filteredNotesItems = [...this.notesItems]
            } else {
                this.filteredNotesItems = this.notesItems.filter(
                    (item) =>
                        item.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
                        item.text.toLowerCase().includes(this.searchText.toLowerCase())
                )
            }
        }
    },

    getters: {
        getActiveItem: (state): NotesItem | undefined => {
            return state.notesItems.find((item) => item.id === state.activeItemId)
        },

        itemsListIsEmpty: (state): boolean => {
            return state.notesItems.length === 0
        }
    }
})
