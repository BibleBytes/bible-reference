import {
    type Book,
    Books,
    type Language,
    Metadata,
} from "../../resources/index.js";
import { GetBook } from "../book/index.js";

// FIXME - Add js docs

const REF_FORMAT_REGEX = /^[A-Z]{3}([0-9])?([,:\-\s\.]([0-9]){1,3}){2,3}$/;

export class Reference {
    public language: Language;
    public book: Book = Books[0];
    public chapter = 1;
    public verse = 1;
    public verseEnd?: number;

    public constructor(language: Language, reference?: string) {
        this.language = language;
        if (reference) {
            this.Set(reference);
            const error = this.GetError();
            if (error !== undefined) {
                throw new Error(`Invalid reference: ${error}`);
            }
        }
    }

    public Set(reference: string) {
        const [book, chapter, verse, verseEnd] = this.Parse(reference);
        this.book = book;
        this.chapter = chapter;
        this.verse = verse;
        this.verseEnd = verseEnd;
    }

    public IsValid(): boolean {
        return this.GetError() === undefined;
    }

    public GetError(): string | undefined {
        const bookMetadata = GetBook(this.language, this.book);
        if (!bookMetadata) {
            return "Invalid book";
        }

        const chapterIndex = this.chapter - 1;
        if (chapterIndex < 0 || chapterIndex >= bookMetadata.chapters.length) {
            return "Invalid chapter";
        }

        const maxVerses = bookMetadata.chapters[chapterIndex];
        if (this.verse < 1 || this.verse > maxVerses) {
            return "Invalid verse";
        }

        if (this.verseEnd !== undefined) {
            if (this.verseEnd <= this.verse || this.verseEnd > maxVerses) {
                return "Invalid verse range";
            }
        }

        return undefined;
    }

    public toString(pretty?: boolean) {
        if (!this.IsValid()) {
            return "INVALID";
        }
        if (pretty) {
            const bookName = GetBook(this.language, this.book)?.name;
            return `${bookName} ${this.chapter}:${this.verse}${
                this.verseEnd ? `-${this.verseEnd}` : ""
            }`;
        }
        return `${this.book}:${this.chapter}:${this.verse}${
            this.verseEnd ? `:${this.verseEnd}` : ""
        }`;
    }

    private Parse(text: string): [Book, number, number, number | undefined] {
        const sections = text.split(/[,:-\s\.]/);
        if (sections.length !== 3 && sections.length !== 4) {
            throw new Error("Invalid format: incorrect number of sections");
        }

        const book = sections[0] as Book;
        if (!Books.includes(book)) {
            throw new Error("Invalid format: invalid book abbreviation");
        }

        const chapter = Number.parseInt(sections[1], 10);
        if (Number.isNaN(chapter)) {
            throw new Error("Invalid format: invalid chapter number");
        }

        const verse = Number.parseInt(sections[2], 10);
        if (Number.isNaN(verse)) {
            throw new Error("Invalid format: invalid verse start number");
        }

        let verseEnd: number | undefined;
        if (sections.length === 4) {
            verseEnd = Number.parseInt(sections[3], 10);
            if (Number.isNaN(verseEnd)) {
                throw new Error("Invalid format: invalid verse end number");
            }
        }

        return [book, chapter, verse, verseEnd];
    }
}
