/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Jun 10 2024
 *   file: index.ts
 *   project: Bible Reference Index
 *   purpose: Reference Class
 *
 */

import { type Book, Books, type Language } from "../../resources/index.js";
import { GetBook } from "../book/index.js";

export class Reference {
    public language: Language;
    public book: Book = Books[0];
    public chapter = 1;
    public verse = 1;
    public verseEnd?: number;

    /**
     * Creates an instance of Reference.
     * @param {Language} language - The language of the reference.
     * @param {string} [reference] - The reference string to parse.
     * @throws {Error} If the reference string is invalid.
     * @example
     * // Valid reference strings
     * const ref1 = new Reference(Language.English, "GEN 1:1");
     * const ref2 = new Reference(Language.English, "EXO 2:5-10");
     * const ref3 = new Reference(Language.English, "PSM:23:1-6");
     */
    public constructor(language: Language, reference?: string) {
        this.language = language;
        if (reference) {
            this.Set(reference);
        }
    }

    /**
     * Sets the reference details by parsing the reference string.
     * @param {string} reference - The reference string to parse.
     * @throws {Error} If the reference string format is invalid.
     * @example
     * const ref = new Reference(Language.English);
     * ref.Set("MAT:5:9");
     * ref.Set("REV 21:3-4");
     */
    public Set(reference: string) {
        const [book, chapter, verse, verseEnd] = this.Parse(reference);
        this.book = book;
        this.chapter = chapter;
        this.verse = verse;
        this.verseEnd = verseEnd;
        const error = this.IsValid();
        if (error !== undefined) {
            throw new Error(error);
        }
    }

    /**
     * Gets the error message if the reference is invalid.
     * @returns {string | undefined} The error message if invalid, otherwise undefined.
     */
    public IsValid(): string | undefined {
        const bookMetadata = GetBook(this.language, this.book);
        if (!bookMetadata) {
            return `Invalid book "${this.book}"`;
        }

        const chapterIndex = this.chapter - 1;
        if (chapterIndex < 0 || chapterIndex >= bookMetadata.chapters.length) {
            return `Invalid chapter number for ${bookMetadata.name}`;
        }

        const maxVerses = bookMetadata.chapters[chapterIndex];
        if (this.verse < 1 || this.verse > maxVerses) {
            return `Invalid verse number for ${bookMetadata.name} ${this.chapter}`;
        }

        if (this.verseEnd !== undefined) {
            if (this.verseEnd <= this.verse || this.verseEnd > maxVerses) {
                return `Invalid verse end number for ${bookMetadata.name} ${this.chapter}:${this.verse}`;
            }
        }

        return undefined;
    }

    /**
     * Converts the reference to a string representation.
     * @param {boolean} [pretty] - If true, returns a human-readable string.
     * @returns {string} The string representation of the reference.
     * @example
     * const ref = new Reference(Language.English, "MAT 5:9-10");
     * ref.toString(); // "MAT:5:9:10"
     * ref.toString(true); // "MAT 5:9-10"
     */
    public toString(pretty?: boolean): string {
        if (this.IsValid() !== undefined) {
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

    /**
     * Parses the reference string into its components.
     * @param {string} text - The reference string to parse.
     * @returns {[Book, number, number, number | undefined]} The parsed components: book, chapter, verse, and optional verseEnd.
     * @throws {Error} If the reference string format is invalid.
     */
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

// Jesus looked at them and said, "With man this is impossible, but not with
// God; all things are possible with God."
// - Mark 10:27
