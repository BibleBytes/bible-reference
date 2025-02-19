import { expect } from "chai";
import { Book, Language } from "../../resources/index.js";
import { Reference } from "./index.js";

describe("Construct Valid - ID", () => {
    it('Construct Genesis 1 ("GEN:1")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Genesis);
        expect(ref.getChapter()).to.equal(1);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1");
        expect(ref.toString(true)).to.equal("Genesis 1");
    });

    it('Construct Exodus 3 ("EXO:3")', () => {
        const ref = new Reference(Language.English, "EXO:3");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Exodus);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("EXO:3");
        expect(ref.toString(true)).to.equal("Exodus 3");
    });

    it('Construct Leviticus 12 ("LEV:12")', () => {
        const ref = new Reference(Language.English, "LEV:12");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Leviticus);
        expect(ref.getChapter()).to.equal(12);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("LEV:12");
        expect(ref.toString(true)).to.equal("Leviticus 12");
    });

    it('Construct Psalms 119 ("PSA:119")', () => {
        const ref = new Reference(Language.English, "PSA:119");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Psalms);
        expect(ref.getChapter()).to.equal(119);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("PSA:119");
        expect(ref.toString(true)).to.equal("Psalms 119");
    });

    it('Construct Psalms 119 ("PSA:119:100")', () => {
        const ref = new Reference(Language.English, "PSA:119:100");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Psalms);
        expect(ref.getChapter()).to.equal(119);
        expect(ref.getVerse()).to.equal(100);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("PSA:119:100");
        expect(ref.toString(true)).to.equal("Psalms 119:100");
    });

    it('Construct Isaiah 40 ("ISA:40")', () => {
        const ref = new Reference(Language.English, "ISA:40");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Isaiah);
        expect(ref.getChapter()).to.equal(40);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("ISA:40");
        expect(ref.toString(true)).to.equal("Isaiah 40");
    });

    it('Construct Matthew 6 ("MAT:6")', () => {
        const ref = new Reference(Language.English, "MAT:6");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Matthew);
        expect(ref.getChapter()).to.equal(6);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("MAT:6");
        expect(ref.toString(true)).to.equal("Matthew 6");
    });

    it('Construct Romans 8 ("ROM:8")', () => {
        const ref = new Reference(Language.English, "ROM:8");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Romans);
        expect(ref.getChapter()).to.equal(8);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("ROM:8");
        expect(ref.toString(true)).to.equal("Romans 8");
    });

    it('Construct Genesis 1:1 ("GEN:1:1")', () => {
        const ref = new Reference(Language.English, "GEN:1:1");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Genesis);
        expect(ref.getChapter()).to.equal(1);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1:1");
        expect(ref.toString(true)).to.equal("Genesis 1:1");
    });

    it('Construct Exodus 2:5-10 ("EXO:2:5-10")', () => {
        const ref = new Reference(Language.English, "EXO:2:5-10");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Exodus);
        expect(ref.getChapter()).to.equal(2);
        expect(ref.getVerse()).to.equal(5);
        expect(ref.getVerseEnd()).to.equal(10);
        expect(ref.toString()).to.equal("EXO:2:5-10");
        expect(ref.toString(true)).to.equal("Exodus 2:5-10");
    });

    it('Construct Leviticus 3:15 ("LEV:3:15")', () => {
        const ref = new Reference(Language.English, "LEV:3:15");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Leviticus);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.equal(15);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("LEV:3:15");
        expect(ref.toString(true)).to.equal("Leviticus 3:15");
    });

    it('Construct Numbers 5:6-8 ("NUM:5:6-8")', () => {
        const ref = new Reference(Language.English, "NUM:5:6-8");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Numbers);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(6);
        expect(ref.getVerseEnd()).to.equal(8);
        expect(ref.toString()).to.equal("NUM:5:6-8");
        expect(ref.toString(true)).to.equal("Numbers 5:6-8");
    });

    it('Construct Deuteronomy 10:12 ("DEU:10:12")', () => {
        const ref = new Reference(Language.English, "DEU:10:12");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Deuteronomy);
        expect(ref.getChapter()).to.equal(10);
        expect(ref.getVerse()).to.equal(12);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("DEU:10:12");
        expect(ref.toString(true)).to.equal("Deuteronomy 10:12");
    });

    it('Construct Joshua 1:1-9 ("JOS:1:1-9")', () => {
        const ref = new Reference(Language.English, "JOS:1:1-9");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Joshua);
        expect(ref.getChapter()).to.equal(1);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.equal(9);
        expect(ref.toString()).to.equal("JOS:1:1-9");
        expect(ref.toString(true)).to.equal("Joshua 1:1-9");
    });

    it('Construct Judges 4:4-5 ("JDG:4:4-5")', () => {
        const ref = new Reference(Language.English, "JDG:4:4-5");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Judges);
        expect(ref.getChapter()).to.equal(4);
        expect(ref.getVerse()).to.equal(4);
        expect(ref.getVerseEnd()).to.equal(5);
        expect(ref.toString()).to.equal("JDG:4:4-5");
        expect(ref.toString(true)).to.equal("Judges 4:4-5");
    });

    it('Construct Ruth 2:8 ("RTH:2:8")', () => {
        const ref = new Reference(Language.English, "RUT:2:8");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Ruth);
        expect(ref.getChapter()).to.equal(2);
        expect(ref.getVerse()).to.equal(8);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("RUT:2:8");
        expect(ref.toString(true)).to.equal("Ruth 2:8");
    });

    it('Construct Psalms 23:1-6 ("PSA:23:1-6")', () => {
        const ref = new Reference(Language.English, "PSA:23:1-6");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Psalms);
        expect(ref.getChapter()).to.equal(23);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.equal(6);
        expect(ref.toString()).to.equal("PSA:23:1-6");
        expect(ref.toString(true)).to.equal("Psalms 23:1-6");
    });

    it('Construct Proverbs 3:5-6 ("PRO:3:5-6")', () => {
        const ref = new Reference(Language.English, "PRO:3:5-6");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Proverbs);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.equal(5);
        expect(ref.getVerseEnd()).to.equal(6);
        expect(ref.toString()).to.equal("PRO:3:5-6");
        expect(ref.toString(true)).to.equal("Proverbs 3:5-6");
    });

    it('Construct Isaiah 9:6 ("ISA:9:6")', () => {
        const ref = new Reference(Language.English, "ISA:9:6");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Isaiah);
        expect(ref.getChapter()).to.equal(9);
        expect(ref.getVerse()).to.equal(6);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("ISA:9:6");
        expect(ref.toString(true)).to.equal("Isaiah 9:6");
    });

    it('Construct Matthew 5:3-12 ("MAT:5:3-12")', () => {
        const ref = new Reference(Language.English, "MAT:5:3-12");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Matthew);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(3);
        expect(ref.getVerseEnd()).to.equal(12);
        expect(ref.toString()).to.equal("MAT:5:3-12");
        expect(ref.toString(true)).to.equal("Matthew 5:3-12");
    });

    it('Construct John 3:16 ("JHN:3:16")', () => {
        const ref = new Reference(Language.English, "JHN:3:16");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.John);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.equal(16);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("JHN:3:16");
        expect(ref.toString(true)).to.equal("John 3:16");
    });

    it('Construct Romans 8:28-30 ("ROM:8:28-30")', () => {
        const ref = new Reference(Language.English, "ROM:8:28-30");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Romans);
        expect(ref.getChapter()).to.equal(8);
        expect(ref.getVerse()).to.equal(28);
        expect(ref.getVerseEnd()).to.equal(30);
        expect(ref.toString()).to.equal("ROM:8:28-30");
        expect(ref.toString(true)).to.equal("Romans 8:28-30");
    });

    it('Construct Revelation 22:13 ("REV:22:13")', () => {
        const ref = new Reference(Language.English, "REV:22:13");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Revelation);
        expect(ref.getChapter()).to.equal(22);
        expect(ref.getVerse()).to.equal(13);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("REV:22:13");
        expect(ref.toString(true)).to.equal("Revelation 22:13");
    });

    it('Construct Isaiah 9:6-7 ("ISA:9:6-7")', () => {
        const ref = new Reference(Language.English, "ISA:9:6-7");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Isaiah);
        expect(ref.getChapter()).to.equal(9);
        expect(ref.getVerse()).to.equal(6);
        expect(ref.getVerseEnd()).to.equal(7);
        expect(ref.toString()).to.equal("ISA:9:6-7");
        expect(ref.toString(true)).to.equal("Isaiah 9:6-7");
    });

    it('Construct Jeremiah 29:11 ("JER:29:11")', () => {
        const ref = new Reference(Language.English, "JER:29:11");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Jeremiah);
        expect(ref.getChapter()).to.equal(29);
        expect(ref.getVerse()).to.equal(11);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("JER:29:11");
        expect(ref.toString(true)).to.equal("Jeremiah 29:11");
    });

    it('Construct Lamentations 3:22-23 ("LAM:3:22-23")', () => {
        const ref = new Reference(Language.English, "LAM:3:22-23");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Lamentations);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.equal(22);
        expect(ref.getVerseEnd()).to.equal(23);
        expect(ref.toString()).to.equal("LAM:3:22-23");
        expect(ref.toString(true)).to.equal("Lamentations 3:22-23");
    });

    it('Construct Ezekiel 37:4 ("EZK:37:4")', () => {
        const ref = new Reference(Language.English, "EZK:37:4");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Ezekiel);
        expect(ref.getChapter()).to.equal(37);
        expect(ref.getVerse()).to.equal(4);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("EZK:37:4");
        expect(ref.toString(true)).to.equal("Ezekiel 37:4");
    });

    it('Construct Genesis 3:15 ("GEN:3:15")', () => {
        const ref = new Reference(Language.English, "GEN:3:15");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Genesis);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.equal(15);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:3:15");
        expect(ref.toString(true)).to.equal("Genesis 3:15");
    });

    it('Construct Exodus 4:12-16 ("EXO:4:12-16")', () => {
        const ref = new Reference(Language.English, "EXO:4:12-16");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Exodus);
        expect(ref.getChapter()).to.equal(4);
        expect(ref.getVerse()).to.equal(12);
        expect(ref.getVerseEnd()).to.equal(16);
        expect(ref.toString()).to.equal("EXO:4:12-16");
        expect(ref.toString(true)).to.equal("Exodus 4:12-16");
    });

    it('Construct Leviticus 5:6 ("LEV:5:6")', () => {
        const ref = new Reference(Language.English, "LEV:5:6");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Leviticus);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(6);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("LEV:5:6");
        expect(ref.toString(true)).to.equal("Leviticus 5:6");
    });

    it('Construct Numbers 7:9-10 ("NUM:7:9-10")', () => {
        const ref = new Reference(Language.English, "NUM:7:9-10");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Numbers);
        expect(ref.getChapter()).to.equal(7);
        expect(ref.getVerse()).to.equal(9);
        expect(ref.getVerseEnd()).to.equal(10);
        expect(ref.toString()).to.equal("NUM:7:9-10");
        expect(ref.toString(true)).to.equal("Numbers 7:9-10");
    });

    it('Construct Joshua 6:20 ("JOS:6:20")', () => {
        const ref = new Reference(Language.English, "JOS:6:20");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Joshua);
        expect(ref.getChapter()).to.equal(6);
        expect(ref.getVerse()).to.equal(20);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("JOS:6:20");
        expect(ref.toString(true)).to.equal("Joshua 6:20");
    });

    it('Construct Judges 7:7-9 ("JDG:7:7-9")', () => {
        const ref = new Reference(Language.English, "JDG:7:7-9");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Judges);
        expect(ref.getChapter()).to.equal(7);
        expect(ref.getVerse()).to.equal(7);
        expect(ref.getVerseEnd()).to.equal(9);
        expect(ref.toString()).to.equal("JDG:7:7-9");
        expect(ref.toString(true)).to.equal("Judges 7:7-9");
    });

    it('Construct Ruth 1:16 ("RUT:1:16")', () => {
        const ref = new Reference(Language.English, "RUT:1:16");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Ruth);
        expect(ref.getChapter()).to.equal(1);
        expect(ref.getVerse()).to.equal(16);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("RUT:1:16");
        expect(ref.toString(true)).to.equal("Ruth 1:16");
    });

    it('Construct 1 Samuel 3:10-14 ("1SA:3:10-14")', () => {
        const ref = new Reference(Language.English, "1SA:3:10-14");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Samuel1);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.equal(10);
        expect(ref.getVerseEnd()).to.equal(14);
        expect(ref.toString()).to.equal("1SA:3:10-14");
        expect(ref.toString(true)).to.equal("1 Samuel 3:10-14");
    });

    it('Construct Matthew 5:6-7 ("MAT:5:6-7")', () => {
        const ref = new Reference(Language.English, "MAT:5:6-7");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Matthew);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(6);
        expect(ref.getVerseEnd()).to.equal(7);
        expect(ref.toString()).to.equal("MAT:5:6-7");
        expect(ref.toString(true)).to.equal("Matthew 5:6-7");
    });

    it('Construct John 3:16 ("JHN:3:16")', () => {
        const ref = new Reference(Language.English, "JHN:3:16");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.John);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.equal(16);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("JHN:3:16");
        expect(ref.toString(true)).to.equal("John 3:16");
    });

    it('Construct Romans 8:28-30 ("ROM:8:28-30")', () => {
        const ref = new Reference(Language.English, "ROM:8:28-30");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Romans);
        expect(ref.getChapter()).to.equal(8);
        expect(ref.getVerse()).to.equal(28);
        expect(ref.getVerseEnd()).to.equal(30);
        expect(ref.toString()).to.equal("ROM:8:28-30");
        expect(ref.toString(true)).to.equal("Romans 8:28-30");
    });

    it('Construct 1 Corinthians 13:4-7 ("1CO:13:4-7")', () => {
        const ref = new Reference(Language.English, "1CO:13:4-7");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Corinthians1);
        expect(ref.getChapter()).to.equal(13);
        expect(ref.getVerse()).to.equal(4);
        expect(ref.getVerseEnd()).to.equal(7);
        expect(ref.toString()).to.equal("1CO:13:4-7");
        expect(ref.toString(true)).to.equal("1 Corinthians 13:4-7");
    });

    it('Construct Revelation 22:13 ("REV:22-13")', () => {
        const ref = new Reference(Language.English, "REV:22:13");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Revelation);
        expect(ref.getChapter()).to.equal(22);
        expect(ref.getVerse()).to.equal(13);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("REV:22:13");
        expect(ref.toString(true)).to.equal("Revelation 22:13");
    });
});

describe("Construct Valid - Human Readable", () => {
    it("Construct Genesis 1:1", () => {
        const ref = new Reference(Language.English, "Genesis 1:1");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Genesis);
        expect(ref.getChapter()).to.equal(1);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1:1");
        expect(ref.toString(true)).to.equal("Genesis 1:1");
    });

    it("Construct Exodus 2:5-10", () => {
        const ref = new Reference(Language.English, "Exodus 2:5-10");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Exodus);
        expect(ref.getChapter()).to.equal(2);
        expect(ref.getVerse()).to.equal(5);
        expect(ref.getVerseEnd()).to.equal(10);
        expect(ref.toString()).to.equal("EXO:2:5-10");
        expect(ref.toString(true)).to.equal("Exodus 2:5-10");
    });

    it("Construct Leviticus 3:15", () => {
        const ref = new Reference(Language.English, "Leviticus 3:15");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Leviticus);
        expect(ref.getChapter()).to.equal(3);
        expect(ref.getVerse()).to.equal(15);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("LEV:3:15");
        expect(ref.toString(true)).to.equal("Leviticus 3:15");
    });

    it("Construct Numbers 5:6-8", () => {
        const ref = new Reference(Language.English, "Numbers 5:6-8");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Numbers);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(6);
        expect(ref.getVerseEnd()).to.equal(8);
        expect(ref.toString()).to.equal("NUM:5:6-8");
        expect(ref.toString(true)).to.equal("Numbers 5:6-8");
    });

    it("Construct Deuteronomy 10:12", () => {
        const ref = new Reference(Language.English, "Deuteronomy 10:12");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Deuteronomy);
        expect(ref.getChapter()).to.equal(10);
        expect(ref.getVerse()).to.equal(12);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("DEU:10:12");
        expect(ref.toString(true)).to.equal("Deuteronomy 10:12");
    });

    it("Construct 1 Samuel 10", () => {
        const ref = new Reference(Language.English, "1 Samuel 10");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Samuel1);
        expect(ref.getChapter()).to.equal(10);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("1SA:10");
        expect(ref.toString(true)).to.equal("1 Samuel 10");
    });

    it("Construct 1 Samuel 10:12", () => {
        const ref = new Reference(Language.English, "1 Samuel 10:12");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Samuel1);
        expect(ref.getChapter()).to.equal(10);
        expect(ref.getVerse()).to.equal(12);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("1SA:10:12");
        expect(ref.toString(true)).to.equal("1 Samuel 10:12");
    });

    it("Construct Song of Songs 1", () => {
        const ref = new Reference(Language.English, "Song of Songs 1");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.SongOfSongs);
        expect(ref.getChapter()).to.equal(1);
        expect(ref.getVerse()).to.be.undefined;
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("SNG:1");
        expect(ref.toString(true)).to.equal("Song of Songs 1");
    });

    it("Construct Song of Songs 1:1-6", () => {
        const ref = new Reference(Language.English, "Song of Songs 1:1-6");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.SongOfSongs);
        expect(ref.getChapter()).to.equal(1);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.equal(6);
        expect(ref.toString()).to.equal("SNG:1:1-6");
        expect(ref.toString(true)).to.equal("Song of Songs 1:1-6");
    });

    it("Construct Song of Songs 4:7", () => {
        const ref = new Reference(Language.English, "Song of Songs 4:7");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.SongOfSongs);
        expect(ref.getChapter()).to.equal(4);
        expect(ref.getVerse()).to.equal(7);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("SNG:4:7");
        expect(ref.toString(true)).to.equal("Song of Songs 4:7");
    });

    it("Construct 2 Chronicles 20:15", () => {
        const ref = new Reference(Language.English, "2 Chronicles 20:15");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Chronicles2);
        expect(ref.getChapter()).to.equal(20);
        expect(ref.getVerse()).to.equal(15);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("2CH:20:15");
        expect(ref.toString(true)).to.equal("2 Chronicles 20:15");
    });
});

describe("Construct Invalid", () => {
    it('Invalid Verse end ("1CO-13-4-16-25")', () => {
        expect(
            () => new Reference(Language.English, "1CO-13-4-16-25"),
        ).to.throw();
    });

    it('Invalid Verse end ("1CO-13-4-17-25")', () => {
        expect(
            () => new Reference(Language.English, "1CO-13-4-17-25"),
        ).to.throw();
    });

    it('Invalid format ("FOO-BAR")', () => {
        expect(() => new Reference(Language.English, "FOO-BAR")).to.throw();
    });

    it('Invalid format ("FOO BAR")', () => {
        expect(() => new Reference(Language.English, "FOO BAR")).to.throw();
    });

    it('Invalid format ("FOO BAR")', () => {
        expect(() => new Reference(Language.English, "FOO BAR 1")).to.throw();
    });

    it('Invalid format ("Genesis=1:1")', () => {
        expect(() => new Reference(Language.English, "Genesis=1:1")).to.throw();
    });

    it('Invalid format ("INVALID 1:1")', () => {
        expect(() => new Reference(Language.English, "INVALID 1:1")).to.throw();
    });

    it('Invalid format - Em Dash ("Numbers 5:6—8")', () => {
        expect(
            () => new Reference(Language.English, "Numbers 5:6—8"),
        ).to.throw();
    });

    it('Invalid format ("Sung of Songs 4:7")', () => {
        expect(
            () => new Reference(Language.English, "Sung of Songs 4:7"),
        ).to.throw();
    });

    it('Invalid format ("GEN")', () => {
        expect(() => new Reference(Language.English, "GEN")).to.throw();
    });

    it('Invalid format ("GEN one:1")', () => {
        expect(() => new Reference(Language.English, "GEN one:1")).to.throw();
    });

    it('Invalid format ("GEN 1:one")', () => {
        expect(() => new Reference(Language.English, "GEN 1:one")).to.throw();
    });

    it('Invalid format ("GEN 1:1-one")', () => {
        expect(() => new Reference(Language.English, "GEN 1:1-one")).to.throw();
    });

    it('Invalid format ("GEN::1")', () => {
        expect(() => new Reference(Language.English, "GEN::1")).to.throw();
    });

    it('Invalid format ("GEN 1::")', () => {
        expect(() => new Reference(Language.English, "GEN 1::")).to.throw();
    });

    it('Invalid format ("GEN 1:1:2:3:2")', () => {
        expect(
            () => new Reference(Language.English, "GEN 1:1:2:3:2"),
        ).to.throw();
    });

    it('Invalid format ("GEN111")', () => {
        expect(() => new Reference(Language.English, "GEN111")).to.throw();
    });

    it('Invalid format ("G#N 1:1")', () => {
        expect(() => new Reference(Language.English, "G#N 1:1")).to.throw();
    });

    it('Invalid format (" GEN 1:1")', () => {
        expect(() => new Reference(Language.English, " GEN 1:1")).to.throw();
    });

    it('Invalid format ("GEN 1 :1")', () => {
        expect(() => new Reference(Language.English, "GEN 1 :1")).to.throw();
    });

    it('Invalid format (" GEN 1: 1")', () => {
        expect(() => new Reference(Language.English, "GEN 1: 1")).to.throw();
    });

    it('Invalid format ("FOO 1:1")', () => {
        expect(() => new Reference(Language.English, "FOO 1:1")).to.throw();
    });

    it('Invalid format ("GEN1 1:1")', () => {
        expect(() => new Reference(Language.English, "GEN1 1:1")).to.throw();
    });

    it('Invalid format ("FOO_BAR 1:1")', () => {
        expect(() => new Reference(Language.English, "FOO_BAR 1:1")).to.throw();
    });

    it('Invalid format ("GIN 1:1")', () => {
        expect(() => new Reference(Language.English, "GIN 1:1")).to.throw();
    });

    it('Invalid format ("GENESIS 1:0")', () => {
        expect(() => new Reference(Language.English, "GENESIS 1:0")).to.throw();
    });

    it('Invalid chapter ("GEN 0:1")', () => {
        expect(() => new Reference(Language.English, "GEN 0:1")).to.throw();
    });

    it('Invalid chapter ("GEN 51:1")', () => {
        expect(() => new Reference(Language.English, "GEN 51:1")).to.throw();
    });

    it('Invalid chapter ("GEN 100:1")', () => {
        expect(() => new Reference(Language.English, "GEN 100:1")).to.throw();
    });

    it('Invalid chapter ("1CH 0:1")', () => {
        expect(() => new Reference(Language.English, "1CH 0:1")).to.throw();
    });

    it('Invalid chapter ("1CH 30:29")', () => {
        expect(() => new Reference(Language.English, "1CH 30:29")).to.throw();
    });

    it('Invalid chapter ("1CH 999:1")', () => {
        expect(() => new Reference(Language.English, "1CH 999:1")).to.throw();
    });

    it('Invalid verse ("EXO 7:0")', () => {
        expect(() => new Reference(Language.English, "EXO 7:0")).to.throw();
    });

    it('Invalid verse ("EXO 7:14")', () => {
        expect(() => new Reference(Language.English, "EXO 7:26")).to.throw();
    });

    it('Invalid verse ("SNG 1:100")', () => {
        expect(() => new Reference(Language.English, "SNG 1:100")).to.throw();
    });

    it('Invalid verse ("JOB 1:1000")', () => {
        expect(() => new Reference(Language.English, "JOB 1:1000")).to.throw();
    });

    it('Invalid verse ("DAN 1:300-301")', () => {
        expect(
            () => new Reference(Language.English, "DAN 1:300-301"),
        ).to.throw();
    });

    it('Invalid verse end ("LEV 10:12-11")', () => {
        expect(
            () => new Reference(Language.English, "LEV 10:12-11"),
        ).to.throw();
    });

    it('Invalid verse end ("LEV 1:1-100")', () => {
        expect(() => new Reference(Language.English, "LEV 1:1-100")).to.throw();
    });

    it('Invalid verse end ("JOB 1:6-5")', () => {
        expect(() => new Reference(Language.English, "JOB 1:6-5")).to.throw();
    });

    it('Invalid verse end ("PSA 1:1-1000")', () => {
        expect(
            () => new Reference(Language.English, "PSA 1:1-1000"),
        ).to.throw();
    });

    it('Invalid verse end ("PRO 1:10-5")', () => {
        expect(() => new Reference(Language.English, "PRO 1:10-5")).to.throw();
    });

    it('Invalid verse end ("ISA 1:1-100")', () => {
        expect(() => new Reference(Language.English, "ISA 1:1-100")).to.throw();
    });

    it('Invalid verse end ("JER 1:1-1")', () => {
        expect(() => new Reference(Language.English, "JER 1:1-1")).to.throw();
    });

    it('Invalid verse end ("LAM 1:10-5")', () => {
        expect(() => new Reference(Language.English, "LAM 1:10-5")).to.throw();
    });

    it('Invalid verse end ("EZK 1:10-5")', () => {
        expect(() => new Reference(Language.English, "EZK 1:10-5")).to.throw();
    });

    it('Invalid verse end ("HOS 1:3-3")', () => {
        expect(() => new Reference(Language.English, "HOS 1:3-3")).to.throw();
    });

    it('Invalid verse end ("HOS 1:1-300")', () => {
        expect(() => new Reference(Language.English, "HOS 1:1-300")).to.throw();
    });

    it('Invalid verse end ("JOL 1:10-2")', () => {
        expect(() => new Reference(Language.English, "JOL 1:10-2")).to.throw();
    });

    it('Invalid verse ("OBA 1:50")', () => {
        expect(() => new Reference(Language.English, "OBA 1:50")).to.throw();
    });

    it('Invalid verse end ("JON 1:1-50")', () => {
        expect(() => new Reference(Language.English, "JON 1:1-50")).to.throw();
    });

    it('Invalid verse end ("MIC 1:1-17")', () => {
        expect(() => new Reference(Language.English, "MIC 1:1-17")).to.throw();
    });

    it('Invalid verse end ("NAM 1:10-5")', () => {
        expect(() => new Reference(Language.English, "NAM 1:10-5")).to.throw();
    });

    it('Invalid verse end ("HAB 1:15-5")', () => {
        expect(() => new Reference(Language.English, "HAB 1:15-5")).to.throw();
    });
});

describe("Set Valid - ID", () => {
    it('Set 2 Chronicles 20:15 ("2CH:20:15")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("2CH:20:15");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Chronicles2);
        expect(ref.getChapter()).to.equal(20);
        expect(ref.getVerse()).to.equal(15);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("2CH:20:15");
        expect(ref.toString(true)).to.equal("2 Chronicles 20:15");
    });

    it('Set 1 Samuel 10:12 ("1SA:10:12")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("1SA:10:12");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Samuel1);
        expect(ref.getChapter()).to.equal(10);
        expect(ref.getVerse()).to.equal(12);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("1SA:10:12");
        expect(ref.toString(true)).to.equal("1 Samuel 10:12");
    });

    it('Set Numbers 5:6-8 ("NUM:5:6-8")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("NUM:5:6-8");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Numbers);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(6);
        expect(ref.getVerseEnd()).to.equal(8);
        expect(ref.toString()).to.equal("NUM:5:6-8");
        expect(ref.toString(true)).to.equal("Numbers 5:6-8");
    });

    it('Set Exodus 12:1-3 ("EXO:12:1-3")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("EXO:12:1-3");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Exodus);
        expect(ref.getChapter()).to.equal(12);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.equal(3);
        expect(ref.toString()).to.equal("EXO:12:1-3");
        expect(ref.toString(true)).to.equal("Exodus 12:1-3");
    });

    it('Set Psalms 23:1 ("PSA:23:1")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("PSA:23:1");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Psalms);
        expect(ref.getChapter()).to.equal(23);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("PSA:23:1");
        expect(ref.toString(true)).to.equal("Psalms 23:1");
    });

    it('Set Isaiah 53:4-6 ("ISA:53:4-6")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("ISA:53:4-6");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Isaiah);
        expect(ref.getChapter()).to.equal(53);
        expect(ref.getVerse()).to.equal(4);
        expect(ref.getVerseEnd()).to.equal(6);
        expect(ref.toString()).to.equal("ISA:53:4-6");
        expect(ref.toString(true)).to.equal("Isaiah 53:4-6");
    });

    it('Set Matthew 5:3 ("MAT:5:3")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("MAT:5:3");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Matthew);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(3);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("MAT:5:3");
        expect(ref.toString(true)).to.equal("Matthew 5:3");
    });

    it('Set Revelation 22:16-17 ("REV:22:16-17")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("REV:22:16-17");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Revelation);
        expect(ref.getChapter()).to.equal(22);
        expect(ref.getVerse()).to.equal(16);
        expect(ref.getVerseEnd()).to.equal(17);
        expect(ref.toString()).to.equal("REV:22:16-17");
        expect(ref.toString(true)).to.equal("Revelation 22:16-17");
    });
});

describe("Set Valid - Human Readable", () => {
    it("Set 2 Chronicles 20:15", () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("2 Chronicles 20:15");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Chronicles2);
        expect(ref.getChapter()).to.equal(20);
        expect(ref.getVerse()).to.equal(15);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("2CH:20:15");
        expect(ref.toString(true)).to.equal("2 Chronicles 20:15");
    });

    it("Set 1 Samuel 10:12", () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("1 Samuel 10:12");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Samuel1);
        expect(ref.getChapter()).to.equal(10);
        expect(ref.getVerse()).to.equal(12);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("1SA:10:12");
        expect(ref.toString(true)).to.equal("1 Samuel 10:12");
    });

    it("Set Numbers 5:6-8", () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("Numbers 5:6-8");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Numbers);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(6);
        expect(ref.getVerseEnd()).to.equal(8);
        expect(ref.toString()).to.equal("NUM:5:6-8");
        expect(ref.toString(true)).to.equal("Numbers 5:6-8");
    });

    it("Set Exodus 12:1-3", () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("Exodus 12:1-3");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Exodus);
        expect(ref.getChapter()).to.equal(12);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.equal(3);
        expect(ref.toString()).to.equal("EXO:12:1-3");
        expect(ref.toString(true)).to.equal("Exodus 12:1-3");
    });

    it("Set Psalms 23:1", () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("Psalms 23:1");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Psalms);
        expect(ref.getChapter()).to.equal(23);
        expect(ref.getVerse()).to.equal(1);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("PSA:23:1");
        expect(ref.toString(true)).to.equal("Psalms 23:1");
    });

    it("Set Isaiah 53:4-6", () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("Isaiah 53:4-6");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Isaiah);
        expect(ref.getChapter()).to.equal(53);
        expect(ref.getVerse()).to.equal(4);
        expect(ref.getVerseEnd()).to.equal(6);
        expect(ref.toString()).to.equal("ISA:53:4-6");
        expect(ref.toString(true)).to.equal("Isaiah 53:4-6");
    });

    it("Set Matthew 5:3", () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("Matthew 5:3");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Matthew);
        expect(ref.getChapter()).to.equal(5);
        expect(ref.getVerse()).to.equal(3);
        expect(ref.getVerseEnd()).to.be.undefined;
        expect(ref.toString()).to.equal("MAT:5:3");
        expect(ref.toString(true)).to.equal("Matthew 5:3");
    });

    it("Set Revelation 22:16-17", () => {
        const ref = new Reference(Language.English, "GEN:1");
        ref.set("Revelation 22:16-17");
        expect(ref.getLanguage()).to.equal(Language.English);
        expect(ref.getBook()).to.equal(Book.Revelation);
        expect(ref.getChapter()).to.equal(22);
        expect(ref.getVerse()).to.equal(16);
        expect(ref.getVerseEnd()).to.equal(17);
        expect(ref.toString()).to.equal("REV:22:16-17");
        expect(ref.toString(true)).to.equal("Revelation 22:16-17");
    });
});

describe("Set Invalid", () => {
    it('Invalid format ("FOO-BAR")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("FOO-BAR")).to.throw();
    });

    it('Invalid format ("FOO BAR")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("FOO BAR")).to.throw();
    });

    it('Invalid format ("GEN1 1:1")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("GEN1 1:1")).to.throw();
    });

    it('Invalid format ("FOO_BAR 1:1")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("FOO_BAR 1:1")).to.throw();
    });

    it('Invalid format ("GEN 1:1:2:3:2")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("GEN 1:1:2:3:2")).to.throw();
    });

    it('Invalid format ("GEN111")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("GEN111")).to.throw();
    });

    it('Invalid verse ("DAN 1:300-301")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("DAN 1:300-301")).to.throw();
    });

    it('Invalid verse ("EXO 7:14")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("EXO 7:26")).to.throw();
    });

    it('Invalid verse ("SNG 1:100")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("SNG 1:100")).to.throw();
    });

    it('Invalid verse ("JOB 1:1000")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("JOB 1:1000")).to.throw();
    });

    it('Invalid verse end ("NAM 1:10-5")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("NAM 1:10-5")).to.throw();
    });

    it('Invalid verse end ("HAB 1:15-5")', () => {
        const ref = new Reference(Language.English, "GEN:1");
        expect(() => ref.set("HAB 1:15-5")).to.throw();
    });
});

describe("Unpack", () => {
    it("Unpack Genesis 1", () => {
        const verses = new Reference(Language.English, "GEN:1").unpack();
        expect(verses.length).to.equal(31);
        expect(verses[0].toString()).to.equal("GEN:1:1");
        expect(verses[30].toString()).to.equal("GEN:1:31");
    });

    it("Unpack Numbers 18", () => {
        const verses = new Reference(Language.English, "NUM:18").unpack();
        expect(verses.length).to.equal(32);
        expect(verses[0].toString()).to.equal("NUM:18:1");
        expect(verses[31].toString()).to.equal("NUM:18:32");
    });

    it("Unpack Exodus 14", () => {
        const verses = new Reference(Language.English, "EXO:14").unpack();
        expect(verses.length).to.equal(31);
        expect(verses[0].toString()).to.equal("EXO:14:1");
        expect(verses[30].toString()).to.equal("EXO:14:31");
    });

    it("Unpack Psalms 23", () => {
        const verses = new Reference(Language.English, "PSA:23").unpack();
        expect(verses.length).to.equal(6);
        expect(verses[0].toString()).to.equal("PSA:23:1");
        expect(verses[5].toString()).to.equal("PSA:23:6");
    });

    it("Unpack Isaiah 53", () => {
        const verses = new Reference(Language.English, "ISA:53").unpack();
        expect(verses.length).to.equal(12);
        expect(verses[0].toString()).to.equal("ISA:53:1");
        expect(verses[11].toString()).to.equal("ISA:53:12");
    });

    it("Unpack Revelation 21", () => {
        const verses = new Reference(Language.English, "REV:21").unpack();
        expect(verses.length).to.equal(27);
        expect(verses[0].toString()).to.equal("REV:21:1");
        expect(verses[26].toString()).to.equal("REV:21:27");
    });

    it("Unpack Acts 2", () => {
        const verses = new Reference(Language.English, "ACT:2").unpack();
        expect(verses.length).to.equal(47);
        expect(verses[0].toString()).to.equal("ACT:2:1");
        expect(verses[46].toString()).to.equal("ACT:2:47");
    });

    it("Unpack Genesis 1:1", () => {
        const verses = new Reference(Language.English, "GEN:1:1").unpack();
        expect(verses.length).to.equal(1);
        expect(verses[0].toString()).to.equal("GEN:1:1");
        const verse = new Reference(Language.English, "GEN:1:1");
    });

    it("Unpack Exodus 3:14", () => {
        const verses = new Reference(Language.English, "EXO:3:14").unpack();
        expect(verses.length).to.equal(1);
        expect(verses[0].toString()).to.equal("EXO:3:14");
        const verse = new Reference(Language.English, "EXO:3:14");
    });

    it("Unpack Psalms 119:105", () => {
        const verses = new Reference(Language.English, "PSA:119:105").unpack();
        expect(verses.length).to.equal(1);
        expect(verses[0].toString()).to.equal("PSA:119:105");
        const verse = new Reference(Language.English, "PSA:119:105");
    });

    it("Unpack Genesis 1:1-4", () => {
        const verse = new Reference(Language.English, "GEN:1:1-4");
        const unpackedVerses = ["GEN:1:1", "GEN:1:2", "GEN:1:3", "GEN:1:4"];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack Exodus 12:1-3"', () => {
        const verse = new Reference(Language.English, "EXO:12:1-3");
        const unpackedVerses = ["EXO:12:1", "EXO:12:2", "EXO:12:3"];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Matthew 28:19", () => {
        const verses = new Reference(Language.English, "MAT:28:19").unpack();
        expect(verses.length).to.equal(1);
        expect(verses[0].toString()).to.equal("MAT:28:19");
        const verse = new Reference(Language.English, "MAT:28:19");
    });

    it("Unpack Romans 8:28", () => {
        const verses = new Reference(Language.English, "ROM:8:28").unpack();
        expect(verses.length).to.equal(1);
        expect(verses[0].toString()).to.equal("ROM:8:28");
        const verse = new Reference(Language.English, "ROM:8:28");
    });

    it("Unpack Galatians 5:22", () => {
        const verses = new Reference(Language.English, "GAL:5:22").unpack();
        expect(verses.length).to.equal(1);
        expect(verses[0].toString()).to.equal("GAL:5:22");
        const verse = new Reference(Language.English, "GAL:5:22");
    });

    it("Unpack Matthew 5:1-5", () => {
        const verse = new Reference(Language.English, "MAT:5:1-5");
        const unpackedVerses = [
            "MAT:5:1",
            "MAT:5:2",
            "MAT:5:3",
            "MAT:5:4",
            "MAT:5:5",
        ];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Luke 3:4-6", () => {
        const verse = new Reference(Language.English, "LUK:3:4-6");
        const unpackedVerses = ["LUK:3:4", "LUK:3:5", "LUK:3:6"];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Romans 8:31-33", () => {
        const verse = new Reference(Language.English, "ROM:8:31-33");
        const unpackedVerses = ["ROM:8:31", "ROM:8:32", "ROM:8:33"];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack 1 Corinthians 12:4-6", () => {
        const verse = new Reference(Language.English, "1CO:12:4-6");
        const unpackedVerses = ["1CO:12:4", "1CO:12:5", "1CO:12:6"];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Revelation 21:1-3", () => {
        const verse = new Reference(Language.English, "REV:21:1-3");
        const unpackedVerses = ["REV:21:1", "REV:21:2", "REV:21:3"];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Philippians 1:3-5", () => {
        const verse = new Reference(Language.English, "PHP:1:3-5");
        const unpackedVerses = ["PHP:1:3", "PHP:1:4", "PHP:1:5"];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Genesis 1:1-10", () => {
        const verse = new Reference(Language.English, "GEN:1:1-10");
        const unpackedVerses = [
            "GEN:1:1",
            "GEN:1:2",
            "GEN:1:3",
            "GEN:1:4",
            "GEN:1:5",
            "GEN:1:6",
            "GEN:1:7",
            "GEN:1:8",
            "GEN:1:9",
            "GEN:1:10",
        ];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Exodus 12:1-15", () => {
        const verse = new Reference(Language.English, "EXO:12:1-15");
        const unpackedVerses = [
            "EXO:12:1",
            "EXO:12:2",
            "EXO:12:3",
            "EXO:12:4",
            "EXO:12:5",
            "EXO:12:6",
            "EXO:12:7",
            "EXO:12:8",
            "EXO:12:9",
            "EXO:12:10",
            "EXO:12:11",
            "EXO:12:12",
            "EXO:12:13",
            "EXO:12:14",
            "EXO:12:15",
        ];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Matthew 5:1-12", () => {
        const verse = new Reference(Language.English, "MAT:5:1-12");
        const unpackedVerses = [
            "MAT:5:1",
            "MAT:5:2",
            "MAT:5:3",
            "MAT:5:4",
            "MAT:5:5",
            "MAT:5:6",
            "MAT:5:7",
            "MAT:5:8",
            "MAT:5:9",
            "MAT:5:10",
            "MAT:5:11",
            "MAT:5:12",
        ];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Romans 8:28-39", () => {
        const verse = new Reference(Language.English, "ROM:8:28-39");
        const unpackedVerses = [
            "ROM:8:28",
            "ROM:8:29",
            "ROM:8:30",
            "ROM:8:31",
            "ROM:8:32",
            "ROM:8:33",
            "ROM:8:34",
            "ROM:8:35",
            "ROM:8:36",
            "ROM:8:37",
            "ROM:8:38",
            "ROM:8:39",
        ];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack 1 Peter 1:1-5", () => {
        const verse = new Reference(Language.English, "1PE:1:1-5");
        const unpackedVerses = [
            "1PE:1:1",
            "1PE:1:2",
            "1PE:1:3",
            "1PE:1:4",
            "1PE:1:5",
        ];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it("Unpack Luke 9:1-17", () => {
        const verse = new Reference(Language.English, "LUK:9:1-17");
        const unpackedVerses = [
            "LUK:9:1",
            "LUK:9:2",
            "LUK:9:3",
            "LUK:9:4",
            "LUK:9:5",
            "LUK:9:6",
            "LUK:9:7",
            "LUK:9:8",
            "LUK:9:9",
            "LUK:9:10",
            "LUK:9:11",
            "LUK:9:12",
            "LUK:9:13",
            "LUK:9:14",
            "LUK:9:15",
            "LUK:9:16",
            "LUK:9:17",
        ];
        expect(verse.unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });
});
