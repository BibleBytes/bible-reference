/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Feb 3 2025
 *   file: parse.ts
 *   project: Bible Reference Index
 *   purpose: Parse Reference String
 *
 */

import { type Book, Books, type Language } from "../../resources/index.js";
import { GetBook } from "../book/index.js";
import type { InternalReference } from "./model.js";

const REGEX_CHAPTER = /^(?<chapterStart>[0-9]{1,3})$/;
const REGEX_VERSE = /^(?<chapterStart>[0-9]{1,3}):(?<verseStart>[0-9]{1,3})$/;
const REGEX_VERSE_RANGE =
    /^(?<chapterStart>[0-9]{1,3}):(?<verseStart>[0-9]{1,3})-(?<verseEnd>[0-9]{1,3})$/;

export function parse(language: Language, buffer: string): InternalReference {
    const reference = getReference(language, buffer);
    const error = validateReference(language, reference);
    if (error) {
        throw new Error(`Error: ${error} - ${JSON.stringify(reference)}`);
    }
    return reference;
}

function getReference(language: Language, buffer: string): InternalReference {
    const book = parseBook(language, buffer);
    if (!book) {
        throw new Error("Invalid format: invalid book abbreviation");
    }

    let verseBuffer = buffer.slice(book.value.length);
    if (!verseBuffer.startsWith(":") && !verseBuffer.startsWith(" ")) {
        throw new Error("Invalid format: missing delimiter before chapter");
    }
    verseBuffer = verseBuffer.slice(1);

    let match = verseBuffer.match(REGEX_CHAPTER);
    if (match) {
        return {
            book: book.id,
            chapter: parseNumber(match?.groups?.chapterStart) as number,
            verse: undefined,
            verseEnd: undefined,
        };
    }

    match = verseBuffer.match(REGEX_VERSE);
    if (match) {
        return {
            book: book.id,
            chapter: parseNumber(match?.groups?.chapterStart) as number,
            verse: parseNumber(match?.groups?.verseStart),
            verseEnd: undefined,
        };
    }

    match = verseBuffer.match(REGEX_VERSE_RANGE);
    if (match) {
        return {
            book: book.id,
            chapter: parseNumber(match?.groups?.chapterStart) as number,
            verse: parseNumber(match?.groups?.verseStart),
            verseEnd: parseNumber(match?.groups?.verseEnd),
        };
    }

    throw new Error("Invalid format");
}

function parseBook(
    language: Language,
    buffer: string,
): { id: Book; value: string } | undefined {
    for (const bookID of Books) {
        if (bufferStartsWithBook(buffer, bookID)) {
            return {
                id: bookID as Book,
                value: bookID,
            };
        }
    }
    for (const bookID of Books) {
        const metadata = GetBook(language, bookID);
        if (bufferStartsWithBook(buffer, metadata.name)) {
            return {
                id: bookID as Book,
                value: metadata.name,
            };
        }
    }
    return undefined;
}

function bufferStartsWithBook(buffer: string, bookValue: string): boolean {
    const _buffer = buffer.toLocaleLowerCase();
    const _bookValue = bookValue.toLocaleLowerCase();
    if (_buffer.startsWith(`${_bookValue}:`)) {
        return true;
    }
    if (_buffer.startsWith(`${_bookValue} `)) {
        return true;
    }
    return false;
}

function parseNumber(buffer: string | undefined): number | undefined {
    if (buffer) {
        return Number.parseInt(buffer);
    }
    return undefined;
}

function validateReference(
    language: Language,
    reference: InternalReference,
): string | undefined {
    const bookMetadata = GetBook(language, reference.book);
    if (!bookMetadata) {
        return "Invalid book";
    }

    const chapterIndexStart = reference.chapter - 1;
    const lastVerseStart = bookMetadata.chapters[chapterIndexStart];
    if (
        chapterIndexStart < 0 ||
        chapterIndexStart >= bookMetadata.chapters.length
    ) {
        return "Invalid chapter";
    }

    if (reference.verse !== undefined) {
        if (reference.verse < 1 || reference.verse > lastVerseStart) {
            return "Invalid verse";
        }
    }

    if (reference.verseEnd !== undefined) {
        if (
            reference.verseEnd <= reference.verse ||
            reference.verseEnd > lastVerseStart
        ) {
            return "Invalid verse end";
        }
    }

    return undefined;
}

// Surely the righteous will never be shaken; they will be remembered forever.
// - Psalm 112:6
