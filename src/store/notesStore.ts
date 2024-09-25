import { useSetFocus } from '@/hooks/useSetFocus'
import { defineStore } from 'pinia'
import { nextTick, ref } from 'vue'

interface NotesItem {
    id: number
    title: string
    text: string
}

const { setFocus } = useSetFocus()

export const useStore = defineStore('storeBase', {
    state: () => {
        return {
            activeItemId: 0,
            notesTitle: 'Untitled',
            notesText: '',
            searchText: '',
            notesItems: [] as NotesItem[],
            filteredNotesItems: [] as NotesItem[],
            textArea: ref<HTMLTextAreaElement | null>(null),
            titleInput: ref<HTMLInputElement | null>(null),
            btnAdd: ref<HTMLButtonElement | null>(null),
            sideBar: ref<HTMLElement | null>(null),
            isDisabled: false,
            testt: false
        }
    },

    actions: {
        createItem(): void {
            const newItem: NotesItem = {
                id: Date.now(),
                title: 'Untitled',
                text: ''
            }

            this.notesItems.push(newItem)
            this.filteredNotesItems.push(newItem)
            this.setId(newItem.id)
            this.resetTextToDefault()
            setFocus(this.titleInput as HTMLElement)
            nextTick(() => this.highLightTitle())
            this.isDisabled = false
            nextTick(() => this.scrollSibebarToBottom())
        },

        scrollSibebarToBottom() {
            if (this.sideBar) {
                const elemHeight = this.sideBar?.clientHeight
                const scrollHeight = this.sideBar?.scrollHeight
                if (scrollHeight > elemHeight) {
                    this.sideBar?.scrollTo({
                        top: this.sideBar.scrollHeight
                    })
                }
            }
        },

        highLightTitle() {
            if (this.titleInput) {
                this.titleInput.setSelectionRange(0, 8)
            }
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
            }
        },

        updateText(): void {
            const activeItem = this.getActiveItem
            if (activeItem) {
                activeItem.text = this.notesText
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
                // delete item
                this.notesItems.splice(index, 1)
                this.filteredNotesItems.splice(index, 1)

                // if deleted NOT first item
                if (index > 0) {
                    this.activeItemId = this.notesItems[index - 1]?.id
                    // if deleted fitst item
                } else if (this.notesItems.length > 0) {
                    this.activeItemId = this.notesItems[0].id
                    // reset active item
                } else {
                    this.activeItemId = 0
                    this.resetTextToDefault()
                    nextTick(() => {
                        setFocus(this.btnAdd as HTMLElement)
                        this.isDisabled = true
                    })
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
        }
    }
})
