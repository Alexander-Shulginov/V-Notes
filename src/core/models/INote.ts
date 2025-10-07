export const DEFAULT_NOTE_TITLE = 'Untitled'

export interface INote {
    id: number
    title: string
    content: string
}

export class Note implements INote {
    constructor(
        public id: number,
        public title: string = DEFAULT_NOTE_TITLE,
        public content: string = ''
    ) {}

    updateTitle(newString: string) {
        this.title = newString || DEFAULT_NOTE_TITLE
    }

    updateContent(newContent: string) {
        this.content = newContent
    }
}
