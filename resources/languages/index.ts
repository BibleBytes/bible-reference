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
