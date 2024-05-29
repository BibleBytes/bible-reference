import { Book, BookMetadata } from "../../resources/index.js";


/**
 * Retrieves book metadata by ID or name.
 * @param {readonly BookMetadata[]} metadata - An array of book metadata.
 * @param {number | Book} id - The ID or index of the book to retrieve.
 * @returns {BookMetadata | undefined} The metadata of the book if found, otherwise undefined.
 */
export function GetBook(metadata:readonly BookMetadata[], id:number|Book):BookMetadata|undefined {
    // FIXME - Make language instead
    if (typeof id === "number") {
        if (id < 0 || id >= metadata.length) {
            return undefined;
        }
        return metadata[id];
    }
    return metadata.find(b => b.name === id);
}


/**
 * Retrieves book metadata for multiple IDs or names.
 * @param {readonly BookMetadata[]} metadata - An array of book metadata.
 * @param {(number | Book)[]} [ids] - An optional array of IDs or indexes of the books to retrieve.
 * @returns {readonly BookMetadata[]} An array containing the metadata of the specified books.
 */
export function GetAllBooks(metadata:readonly BookMetadata[], ids?:(number|Book)[]):readonly BookMetadata[] {
    // FIXME - Make language instead
    if (!ids) {
        return metadata;
    }
    return Object.freeze(ids.map(id => GetBook(metadata, id)).filter(b => b !== undefined) as BookMetadata[]);
}

