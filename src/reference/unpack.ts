/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Tue Feb 4 2025
 *   file: unpack.ts
 *   project: Bible Reference Index
 *   purpose: Unpack Verses
 *
 */

import type { Language } from "../../resources/index.js";
import { GetBook } from "../book/index.js";
import { Reference } from "./index.js";
import type { InternalReference } from "./model.js";

export function unpack(
    language: Language,
    reference: InternalReference,
): Reference[] {
    if (!reference.verse) {
        return unpackChapter(language, reference);
    }
    if (!reference.verseEnd) {
        return unpackVerse(language, reference);
    }
    return unpackVerseRange(language, reference);
}

function unpackChapter(
    language: Language,
    reference: InternalReference,
): Reference[] {
    const verses: Reference[] = [];
    const metadata = GetBook(language, reference.book);
    if (!metadata) return [];
    for (let i = 0; i < metadata.chapters[reference.chapter - 1]; i++) {
        verses.push(
            Reference.build(language, reference.book, reference.chapter, i + 1),
        );
    }
    return verses;
}

function unpackVerse(
    language: Language,
    reference: InternalReference,
): Reference[] {
    return [
        Reference.build(
            language,
            reference.book,
            reference.chapter,
            reference.verse,
        ),
    ];
}

function unpackVerseRange(
    language: Language,
    reference: InternalReference,
): Reference[] {
    const verses: Reference[] = [];
    if (!reference.verse || !reference.verseEnd) return [];
    for (let verse = reference.verse; verse <= reference.verseEnd; verse++) {
        verses.push(
            Reference.build(language, reference.book, reference.chapter, verse),
        );
    }
    return verses;
}

// For whoever wants to save their life will lose it, but whoever loses their
// life for me and for the gospel will save it.
// - Mark 8:35
