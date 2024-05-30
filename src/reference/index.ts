import { GetBook } from "../book/index.js";
import { Book, Books, Language, Metadata } from "../../resources/index.js";


export class Reference {

    
    public language: Language;
    public book: Book = Books[0];
    public chapter: number = 1;
    public verse: number = 1;
    public verseEnd?: number;


    public constructor(language:Language, reference?:string) {
        this.language = language;
        if (reference) {
            this.Set(reference);
        }
    }


    public Set(reference:string) {
        let [book, chapter, verse, verseEnd] = this.Parse(reference);
        this.book = book;
        this.chapter = chapter;
        this.verse = verse;
        this.verseEnd = verseEnd;
    }


    public IsValid():boolean {
        let bookMetadata = GetBook(this.language, this.book);
        if (!bookMetadata) {
            return false;
        }

        let chapterIndex = this.chapter - 1;
        if (chapterIndex < 0 || chapterIndex >= bookMetadata.chapters.length) {
            return false;
        }

        let maxVerses = bookMetadata.chapters[chapterIndex];
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


    public toString(pretty?:boolean) {
        if (!this.IsValid()) {
            return "INVALID";
        }
        if (pretty) {
            let bookName = Metadata[this.language][this.book];
            return `${bookName} ${this.chapter}:${this.verse}${this.verseEnd ? `-${this.verseEnd}` : ""}`;
        } else {
            return `${this.book}:${this.chapter}:${this.verse}${this.verseEnd ? `:${this.verseEnd}` : ""}`;
        }
    }


    private Parse(text:string):[Book, number, number, number|undefined] {
        let sections = text.split(/[,:-\s\.]/);
        if (sections.length != 3 && sections.length != 4) {
            throw new Error("Invalid format: incorrect number of sections");
        }

        let book = sections[0] as Book;
        if (!Books.includes(book)) {
            throw new Error("Invalid book abbreviation");
        }

        let chapter = parseInt(sections[1], 10);
        if (isNaN(chapter)) {
            throw new Error("Invalid chapter number");
        }

        let verse = parseInt(sections[2], 10);
        if (isNaN(verse)) {
            throw new Error("Invalid verse start number");
        }

        let verseEnd;
        if (sections.length === 4) {
            verseEnd = parseInt(sections[3], 10);
            if (isNaN(verseEnd)) {
                throw new Error("Invalid verse end number");
            }
        }

        return [book, chapter, verse, verseEnd];
    }

}

