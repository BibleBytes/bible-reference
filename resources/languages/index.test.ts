import { expect } from "chai";
import { Language } from "../index.js";
import { Metadata } from "./index.js";

describe("Languages", () => {
    it("Genesis (English)", () => {
        const book = Metadata[Language.English][0];
        expect(book.name).to.equal("Genesis");
        expect(book.chapters[0]).to.equal(31);
        expect(book.chapters[19]).to.equal(18);
        expect(book.chapters[31]).to.equal(32);
        expect(book.chapters[49]).to.equal(26);
    });

    it("Exodus (English)", () => {
        const book = Metadata[Language.English][1];
        expect(book.name).to.equal("Exodus");
        expect(book.chapters[0]).to.equal(22);
        expect(book.chapters[10]).to.equal(10);
        expect(book.chapters[20]).to.equal(36);
        expect(book.chapters[39]).to.equal(38);
    });

    it("Leviticus (English)", () => {
        const book = Metadata[Language.English][2];
        expect(book.name).to.equal("Leviticus");
        expect(book.chapters[0]).to.equal(17);
        expect(book.chapters[5]).to.equal(30);
        expect(book.chapters[10]).to.equal(47);
        expect(book.chapters[26]).to.equal(34);
    });

    it("Numbers (English)", () => {
        const book = Metadata[Language.English][3];
        expect(book.name).to.equal("Numbers");
        expect(book.chapters[0]).to.equal(54);
        expect(book.chapters[10]).to.equal(35);
        expect(book.chapters[20]).to.equal(35);
        expect(book.chapters[35]).to.equal(13);
    });

    it("Deuteronomy (English)", () => {
        const book = Metadata[Language.English][4];
        expect(book.name).to.equal("Deuteronomy");
        expect(book.chapters[0]).to.equal(46);
        expect(book.chapters[10]).to.equal(32);
        expect(book.chapters[20]).to.equal(23);
        expect(book.chapters[33]).to.equal(12);
    });

    it("Joshua (English)", () => {
        const book = Metadata[Language.English][5];
        expect(book.name).to.equal("Joshua");
        expect(book.chapters[0]).to.equal(18);
        expect(book.chapters[10]).to.equal(23);
        expect(book.chapters[15]).to.equal(10);
        expect(book.chapters[23]).to.equal(33);
    });

    it("Judges (English)", () => {
        const book = Metadata[Language.English][6];
        expect(book.name).to.equal("Judges");
        expect(book.chapters[0]).to.equal(36);
        expect(book.chapters[5]).to.equal(40);
        expect(book.chapters[10]).to.equal(40);
        expect(book.chapters[20]).to.equal(25);
    });

    it("Ruth (English)", () => {
        const book = Metadata[Language.English][7];
        expect(book.name).to.equal("Ruth");
        expect(book.chapters[0]).to.equal(22);
        expect(book.chapters[1]).to.equal(23);
        expect(book.chapters[2]).to.equal(18);
        expect(book.chapters[3]).to.equal(22);
    });

    it("1 Samuel (English)", () => {
        const book = Metadata[Language.English][8];
        expect(book.name).to.equal("1 Samuel");
        expect(book.chapters[0]).to.equal(28);
        expect(book.chapters[10]).to.equal(15);
        expect(book.chapters[20]).to.equal(15);
        expect(book.chapters[30]).to.equal(13);
    });

    it("2 Samuel (English)", () => {
        const book = Metadata[Language.English][9];
        expect(book.name).to.equal("2 Samuel");
        expect(book.chapters[0]).to.equal(27);
        expect(book.chapters[10]).to.equal(27);
        expect(book.chapters[20]).to.equal(22);
        expect(book.chapters[23]).to.equal(25);
    });

    it("1 Kings (English)", () => {
        const book = Metadata[Language.English][10];
        expect(book.name).to.equal("1 Kings");
        expect(book.chapters[0]).to.equal(53);
        expect(book.chapters[10]).to.equal(43);
        expect(book.chapters[15]).to.equal(34);
        expect(book.chapters[21]).to.equal(53);
    });

    it("2 Kings (English)", () => {
        const book = Metadata[Language.English][11];
        expect(book.name).to.equal("2 Kings");
        expect(book.chapters[0]).to.equal(18);
        expect(book.chapters[10]).to.equal(21);
        expect(book.chapters[15]).to.equal(20);
        expect(book.chapters[24]).to.equal(30);
    });

    it("1 Chronicles (English)", () => {
        const book = Metadata[Language.English][12];
        expect(book.name).to.equal("1 Chronicles");
        expect(book.chapters[0]).to.equal(54);
        expect(book.chapters[10]).to.equal(47);
        expect(book.chapters[20]).to.equal(30);
        expect(book.chapters[28]).to.equal(30);
    });

    it("2 Chronicles (English)", () => {
        const book = Metadata[Language.English][13];
        expect(book.name).to.equal("2 Chronicles");
        expect(book.chapters[0]).to.equal(17);
        expect(book.chapters[10]).to.equal(23);
        expect(book.chapters[20]).to.equal(20);
        expect(book.chapters[35]).to.equal(23);
    });

    it("Ezra (English)", () => {
        const book = Metadata[Language.English][14];
        expect(book.name).to.equal("Ezra");
        expect(book.chapters[0]).to.equal(11);
        expect(book.chapters[3]).to.equal(24);
        expect(book.chapters[6]).to.equal(28);
        expect(book.chapters[9]).to.equal(44);
    });

    it("Nehemiah (English)", () => {
        const book = Metadata[Language.English][15];
        expect(book.name).to.equal("Nehemiah");
        expect(book.chapters[0]).to.equal(11);
        expect(book.chapters[3]).to.equal(23);
        expect(book.chapters[6]).to.equal(73);
        expect(book.chapters[12]).to.equal(31);
    });

    it("Esther (English)", () => {
        const book = Metadata[Language.English][16];
        expect(book.name).to.equal("Esther");
        expect(book.chapters[0]).to.equal(22);
        expect(book.chapters[3]).to.equal(17);
        expect(book.chapters[6]).to.equal(10);
        expect(book.chapters[9]).to.equal(3);
    });

    it("Job (English)", () => {
        const book = Metadata[Language.English][17];
        expect(book.name).to.equal("Job");
        expect(book.chapters[0]).to.equal(22);
        expect(book.chapters[10]).to.equal(20);
        expect(book.chapters[20]).to.equal(34);
        expect(book.chapters[41]).to.equal(17);
    });

    it("Psalms (English)", () => {
        const book = Metadata[Language.English][18];
        expect(book.name).to.equal("Psalms");
        expect(book.chapters[0]).to.equal(6);
        expect(book.chapters[50]).to.equal(19);
        expect(book.chapters[100]).to.equal(8);
        expect(book.chapters[149]).to.equal(6);
    });

    it("Proverbs (English)", () => {
        const book = Metadata[Language.English][19];
        expect(book.name).to.equal("Proverbs");
        expect(book.chapters[0]).to.equal(33);
        expect(book.chapters[10]).to.equal(31);
        expect(book.chapters[20]).to.equal(31);
        expect(book.chapters[30]).to.equal(31);
    });
});
