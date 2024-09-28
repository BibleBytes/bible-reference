/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Jun 10 2024
 *   file: books.ts
 *   project: Bible Reference Index
 *   purpose: Books of the Bible
 *
 */

/**
 * Enumerates the testaments of the Bible. \
 * `Testament.Old` = `"OLD"` \
 * `Testament.New` = `"NEW"`
 * @readonly
 * @enum {string}
 */
export enum Testament {
    Old = "OLD",
    New = "NEW",
}

/**
 * Enumerates the books of the Bible and assigns each book an ID, regardless
 * of the language. \
 * `Book.Genesis` = `"GEN"` \
 * `Book.Exodus` = `"EXO"` \
 * `Book.leviticus` = `"LEV"` \
 * `Book.Numbers` = `"NUM"` \
 * `Book.Deuteronomy` = `"DEU"` \
 * *etc...*
 * @readonly
 * @enum {string}
 */
export enum Book {
    Genesis = "GEN",
    Exodus = "EXO",
    Leviticus = "LEV",
    Numbers = "NUM",
    Deuteronomy = "DEU",
    Joshua = "JOS",
    Judges = "JDG",
    Ruth = "RUT",
    Samuel1 = "1SA",
    Samuel2 = "2SA",
    Kings1 = "1KI",
    Kings2 = "2KI",
    Chronicles1 = "1CH",
    Chronicles2 = "2CH",
    Ezra = "EZR",
    Nehemiah = "NEH",
    Esther = "EST",
    Job = "JOB",
    Psalms = "PSA",
    Proverbs = "PRO",
    Ecclesiastes = "ECC",
    SongOfSongs = "SNG",
    Isaiah = "ISA",
    Jeremiah = "JER",
    Lamentations = "LAM",
    Ezekiel = "EZK",
    Daniel = "DAN",
    Hosea = "HOS",
    Joel = "JOL",
    Amos = "AMO",
    Obadiah = "OBA",
    Jonah = "JON",
    Micah = "MIC",
    Nahum = "NAM",
    Habakkuk = "HAB",
    Zephaniah = "ZEP",
    Haggai = "HAG",
    Zechariah = "ZEC",
    Malachi = "MAL",

    Matthew = "MAT",
    Mark = "MRK",
    Luke = "LUK",
    John = "JHN",
    Acts = "ACT",
    Romans = "ROM",
    Corinthians1 = "1CO",
    Corinthians2 = "2CO",
    Galatians = "GAL",
    Ephesians = "EPH",
    Philippians = "PHP",
    Colossians = "COL",
    Thessalonians1 = "1TH",
    Thessalonians2 = "2TH",
    Timothy1 = "1TI",
    Timothy2 = "1TI",
    Titus = "TIT",
    Philemon = "PHM",
    Hebrews = "HEB",
    James = "JAS",
    Peter1 = "1PE",
    Peter2 = "2PE",
    John1 = "1JN",
    John2 = "2JN",
    John3 = "3JN",
    Jude = "JUD",
    Revelation = "REV",
}

/**
 * An array containing all the books of the Bible.
 * @readonly
 * @type {Book[]}
 */
export const Books: readonly Book[] = Object.freeze(Object.values(Book));

/**
 * An array containing the books of the Old Testament.
 * @readonly
 * @type {Book[]}
 */
export const BooksOldTestament: readonly Book[] = Object.freeze(
    Object.values(Book).slice(0, 39),
);

/**
 * An array containing the books of the New Testament.
 * @readonly
 * @type {Book[]}
 */
export const BooksNewTestament: readonly Book[] = Object.freeze(
    Object.values(Book).slice(39),
);

// For great is your love, reaching to the heavens; your faithfulness reaches
// to the skies.
// - Psalm 57:10
