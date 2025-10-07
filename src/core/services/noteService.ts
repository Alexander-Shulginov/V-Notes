import { NotesRepo } from '@/core/repository/noteRepo'
import { type INote } from '@/core/models/INote'

export class NoteService {
    constructor(private repo: NotesRepo) {}

    createNote(title?: string, content?: string): INote {
        return this.repo.create(title, content)
    }

    deleteNote(id: number): void {
        this.repo.delete(id)
    }

    getNotes(): INote[] {
        return this.repo.getAll()
    }

    updateNote(id: number, changes: Partial<INote>) {
        const notes = this.repo.getAll()
        const note = notes.find((n) => n.id === id)
        if (!note) return
        Object.assign(note, changes)
        this.repo.saveAll(notes)
    }
}
