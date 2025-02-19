/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Feb 3 2025
 *   file: model.ts
 *   project: Bible Reference Index
 *   purpose: Internal Reference Model
 *
 */

import type { Book } from "../../resources/index.js";

export type InternalReference = {
    book: Book;
    chapter: number;
    verse?: number;
    verseEnd?: number;
};

// Whoever sows to please their flesh, from the flesh will reap
// destruction; whoever sows to please the Spirit, from the Spirit
// will reap eternal life.
// - Galatians 6:8
