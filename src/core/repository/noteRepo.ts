import { type INote, Note } from '@/core/models/INote'
import { getLocalStorage, setLocalStorage } from '@/helpers/LocalStorageActions'

const STORAGE_KEY = 'notesItems'

export class NotesRepo {
    getAll(): INote[] {
        return getLocalStorage(STORAGE_KEY) || []
    }

    saveAll(notes: INote[]): void {
        setLocalStorage(STORAGE_KEY, notes)
    }

    create(title?: string, content?: string): INote {
        const newNote = new Note(Date.now(), title, content)
        const allNotes = this.getAll()
        allNotes.push(newNote)
        this.saveAll(allNotes)
        return newNote
    }

    delete(id: number): void {
        const notes = this.getAll().filter((note) => note.id !== id)
        this.saveAll(notes)
    }
}
