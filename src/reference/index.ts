import {
    type Book,
    Books,
    type Language,
    Metadata,
} from "../../resources/index.js";
import { GetBook } from "../book/index.js";

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
        const bookMetadata = GetBook(this.language, this.book);
        if (!bookMetadata) {
            return false;
        }

        const chapterIndex = this.chapter - 1;
        if (chapterIndex < 0 || chapterIndex >= bookMetadata.chapters.length) {
            return false;
        }

        const maxVerses = bookMetadata.chapters[chapterIndex];
        if (this.verse < 1 || this.verse > maxVerses) {
            return false;
        }

        if (this.verseEnd !== undefined) {
            if (this.verseEnd < this.verse || this.verseEnd > maxVerses) {
                return false;
            }
        }

        return true;
    }

    public toString(pretty?: boolean) {
        if (!this.IsValid()) {
            return "INVALID";
        }
        if (pretty) {
            const bookName = Metadata[this.language][this.book];
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
            throw new Error("Invalid book abbreviation");
        }

        const chapter = Number.parseInt(sections[1], 10);
        if (Number.isNaN(chapter)) {
            throw new Error("Invalid chapter number");
        }

        const verse = Number.parseInt(sections[2], 10);
        if (Number.isNaN(verse)) {
            throw new Error("Invalid verse start number");
        }

        let verseEnd: number | undefined;
        if (sections.length === 4) {
            verseEnd = Number.parseInt(sections[3], 10);
            if (Number.isNaN(verseEnd)) {
                throw new Error("Invalid verse end number");
            }
        }

        return [book, chapter, verse, verseEnd];
    }
}
