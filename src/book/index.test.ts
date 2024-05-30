import { Book, Language, Metadata } from "../../resources/index.js";
import { GetBook } from "./index.js";
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
});
