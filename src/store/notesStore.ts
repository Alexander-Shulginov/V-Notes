import { defineStore } from 'pinia'

interface NotesItem {
    id: number
    title: string
    text: string
    itemIsActive: false
}

export const useStore = defineStore('storeBase', {
    state: () => {
        return {
            activeItemId: 0,
            notesTitle: 'Untitled',
            notesText: '',
            searchText: '',
            notesItems: JSON.parse(localStorage.getItem('notesItems') || '[]') as NotesItem[],
            filteredNotesItems: JSON.parse(
                localStorage.getItem('notesItems') || '[]'
            ) as NotesItem[]
        }
    },

    actions: {
        saveToLocalStorage() {
            localStorage.setItem('notesItems', JSON.stringify(this.notesItems))
        },

        createItem(): void {
            const newItem: NotesItem = {
                id: Date.now(),
                title: 'Untitled',
                text: '',
                itemIsActive: false
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

// Подключаем автосохранение при изменении списка заметок
// persist: {
//     enabled: true
// }
// Добавляем наблюдатель для автоматического сохранения изменений
// watch(
//     () => useStore().notesItems,
//     (newNotesItems) => {
//         localStorage.setItem('notesItems', JSON.stringify(newNotesItems))
//     },
//     { deep: true }
// )
