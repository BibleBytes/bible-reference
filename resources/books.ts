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
    Joshua = "JSH",
    Judges = "JDG",
    Ruth = "RTH",
    Samuel1 = "SAM1",
    Samuel2 = "SAM2",
    Kings1 = "KGS1",
    Kings2 = "KGS2",
    Chronicles1 = "CHR1",
    Chronicles2 = "CHR2",
    Ezra = "EZR",
    Nehemiah = "NEH",
    Esther = "EST",
    Job = "JOB",
    Psalms = "PSM",
    Proverbs = "PRV",
    Ecclesiastes = "ECC",
    SongOfSolomon = "SOS",
    Isaiah = "ISA",
    Jeremiah = "JER",
    Lamentations = "LAM",
    Ezekiel = "EZK",
    Daniel = "DAN",
    Hosea = "HOS",
    Joel = "JOL",
    Amos = "AMS",
    Obadiah = "OBA",
    Jonah = "JNA",
    Micah = "MIC",
    Nahum = "NAH",
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
    Corinthians1 = "COR1",
    Corinthians2 = "COR2",
    Galatians = "GAL",
    Ephesians = "EPH",
    Philippians = "PHP",
    Colossians = "COL",
    Thessalonians1 = "THE1",
    Thessalonians2 = "THE2",
    Timothy1 = "TIM1",
    Timothy2 = "TIM2",
    Titus = "TIT",
    Philemon = "PHM",
    Hebrews = "HEB",
    James = "JAS",
    Peter1 = "PET1",
    Peter2 = "PET2",
    John1 = "JHN1",
    John2 = "JHN2",
    John3 = "JHN3",
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
