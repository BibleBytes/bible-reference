import { Book, Books, Testament } from "./books.js";


export type BookMetadata = {
    readonly id: Book;
    readonly index: number;
    readonly name: string;
    readonly testament: Testament;
    readonly chapters: number[];
}


export type BookMetadataPre = {
    readonly name: string;
    readonly chapters: number[];
}


export function Define(books:BookMetadataPre[]):readonly BookMetadata[] {
    return Object.freeze(books.map((book, index) => Object.freeze({
        id: Books[index],
        index: index,
        testament: index < 39 ? Testament.Old : Testament.New,
        ...book
    })));
}

