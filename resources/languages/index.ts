/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Jun 10 2024
 *   file: index.ts
 *   project: Bible Reference Index
 *   purpose: Metadata Entry Point
 *
 */

import type { BookMetadata } from "../utilities.js";
import { Metadata_EN } from "./en/index.js";

/**
 * Enumerates the supported languages. \
 * `Language.English` = `"EN"`
 * @readonly
 * @enum {string}
 */
export enum Language {
    English = "EN",
}

/**
 * Maps language codes to their corresponding metadata.
 * @type {{[Language]: readonly BookMetadata[]}}}
 */
export const Metadata: { [key in Language]: readonly BookMetadata[] } =
    Object.freeze({
        [Language.English]: Metadata_EN,
    });

// For everything in the world—the lust of the flesh, the lust of the eyes, and
// the pride of life—comes not from the Father but from the world.
// - 1 John 2:16
