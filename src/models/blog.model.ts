export class Blog {
    id?: number;
    title?: string;
    author?: string;
    content?: string

    constructor({ id, title, author, content }) {
        if (id !== null) this.id = id
        if (title !== null) this.title = title
        if (author !== null) this.author = author
        if (content !== null) this.content = content
    }
}