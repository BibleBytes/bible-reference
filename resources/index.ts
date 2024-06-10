/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Jun 10 2024
 *   file: index.ts
 *   project: Bible Reference Index
 *   purpose: Resource Entry Point
 *
 */

import {
    Book,
    Books,
    BooksNewTestament,
    BooksOldTestament,
    Testament,
} from "./books.js";
import { Language, Metadata } from "./languages/index.js";
import type { BookMetadata } from "./utilities.js";

export type { BookMetadata };

export {
    Testament,
    Book,
    Books,
    BooksOldTestament,
    BooksNewTestament,
    Language,
    Metadata,
};

// For this reason a man will leave his father and mother and be united to
// his wife, and the two will become one flesh.
// - Ephesians 5:31
