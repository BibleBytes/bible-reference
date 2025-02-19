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

import type { Book, Language } from "../../resources/index.js";
import { GetBook } from "../book/index.js";
import { parse } from "./parse.js";
import { unpack } from "./unpack.js";

export class Reference {
    private language: Language;
    private book: Book;
    private chapter: number;
    private verse?: number;
    private verseEnd?: number;

    /**
     * Creates an instance of Reference.
     * @param {Language} language - The language of the reference
     * @param {string} buffer - The reference string to parse
     * @throws {Error} If the reference string is invalid
     * @example
     * // Valid reference strings
     * const ref1 = new Reference(Language.English, "GEN 1:1");
     * const ref2 = new Reference(Language.English, "EXO 2:5-10");
     * const ref3 = new Reference(Language.English, "PSM:23:1-6");
     */
    public constructor(language: Language, buffer: string) {
        this.language = language;
        this.set(buffer);
    }

    /**
     * Sets the reference based on the reference string.
     * @param {string} buffer - The reference string to parse
     * @throws {Error} If the reference string format is invalid
     * @example
     * const ref = new Reference(Language.English, "GEN:1");
     * ref.Set("MAT:5:9");
     * ref.Set("Revelation 21:3-4");
     */
    public set(buffer: string) {
        const reference = parse(this.language, buffer);
        this.book = reference.book;
        this.chapter = reference.chapter;
        this.verse = reference.verse;
        this.verseEnd = reference.verseEnd;
    }

    /**
     * Get the language for the reference.
     * @returns {Language} - Language of Reference
     * @example
     * const ref = new Reference(Language.English, "GEN:1");
     * ref.getLanguage(); // Language.English
     */
    public getLanguage(): Language {
        return this.language;
    }

    /**
     * Get the book of the Bible for the reference.
     * @returns {Book} - Book of Reference
     * @example
     * const ref = new Reference(Language.English, "GEN:1");
     * ref.getBook(); // Book.Genesis
     */
    public getBook(): Book {
        return this.book;
    }

    /**
     * Get the chapter for the reference.
     * @returns {number} - chapter of Reference
     * @example
     * const ref = new Reference(Language.English, "GEN:1");
     * ref.getChapter(); // 1
     */
    public getChapter(): number {
        return this.chapter;
    }

    /**
     * Get the verse for the reference.
     * @returns {number|undefined} - verse of Reference
     * @example
     * const ref1 = new Reference(Language.English, "GEN:1:2");
     * ref1.getVerse(); // 2
     * const ref2 = new Reference(Language.English, "GEN:1");
     * ref2.getVerse(); // undefined
     */
    public getVerse(): number | undefined {
        return this.verse;
    }

    /**
     * Get the verse end range for the reference.
     * @returns {number|undefined} - verse end of Reference
     * @example
     * const ref1 = new Reference(Language.English, "GEN:1:2-3");
     * ref1.getVerseEnd(); // 3
     * const ref2 = new Reference(Language.English, "GEN:1:2");
     * ref2.getVerseEnd(); // undefined
     */
    public getVerseEnd(): number | undefined {
        return this.verseEnd;
    }

    /**
     * Gets the list of individual single verses from the reference. Ranging
     * from the chapter start to chapter end and verse start to verse end.
     * @returns {Reference[]} list of reference verses
     * @example
     * const ref1 = new Reference(Language.English, "GEN 1:1-4");
     * ref1.unpack(); // ["GEN:1:1", "GEN:1:2", "GEN:1:3", "GEN:1:4"]
     * const ref2 = new Reference(Language.English, "GEN 1");
     * ref2.unpack(); // ["GEN:1:1", "GEN:1:2", "GEN:1:3", "GEN:1:4", ...]
     */
    public unpack(): Reference[] {
        return unpack(this.language, {
            book: this.book,
            chapter: this.chapter,
            verse: this.verse,
            verseEnd: this.verseEnd,
        });
    }

    /**
     * Converts the reference to a string representation.
     * @param {boolean} [humanReadable] - If true, returns a human-readable string
     * @returns {string} The string representation of the reference
     * @example
     * const ref = new Reference(Language.English, "MAT 5:9-10");
     * ref.toString(); // "MAT:5:9-10"
     * ref.toString(true); // "Matthew 5:9-10"
     */
    public toString(humanReadable?: boolean): string {
        let buffer = `${this.book}:`;
        if (humanReadable) {
            const metadata = GetBook(this.language, this.book);
            buffer = `${metadata.name} `;
        }
        buffer += this.chapter;
        if (this.verse) {
            buffer += `:${this.verse}`;
        }
        if (this.verseEnd) {
            buffer += `-${this.verseEnd}`;
        }
        return buffer;
    }

    /**
     * Build a reference from properties.
     * @param {Language} language - The language of the reference
     * @param {Book} book - The reference book
     * @param {number} chapter - The reference chapter
     * @param {number} [verse] - The reference verse
     * @param {number} [verseEnd] - The reference verse end
     * @returns {Reference} reference verse
     * @throws {Error} If the reference is invalid
     * @example
     * Reference.build(Language.English, Book.Genesis, 1);        // "GEN:1"
     * Reference.build(Language.English, Book.Genesis, 1, 2);     // "GEN:1:2"
     * Reference.build(Language.English, Book.Genesis, 1, 2, 3);  // "GEN:1:2-3"
     */
    public static build(
        language: Language,
        book: Book,
        chapter: number,
        verse?: number,
        verseEnd?: number,
    ): Reference {
        let buffer = `${book}:${chapter}`;
        if (verse) {
            buffer += `:${verse}`;
        }
        if (verseEnd) {
            buffer += `-${verseEnd}`;
        }
        return new Reference(language, buffer);
    }
}

// Jesus looked at them and said, "With man this is impossible, but not with
// God; all things are possible with God."
// - Mark 10:27
