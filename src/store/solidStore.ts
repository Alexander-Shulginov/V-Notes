import { defineStore } from 'pinia'
import { type INote } from '@/core/domain/INote'
import { NotesRepo } from '@/core/infrastructure/repository/noteRepo'
import { NoteService } from '@/core/application/services/noteService'

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
