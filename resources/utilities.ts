/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Jun 10 2024
 *   file: utilities.ts
 *   project: Bible Reference Index
 *   purpose: Book Metadata Utilities
 *
 */

import { type Book, Books, Testament } from "./books.js";

export type BookMetadata = {
    readonly id: Book;
    readonly index: number;
    readonly name: string;
    readonly testament: Testament;
    readonly chapters: number[];
};

export type BookMetadataPre = {
    readonly name: string;
    readonly chapters: number[];
};

export function Define(books: BookMetadataPre[]): readonly BookMetadata[] {
    return Object.freeze(
        books.map((book, index) =>
            Object.freeze({
                id: Books[index],
                index: index,
                testament: index < 39 ? Testament.Old : Testament.New,
                ...book,
            }),
        ),
    );
}

// May your unfailing love be with us, Lord, even as we put our hope in you.
// - Psalm 33:22
