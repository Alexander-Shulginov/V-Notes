import { defineStore } from 'pinia'
import { type INote } from '@/core/models/INote'
import { NotesRepo } from '@/core/repository/noteRepo'
import { NoteService } from '@/core/services/noteService'

const service = new NoteService(new NotesRepo())

export const useStore = defineStore('storeBase', {
    state: () => {
        return {
            notes: [] as INote[]
        }
    },

    actions: {
        createNote() {
            const note = service.createNote()
            this.notes.push(note)
        },

        deleteNote(id: number) {
            service.deleteNote(id)
            this.notes = this.notes.filter((n) => n.id !== id)
        }
    }
})
