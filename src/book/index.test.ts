import {
    Book,
    Language,
    Metadata,
    Books,
    BooksNewTestament,
    BooksOldTestament,
} from "../../resources/index.js";
import { GetAllBooks, GetBook } from "./index.js";
import { expect } from "chai";

describe("Get Book", () => {
    it("Get Genesis by index", () => {
        const book = GetBook(Language.English, 0);
        expect(book).to.deep.equal(Metadata[Language.English][0]);
    });

    it("Get Genesis by enum", () => {
        const book = GetBook(Language.English, Book.Genesis);
        expect(book).to.deep.equal(Metadata[Language.English][0]);
    });

    it("Get Genesis by ID", () => {
        const book = GetBook(Language.English, "GEN" as Book);
        expect(book).to.deep.equal(Metadata[Language.English][0]);
    });

    it("Get Micah by index", () => {
        const book = GetBook(Language.English, 32);
        expect(book).to.deep.equal(Metadata[Language.English][32]);
    });

    it("Get Micah by enum", () => {
        const book = GetBook(Language.English, Book.Micah);
        expect(book).to.deep.equal(Metadata[Language.English][32]);
    });

    it("Get Micah by ID", () => {
        const book = GetBook(Language.English, "MIC" as Book);
        expect(book).to.deep.equal(Metadata[Language.English][32]);
    });

    it("Get Revelation by index", () => {
        const book = GetBook(Language.English, 65);
        expect(book).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get Revelation by enum", () => {
        const book = GetBook(Language.English, Book.Revelation);
        expect(book).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get Revelation by ID", () => {
        const book = GetBook(Language.English, "REV" as Book);
        expect(book).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get invalid by index (out of range -1)", () => {
        const book = GetBook(Language.English, -1);
        expect(book).to.be.undefined;
    });

    it("Get invalid by index (out of range -20)", () => {
        const book = GetBook(Language.English, -20);
        expect(book).to.be.undefined;
    });

    it("Get invalid by index (out of range 66)", () => {
        const book = GetBook(Language.English, 66);
        expect(book).to.be.undefined;
    });

    it("Get invalid by index (out of range 99)", () => {
        const book = GetBook(Language.English, 999);
        expect(book).to.be.undefined;
    });

    it("Get invalid by ID (foo)", () => {
        const book = GetBook(Language.English, "foo" as Book);
        expect(book).to.be.undefined;
    });

    it("Get invalid by ID (genesis)", () => {
        const book = GetBook(Language.English, "genesis" as Book);
        expect(book).to.be.undefined;
    });

    it("Get invalid by ID (gen)", () => {
        const book = GetBook(Language.English, "gen" as Book);
        expect(book).to.be.undefined;
    });

    it("Get Genesis, Job, and Revelation by index", () => {
        const books = GetAllBooks(Language.English, [0, 17, 65]);
        expect(books[0]).to.deep.equal(Metadata[Language.English][0]);
        expect(books[1]).to.deep.equal(Metadata[Language.English][17]);
        expect(books[2]).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get Genesis, Job, and Revelation by enum", () => {
        const books = GetAllBooks(Language.English, [
            Book.Genesis,
            Book.Job,
            Book.Revelation,
        ]);
        expect(books[0]).to.deep.equal(Metadata[Language.English][0]);
        expect(books[1]).to.deep.equal(Metadata[Language.English][17]);
        expect(books[2]).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get Genesis, Job, and Revelation by ID", () => {
        const books = GetAllBooks(Language.English, [
            "GEN" as Book,
            "JOB" as Book,
            "REV" as Book,
        ]);
        expect(books[0]).to.deep.equal(Metadata[Language.English][0]);
        expect(books[1]).to.deep.equal(Metadata[Language.English][17]);
        expect(books[2]).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get Genesis, Job, and Revelation by mixed", () => {
        const books = GetAllBooks(Language.English, [
            0,
            Book.Job,
            "REV" as Book,
        ]);
        expect(books[0]).to.deep.equal(Metadata[Language.English][0]);
        expect(books[1]).to.deep.equal(Metadata[Language.English][17]);
        expect(books[2]).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get All by Empty", () => {
        const books = GetAllBooks(Language.English);
        expect(books[0]).to.deep.equal(Metadata[Language.English][0]);
        expect(books[11]).to.deep.equal(Metadata[Language.English][11]);
        expect(books[29]).to.deep.equal(Metadata[Language.English][29]);
        expect(books[37]).to.deep.equal(Metadata[Language.English][37]);
        expect(books[65]).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get All by List", () => {
        const books = GetAllBooks(Language.English, Books);
        expect(books[0]).to.deep.equal(Metadata[Language.English][0]);
        expect(books[11]).to.deep.equal(Metadata[Language.English][11]);
        expect(books[29]).to.deep.equal(Metadata[Language.English][29]);
        expect(books[37]).to.deep.equal(Metadata[Language.English][37]);
        expect(books[65]).to.deep.equal(Metadata[Language.English][65]);
    });

    it("Get All of Old Testament", () => {
        const books = GetAllBooks(Language.English, BooksOldTestament);
        expect(books[0]).to.deep.equal(Metadata[Language.English][0]);
        expect(books[29]).to.deep.equal(Metadata[Language.English][29]);
        expect(books[38]).to.deep.equal(Metadata[Language.English][38]);
    });

    it("Get All of New Testament", () => {
        const books = GetAllBooks(Language.English, BooksNewTestament);
        expect(books[0]).to.deep.equal(Metadata[Language.English][39]);
        expect(books[3]).to.deep.equal(Metadata[Language.English][42]);
        expect(books[26]).to.deep.equal(Metadata[Language.English][65]);
    });
});
