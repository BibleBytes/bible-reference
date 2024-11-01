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
    public chapterEnd?: number;
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
        const [book, chapter, verse, chapterEnd, verseEnd] =
            this.Parse(reference);
        this.book = book;
        this.chapter = chapter;
        this.verse = verse;
        this.chapterEnd = chapterEnd;
        this.verseEnd = verseEnd;
        const error = this.GetError();
        if (error !== undefined) {
            throw new Error(error);
        }
    }

    /**
     * Gets the error message if the reference is invalid.
     * @returns {string | undefined} The error message if invalid, otherwise undefined.
     */
    public GetError(): string | undefined {
        const bookMetadata = GetBook(this.language, this.book);
        if (!bookMetadata) {
            return "Invalid book";
        }

        const chapterIndexStart = this.chapter - 1;
        const lastVerseStart = bookMetadata.chapters[chapterIndexStart];
        if (
            chapterIndexStart < 0 ||
            chapterIndexStart >= bookMetadata.chapters.length
        ) {
            return "Invalid chapter number";
        }

        if (this.verse < 1 || this.verse > lastVerseStart) {
            return "Invalid verse number";
        }

        if (this.chapterEnd !== undefined) {
            const chapterIndexEnd = this.chapterEnd - 1;
            const lastVerseEnd = bookMetadata.chapters[chapterIndexEnd];
            if (
                this.chapterEnd <= this.chapter ||
                chapterIndexEnd >= bookMetadata.chapters.length
            ) {
                return "Invalid chapter end number";
            }

            if (this.verseEnd !== undefined) {
                if (this.verse < 1 || this.verseEnd > lastVerseEnd) {
                    return "Invalid verse end number";
                }
            } else {
                return "Missing verse end number";
            }
        } else {
            if (this.verseEnd !== undefined) {
                if (
                    this.verseEnd <= this.verse ||
                    this.verseEnd > lastVerseStart
                ) {
                    return "Invalid verse end number";
                }
            }
        }

        return undefined;
    }

    /**
     * Gets the list of individual single verses from the reference. Ranging
     * from the chapter start to chapter end and verse start to verse end.
     * @returns {Reference[]} list of reference verses
     * @example
     * const ref = new Reference(Language.English, "GEN 1:1-4");
     * ref1.Unpack(ref2); // ["GEN:1:1", "GEN:1:2", "GEN:1:3", "GEN:1:4"]
     */
    public Unpack(): Reference[] {
        const verses = [];
        const _chapterEnd = this.chapterEnd ? this.chapterEnd : this.chapter;
        const _verseEnd = this.verseEnd ? this.verseEnd : this.verse;
        const firstVerse = `${this.book}:${this.chapter}:${this.verse}`;
        const lastVerse = `${this.book}:${_chapterEnd}:${_verseEnd}`;
        let nextVerse = new Reference(this.language, firstVerse);
        while (nextVerse) {
            verses.push(nextVerse);
            if (nextVerse.toString() === lastVerse) {
                break;
            }
            nextVerse = nextVerse.getNextVerse();
        }
        return verses;
    }

    /**
     * Checks if `this` verse is followed by `nextVerse`, within the
     * same chapter. Note: does not utilize chapter end or verse end; thus
     * `GEN 1:1-2` is followed by `GEN 1:2`.
     * @param {Reference} nextVerse - verse to check if it comes after this verse
     * @returns {boolean} true if `this` verse is followed by `nextVerse`
     * @example
     * const ref1 = new Reference(Language.English, "GEN 1:1");
     * const ref2 = new Reference(Language.English, "GEN 1:2");
     * ref1.IsFollowedBy(ref2); // true
     */
    public IsFollowedBy(nextVerse: Reference): boolean {
        if (nextVerse === undefined) {
            return false;
        }
        return this.getNextVerse()?.toString() === nextVerse.toString();
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
        if (this.GetError() !== undefined) {
            return "INVALID";
        }
        if (pretty) {
            const bookName = GetBook(this.language, this.book)?.name;
            return `${bookName} ${this.chapter}:${this.verse}${
                this.verseEnd
                    ? this.chapterEnd
                        ? `-${this.chapterEnd}:${this.verseEnd}`
                        : `-${this.verseEnd}`
                    : ""
            }`;
        }
        return `${this.book}:${this.chapter}:${this.verse}${
            this.verseEnd
                ? this.chapterEnd
                    ? `:${this.chapterEnd}:${this.verseEnd}`
                    : `:${this.verseEnd}`
                : ""
        }`;
    }

    /**
     * Gets next verse, within the same chapter. Ignores verse ends and
     * chapter ends. Returns undefined if there is no next verse.
     * @returns {Reference | undefined} if next verse is valid otherwise undefined
     */
    private getNextVerse(): Reference | undefined {
        const bookMetadata = GetBook(this.language, this.book);
        if (this.verse + 1 <= bookMetadata.chapters[this.chapter - 1]) {
            return new Reference(
                this.language,
                `${this.book}:${this.chapter}:${this.verse + 1}`,
            );
        }
        if (this.chapter + 1 <= bookMetadata.chapters.length) {
            return new Reference(
                this.language,
                `${this.book}:${this.chapter + 1}:1`,
            );
        }
        return undefined;
    }

    /**
     * Parses the reference string into its components.
     * @param {string} text - The reference string to parse.
     * @returns {[Book, number, number, number | undefined, number | undefined]} The parsed components: book, chapter, verse, and optional verseEnd.
     * @throws {Error} If the reference string format is invalid.
     */
    private Parse(
        text: string,
    ): [Book, number, number, number | undefined, number | undefined] {
        const sections = text.split(/[,:-\s\.]/);
        if (
            sections.length !== 3 &&
            sections.length !== 4 &&
            sections.length !== 5
        ) {
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
        let chapterEnd: number | undefined;
        if (sections.length === 4) {
            verseEnd = Number.parseInt(sections[3], 10);
            if (Number.isNaN(verseEnd)) {
                throw new Error("Invalid format: invalid verse end number");
            }
        }

        if (sections.length === 5) {
            chapterEnd = Number.parseInt(sections[3], 10);
            if (Number.isNaN(chapterEnd)) {
                throw new Error("Invalid format: invalid chapter end number");
            }

            verseEnd = Number.parseInt(sections[4], 10);
            if (Number.isNaN(verseEnd)) {
                throw new Error("Invalid format: invalid verse end number");
            }
        }

        return [book, chapter, verse, chapterEnd, verseEnd];
    }
}

// Jesus looked at them and said, "With man this is impossible, but not with
// God; all things are possible with God."
// - Mark 10:27
