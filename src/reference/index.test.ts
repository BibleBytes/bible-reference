import { expect } from "chai";
import { Book, Language } from "../../resources/index.js";
import { Reference } from "./index.js";

describe("Reference", () => {
    it("Default Values", () => {
        const ref = new Reference(Language.English);
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(1);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1:1");
        expect(ref.toString(true)).to.equal("Genesis 1:1");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Genesis 1:1 ("GEN 1:1")', () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(1);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1:1");
        expect(ref.toString(true)).to.equal("Genesis 1:1");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Exodus 2:5-10 ("EXO 2:5-10")', () => {
        const ref = new Reference(Language.English, "EXO 2:5-10");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Exodus);
        expect(ref.chapter).to.equal(2);
        expect(ref.verse).to.equal(5);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(10);
        expect(ref.toString()).to.equal("EXO:2:5:10");
        expect(ref.toString(true)).to.equal("Exodus 2:5-10");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Leviticus 3:15 ("LEV 3:15")', () => {
        const ref = new Reference(Language.English, "LEV 3:15");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Leviticus);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(15);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("LEV:3:15");
        expect(ref.toString(true)).to.equal("Leviticus 3:15");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Numbers 5:6-8 ("NUM 5:6-8")', () => {
        const ref = new Reference(Language.English, "NUM 5:6-8");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Numbers);
        expect(ref.chapter).to.equal(5);
        expect(ref.verse).to.equal(6);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(8);
        expect(ref.toString()).to.equal("NUM:5:6:8");
        expect(ref.toString(true)).to.equal("Numbers 5:6-8");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Deuteronomy 10:12 ("DEU 10:12")', () => {
        const ref = new Reference(Language.English, "DEU 10:12");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Deuteronomy);
        expect(ref.chapter).to.equal(10);
        expect(ref.verse).to.equal(12);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("DEU:10:12");
        expect(ref.toString(true)).to.equal("Deuteronomy 10:12");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Joshua 1:1-9 ("JOS 1:1-9")', () => {
        const ref = new Reference(Language.English, "JOS 1:1-9");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Joshua);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(1);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(9);
        expect(ref.toString()).to.equal("JOS:1:1:9");
        expect(ref.toString(true)).to.equal("Joshua 1:1-9");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Judges 4:4-5 ("JDG 4:4-5")', () => {
        const ref = new Reference(Language.English, "JDG 4:4-5");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Judges);
        expect(ref.chapter).to.equal(4);
        expect(ref.verse).to.equal(4);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(5);
        expect(ref.toString()).to.equal("JDG:4:4:5");
        expect(ref.toString(true)).to.equal("Judges 4:4-5");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Ruth 2:8 ("RTH 2:8")', () => {
        const ref = new Reference(Language.English, "RUT 2:8");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Ruth);
        expect(ref.chapter).to.equal(2);
        expect(ref.verse).to.equal(8);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("RUT:2:8");
        expect(ref.toString(true)).to.equal("Ruth 2:8");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Psalms 23:1-6 ("PSA 23:1-6")', () => {
        const ref = new Reference(Language.English, "PSA 23:1-6");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Psalms);
        expect(ref.chapter).to.equal(23);
        expect(ref.verse).to.equal(1);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(6);
        expect(ref.toString()).to.equal("PSA:23:1:6");
        expect(ref.toString(true)).to.equal("Psalms 23:1-6");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Proverbs 3:5-6 ("PRO 3:5-6")', () => {
        const ref = new Reference(Language.English, "PRO 3:5-6");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Proverbs);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(5);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(6);
        expect(ref.toString()).to.equal("PRO:3:5:6");
        expect(ref.toString(true)).to.equal("Proverbs 3:5-6");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Isaiah 9:6 ("ISA 9:6")', () => {
        const ref = new Reference(Language.English, "ISA 9:6");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Isaiah);
        expect(ref.chapter).to.equal(9);
        expect(ref.verse).to.equal(6);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("ISA:9:6");
        expect(ref.toString(true)).to.equal("Isaiah 9:6");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Matthew 5:3-12 ("MAT 5:3-12")', () => {
        const ref = new Reference(Language.English, "MAT 5:3-12");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Matthew);
        expect(ref.chapter).to.equal(5);
        expect(ref.verse).to.equal(3);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(12);
        expect(ref.toString()).to.equal("MAT:5:3:12");
        expect(ref.toString(true)).to.equal("Matthew 5:3-12");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse John 3:16 ("JHN 3:16")', () => {
        const ref = new Reference(Language.English, "JHN 3:16");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.John);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(16);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("JHN:3:16");
        expect(ref.toString(true)).to.equal("John 3:16");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Romans 8:28-30 ("ROM 8:28-30")', () => {
        const ref = new Reference(Language.English, "ROM 8:28-30");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Romans);
        expect(ref.chapter).to.equal(8);
        expect(ref.verse).to.equal(28);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(30);
        expect(ref.toString()).to.equal("ROM:8:28:30");
        expect(ref.toString(true)).to.equal("Romans 8:28-30");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Revelation 22:13 ("REV 22:13")', () => {
        const ref = new Reference(Language.English, "REV 22:13");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Revelation);
        expect(ref.chapter).to.equal(22);
        expect(ref.verse).to.equal(13);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("REV:22:13");
        expect(ref.toString(true)).to.equal("Revelation 22:13");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Isaiah 9:6-7 ("ISA.9.6-7")', () => {
        const ref = new Reference(Language.English, "ISA.9.6-7");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Isaiah);
        expect(ref.chapter).to.equal(9);
        expect(ref.verse).to.equal(6);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(7);
        expect(ref.toString()).to.equal("ISA:9:6:7");
        expect(ref.toString(true)).to.equal("Isaiah 9:6-7");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Jeremiah 29:11 ("JER 29 11")', () => {
        const ref = new Reference(Language.English, "JER 29 11");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Jeremiah);
        expect(ref.chapter).to.equal(29);
        expect(ref.verse).to.equal(11);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("JER:29:11");
        expect(ref.toString(true)).to.equal("Jeremiah 29:11");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Lamentations 3:22-23 ("LAM,3-22-23")', () => {
        const ref = new Reference(Language.English, "LAM,3-22-23");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Lamentations);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(22);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(23);
        expect(ref.toString()).to.equal("LAM:3:22:23");
        expect(ref.toString(true)).to.equal("Lamentations 3:22-23");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Ezekiel 37:4 ("EZK:37:4")', () => {
        const ref = new Reference(Language.English, "EZK:37:4");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Ezekiel);
        expect(ref.chapter).to.equal(37);
        expect(ref.verse).to.equal(4);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("EZK:37:4");
        expect(ref.toString(true)).to.equal("Ezekiel 37:4");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Genesis 3:15 ("GEN:3:15")', () => {
        const ref = new Reference(Language.English, "GEN:3:15");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(15);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:3:15");
        expect(ref.toString(true)).to.equal("Genesis 3:15");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Exodus 4:12-16 ("EXO-4-12-16")', () => {
        const ref = new Reference(Language.English, "EXO-4-12-16");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Exodus);
        expect(ref.chapter).to.equal(4);
        expect(ref.verse).to.equal(12);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(16);
        expect(ref.toString()).to.equal("EXO:4:12:16");
        expect(ref.toString(true)).to.equal("Exodus 4:12-16");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Leviticus 5:6 ("LEV.5.6")', () => {
        const ref = new Reference(Language.English, "LEV.5.6");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Leviticus);
        expect(ref.chapter).to.equal(5);
        expect(ref.verse).to.equal(6);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("LEV:5:6");
        expect(ref.toString(true)).to.equal("Leviticus 5:6");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Numbers 7:9-10 ("NUM 7 9 10")', () => {
        const ref = new Reference(Language.English, "NUM 7 9 10");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Numbers);
        expect(ref.chapter).to.equal(7);
        expect(ref.verse).to.equal(9);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(10);
        expect(ref.toString()).to.equal("NUM:7:9:10");
        expect(ref.toString(true)).to.equal("Numbers 7:9-10");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Deuteronomy 8:3 ("DEU,8-3")', () => {
        const ref = new Reference(Language.English, "DEU,8-3");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Deuteronomy);
        expect(ref.chapter).to.equal(8);
        expect(ref.verse).to.equal(3);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("DEU:8:3");
        expect(ref.toString(true)).to.equal("Deuteronomy 8:3");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Joshua 6:20 ("JOS:6:20")', () => {
        const ref = new Reference(Language.English, "JOS:6:20");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Joshua);
        expect(ref.chapter).to.equal(6);
        expect(ref.verse).to.equal(20);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("JOS:6:20");
        expect(ref.toString(true)).to.equal("Joshua 6:20");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Judges 7:7-9 ("JDG-7-7-9")', () => {
        const ref = new Reference(Language.English, "JDG-7-7-9");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Judges);
        expect(ref.chapter).to.equal(7);
        expect(ref.verse).to.equal(7);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(9);
        expect(ref.toString()).to.equal("JDG:7:7:9");
        expect(ref.toString(true)).to.equal("Judges 7:7-9");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Ruth 1:16 ("RUT.1.16")', () => {
        const ref = new Reference(Language.English, "RUT.1.16");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Ruth);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(16);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("RUT:1:16");
        expect(ref.toString(true)).to.equal("Ruth 1:16");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse 1 Samuel 3:10-14 ("1SA 3 10 14")', () => {
        const ref = new Reference(Language.English, "1SA 3 10 14");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Samuel1);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(10);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(14);
        expect(ref.toString()).to.equal("1SA:3:10:14");
        expect(ref.toString(true)).to.equal("1 Samuel 3:10-14");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Matthew 5:6-7 ("MAT,5-6-7")', () => {
        const ref = new Reference(Language.English, "MAT,5-6-7");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Matthew);
        expect(ref.chapter).to.equal(5);
        expect(ref.verse).to.equal(6);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(7);
        expect(ref.toString()).to.equal("MAT:5:6:7");
        expect(ref.toString(true)).to.equal("Matthew 5:6-7");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse John 3:16 ("JHN.3.16")', () => {
        const ref = new Reference(Language.English, "JHN.3.16");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.John);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(16);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("JHN:3:16");
        expect(ref.toString(true)).to.equal("John 3:16");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Romans 8:28-30 ("ROM:8:28-30")', () => {
        const ref = new Reference(Language.English, "ROM:8:28-30");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Romans);
        expect(ref.chapter).to.equal(8);
        expect(ref.verse).to.equal(28);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(30);
        expect(ref.toString()).to.equal("ROM:8:28:30");
        expect(ref.toString(true)).to.equal("Romans 8:28-30");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse 1 Corinthians 13:4-7 ("1CO-13-4-7")', () => {
        const ref = new Reference(Language.English, "1CO-13-4-7");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Corinthians1);
        expect(ref.chapter).to.equal(13);
        expect(ref.verse).to.equal(4);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(7);
        expect(ref.toString()).to.equal("1CO:13:4:7");
        expect(ref.toString(true)).to.equal("1 Corinthians 13:4-7");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse Revelation 22:13 ("REV,22-13")', () => {
        const ref = new Reference(Language.English, "REV,22-13");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Revelation);
        expect(ref.chapter).to.equal(22);
        expect(ref.verse).to.equal(13);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("REV:22:13");
        expect(ref.toString(true)).to.equal("Revelation 22:13");
        expect(ref.GetError()).to.be.undefined;
    });

    it("Set to Genesis 1:2", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        ref.verse = 2;
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(2);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1:2");
        expect(ref.toString(true)).to.equal("Genesis 1:2");
        expect(ref.GetError()).to.be.undefined;
    });

    it("Set to Genesis 1:2-5", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        ref.verse = 2;
        ref.verseEnd = 5;
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(2);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(5);
        expect(ref.toString()).to.equal("GEN:1:2:5");
        expect(ref.toString(true)).to.equal("Genesis 1:2-5");
        expect(ref.GetError()).to.be.undefined;
    });

    it("Set to Genesis 1:2-5:1", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        ref.verse = 2;
        ref.chapterEnd = 5;
        ref.verseEnd = 2;
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(2);
        expect(ref.chapterEnd).to.equal(5);
        expect(ref.verseEnd).to.equal(2);
        expect(ref.toString()).to.equal("GEN:1:2:5:2");
        expect(ref.toString(true)).to.equal("Genesis 1:2-5:2");
        expect(ref.GetError()).to.be.undefined;
    });

    it('Parse 1 Corinthians 13:4-16:24 ("1CO-13-4-16-24")', () => {
        const ref = new Reference(Language.English, "1CO-13-4-16-24");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Corinthians1);
        expect(ref.chapter).to.equal(13);
        expect(ref.verse).to.equal(4);
        expect(ref.chapterEnd).to.equal(16);
        expect(ref.verseEnd).to.equal(24);
        expect(ref.toString()).to.equal("1CO:13:4:16:24");
        expect(ref.toString(true)).to.equal("1 Corinthians 13:4-16:24");
        expect(ref.GetError()).to.be.undefined;
    });

    it("Set to Invalid Genesis 1:2-1", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        ref.verse = 2;
        ref.verseEnd = 1;
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(2);
        expect(ref.chapterEnd).to.be.undefined;
        expect(ref.verseEnd).to.equal(1);
        expect(ref.toString()).to.equal("INVALID");
        expect(ref.toString(true)).to.equal("INVALID");
        expect(ref.GetError()).to.be.not.undefined;
    });

    it("Set Chapter end but no verse end", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        ref.verse = 2;
        ref.chapterEnd = 2;
        expect(ref.GetError()).to.be.equal("Missing verse end number");
    });

    it('Invalid Verse end ("1CO-13-4-16-25")', () => {
        expect(
            () => new Reference(Language.English, "1CO-13-4-16-25"),
        ).to.throw("Invalid verse end number");
    });

    it('Invalid Verse end ("1CO-13-4-17-25")', () => {
        expect(
            () => new Reference(Language.English, "1CO-13-4-17-25"),
        ).to.throw("Invalid chapter end number");
    });

    it("Set to Invalid Genesis 1:2-1", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        expect(() => ref.Set("GEN:1:2:1")).to.throw();
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

    it('Invalid format ("Genesis 1:1")', () => {
        expect(() => new Reference(Language.English, "Genesis 1:1")).to.throw();
    });

    it('Invalid format ("INVALID 1:1")', () => {
        expect(() => new Reference(Language.English, "INVALID 1:1")).to.throw();
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
        expect(() => new Reference(Language.English, "FOO 1:1")).to.throw(
            "Invalid format: invalid book abbreviation",
        );
    });

    it('Invalid format ("GEN1 1:1")', () => {
        expect(() => new Reference(Language.English, "GEN1 1:1")).to.throw(
            "Invalid format: invalid book abbreviation",
        );
    });

    it('Invalid format ("FOO_BAR 1:1")', () => {
        expect(() => new Reference(Language.English, "FOO_BAR 1:1")).to.throw(
            "Invalid format: invalid book abbreviation",
        );
    });

    it('Invalid format ("GIN 1:1")', () => {
        expect(() => new Reference(Language.English, "GIN 1:1")).to.throw(
            "Invalid format: invalid book abbreviation",
        );
    });

    it('Invalid format ("GENESIS 1:1")', () => {
        expect(() => new Reference(Language.English, "GENESIS 1:1")).to.throw(
            "Invalid format: invalid book abbreviation",
        );
    });

    it('Invalid chapter ("GEN 0:1")', () => {
        expect(() => new Reference(Language.English, "GEN 0:1")).to.throw(
            "Invalid chapter number",
        );
    });

    it('Invalid chapter ("GEN 51:1")', () => {
        expect(() => new Reference(Language.English, "GEN 51:1")).to.throw(
            "Invalid chapter number",
        );
    });

    it('Invalid chapter ("GEN 100:1")', () => {
        expect(() => new Reference(Language.English, "GEN 100:1")).to.throw(
            "Invalid chapter number",
        );
    });

    it('Invalid chapter ("1CH 0:1")', () => {
        expect(() => new Reference(Language.English, "1CH 0:1")).to.throw(
            "Invalid chapter number",
        );
    });

    it('Invalid chapter ("1CH 30:29")', () => {
        expect(() => new Reference(Language.English, "1CH 30:29")).to.throw(
            "Invalid chapter number",
        );
    });

    it('Invalid chapter ("1CH 999:1")', () => {
        expect(() => new Reference(Language.English, "1CH 999:1")).to.throw(
            "Invalid chapter number",
        );
    });

    it('Invalid verse ("EXO 7:0")', () => {
        expect(() => new Reference(Language.English, "EXO 7:0")).to.throw(
            "Invalid verse number",
        );
    });

    it('Invalid verse ("EXO 7:14")', () => {
        expect(() => new Reference(Language.English, "EXO 7:26")).to.throw(
            "Invalid verse number",
        );
    });

    it('Invalid verse ("SNG 1:100")', () => {
        expect(() => new Reference(Language.English, "SNG 1:100")).to.throw(
            "Invalid verse number",
        );
    });

    it('Invalid verse ("JOB 1:1000")', () => {
        expect(() => new Reference(Language.English, "JOB 1:1000")).to.throw(
            "Invalid verse number",
        );
    });

    it('Invalid verse ("DAN 1:300-301")', () => {
        expect(() => new Reference(Language.English, "DAN 1:300-301")).to.throw(
            "Invalid verse number",
        );
    });

    it('Invalid verse end ("LEV 10:12-11")', () => {
        expect(() => new Reference(Language.English, "LEV 10:12-11")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("LEV 1:1-100")', () => {
        expect(() => new Reference(Language.English, "LEV 1:1-100")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("JOB 1:6-5")', () => {
        expect(() => new Reference(Language.English, "JOB 1:6-5")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("PSA 1:1-1000")', () => {
        expect(() => new Reference(Language.English, "PSA 1:1-1000")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("PRO 1:10-5")', () => {
        expect(() => new Reference(Language.English, "PRO 1:10-5")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("ISA 1:1-100")', () => {
        expect(() => new Reference(Language.English, "ISA 1:1-100")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("JER 1:1-1")', () => {
        expect(() => new Reference(Language.English, "JER 1:1-1")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("LAM 1:10-5")', () => {
        expect(() => new Reference(Language.English, "LAM 1:10-5")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("EZK 1:10-5")', () => {
        expect(() => new Reference(Language.English, "EZK 1:10-5")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("HOS 1:3-3")', () => {
        expect(() => new Reference(Language.English, "HOS 1:3-3")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("HOS 1:1-300")', () => {
        expect(() => new Reference(Language.English, "HOS 1:1-300")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("JOL 1:10-2")', () => {
        expect(() => new Reference(Language.English, "JOL 1:10-2")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse ("OBA 1:50")', () => {
        expect(() => new Reference(Language.English, "OBA 1:50")).to.throw(
            "Invalid verse number",
        );
    });

    it('Invalid verse end ("JON 1:1-50")', () => {
        expect(() => new Reference(Language.English, "JON 1:1-50")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("MIC 1:1-17")', () => {
        expect(() => new Reference(Language.English, "MIC 1:1-17")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("NAM 1:10-5")', () => {
        expect(() => new Reference(Language.English, "NAM 1:10-5")).to.throw(
            "Invalid verse end number",
        );
    });

    it('Invalid verse end ("HAB 1:15-5")', () => {
        expect(() => new Reference(Language.English, "HAB 1:15-5")).to.throw(
            "Invalid verse end number",
        );
    });
});

describe("Is Followed By Verses", () => {
    it('Valid "HAB 1:15" and "HAB 1:16"', () => {
        const verse1 = new Reference(Language.English, "HAB 1:15");
        const verse2 = new Reference(Language.English, "HAB 1:16");
        expect(verse1.IsFollowedBy(verse2)).to.be.true;
    });

    it('Valid "1CO 2:22" and "1CO 2:23"', () => {
        const verse1 = new Reference(Language.English, "1CO 3:22");
        const verse2 = new Reference(Language.English, "1CO 3:23");
        expect(verse1.IsFollowedBy(verse2)).to.be.true;
    });

    it('Valid "1CO 2:23" and "1CO 4:1"', () => {
        const verse1 = new Reference(Language.English, "1CO 3:23");
        const verse2 = new Reference(Language.English, "1CO 4:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.true;
    });

    it('Valid "MAT 5:12" and "MAT 5:13"', () => {
        const verse1 = new Reference(Language.English, "MAT 5:12");
        const verse2 = new Reference(Language.English, "MAT 5:13");
        expect(verse1.IsFollowedBy(verse2)).to.be.true;
    });

    it('Valid "ROM 8:28" and "ROM 8:29"', () => {
        const verse1 = new Reference(Language.English, "ROM 8:28");
        const verse2 = new Reference(Language.English, "ROM 8:29");
        expect(verse1.IsFollowedBy(verse2)).to.be.true;
    });

    it('Valid "GEN 1:1" and "GEN 1:2"', () => {
        const verse1 = new Reference(Language.English, "GEN 1:1");
        const verse2 = new Reference(Language.English, "GEN 1:2");
        expect(verse1.IsFollowedBy(verse2)).to.be.true;
    });

    it('Valid "PHP 2:3" and "PHP 2:4"', () => {
        const verse1 = new Reference(Language.English, "PHP 2:3");
        const verse2 = new Reference(Language.English, "PHP 2:4");
        expect(verse1.IsFollowedBy(verse2)).to.be.true;
    });

    it('Valid "1PE 5:8" and "1PE 5:9"', () => {
        const verse1 = new Reference(Language.English, "1PE 5:8");
        const verse2 = new Reference(Language.English, "1PE 5:9");
        expect(verse1.IsFollowedBy(verse2)).to.be.true;
    });

    it('Invalid "HAB 1:16" and "HAB 1:15"', () => {
        const verse1 = new Reference(Language.English, "HAB 1:16");
        const verse2 = new Reference(Language.English, "HAB 1:15");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "1CO 2:23" and "1CO 2:22"', () => {
        const verse1 = new Reference(Language.English, "1CO 3:23");
        const verse2 = new Reference(Language.English, "1CO 3:22");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "1CO 4:1" and "1CO 2:23"', () => {
        const verse1 = new Reference(Language.English, "1CO 4:1");
        const verse2 = new Reference(Language.English, "1CO 3:23");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "MAT 5:13" and "MAT 5:12"', () => {
        const verse1 = new Reference(Language.English, "MAT 5:13");
        const verse2 = new Reference(Language.English, "MAT 5:12");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "ROM 8:29" and "ROM 8:28"', () => {
        const verse1 = new Reference(Language.English, "ROM 8:29");
        const verse2 = new Reference(Language.English, "ROM 8:28");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "GEN 1:2" and "GEN 1:1"', () => {
        const verse1 = new Reference(Language.English, "GEN 1:2");
        const verse2 = new Reference(Language.English, "GEN 1:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "PHP 2:4" and "PHP 2:3"', () => {
        const verse1 = new Reference(Language.English, "PHP 2:4");
        const verse2 = new Reference(Language.English, "PHP 2:3");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "1PE 5:9" and "1PE 5:8"', () => {
        const verse1 = new Reference(Language.English, "1PE 5:9");
        const verse2 = new Reference(Language.English, "1PE 5:8");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "1CO 3:9" and "1CO 3:23"', () => {
        const verse1 = new Reference(Language.English, "1CO 3:9");
        const verse2 = new Reference(Language.English, "1CO 3:23");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "MAT 5:10" and "MAT 6:1"', () => {
        const verse1 = new Reference(Language.English, "MAT 5:10");
        const verse2 = new Reference(Language.English, "MAT 6:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "JHN 3:16" and "JHN 3:18"', () => {
        const verse1 = new Reference(Language.English, "JHN 3:16");
        const verse2 = new Reference(Language.English, "JHN 3:18");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "ROM 5:5" and "ROM 6:1"', () => {
        const verse1 = new Reference(Language.English, "ROM 5:5");
        const verse2 = new Reference(Language.English, "ROM 6:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "GEN 2:4" and "GEN 4:1"', () => {
        const verse1 = new Reference(Language.English, "GEN 2:4");
        const verse2 = new Reference(Language.English, "GEN 4:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "1TH 4:15" and "1TH 5:1"', () => {
        const verse1 = new Reference(Language.English, "1TH 4:15");
        const verse2 = new Reference(Language.English, "1TH 5:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "MAT 7:7" and "LUK 6:38"', () => {
        const verse1 = new Reference(Language.English, "MAT 7:7");
        const verse2 = new Reference(Language.English, "LUK 6:38");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "ACT 2:4" and "ROM 1:16"', () => {
        const verse1 = new Reference(Language.English, "ACT 2:4");
        const verse2 = new Reference(Language.English, "ROM 1:16");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "GAL 5:22" and "EPH 4:1"', () => {
        const verse1 = new Reference(Language.English, "GAL 5:22");
        const verse2 = new Reference(Language.English, "EPH 4:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "1JN 1:5" and "JAS 2:14"', () => {
        const verse1 = new Reference(Language.English, "1JN 1:5");
        const verse2 = new Reference(Language.English, "JAS 2:14");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "1PE 3:9" and "2PE 2:1"', () => {
        const verse1 = new Reference(Language.English, "1PE 3:9");
        const verse2 = new Reference(Language.English, "2PE 2:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "GEN 50:26" and "EXO 1:1"', () => {
        const verse1 = new Reference(Language.English, "GEN 50:26");
        const verse2 = new Reference(Language.English, "EXO 1:1");
        expect(verse1.IsFollowedBy(verse2)).to.be.false;
    });

    it('Invalid "GEN 50:26" and undefined', () => {
        const verse1 = new Reference(Language.English, "GEN 50:26");
        expect(verse1.IsFollowedBy(undefined as unknown as Reference)).to.be
            .false;
    });
});

describe("Unpack", () => {
    it('Unpack "GEN 1:1"', () => {
        const verse = new Reference(Language.English, "GEN 1:1");
        const unpackedVerses = ["GEN:1:1"];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "GEN 1:1-4"', () => {
        const verse = new Reference(Language.English, "GEN 1:1-4");
        const unpackedVerses = ["GEN:1:1", "GEN:1:2", "GEN:1:3", "GEN:1:4"];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "EXO 12:1-3"', () => {
        const verse = new Reference(Language.English, "EXO 12:1-3");
        const unpackedVerses = ["EXO:12:1", "EXO:12:2", "EXO:12:3"];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "MAT 5:1-5"', () => {
        const verse = new Reference(Language.English, "MAT 5:1-5");
        const unpackedVerses = [
            "MAT:5:1",
            "MAT:5:2",
            "MAT:5:3",
            "MAT:5:4",
            "MAT:5:5",
        ];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "LUK 3:4-6"', () => {
        const verse = new Reference(Language.English, "LUK 3:4-6");
        const unpackedVerses = ["LUK:3:4", "LUK:3:5", "LUK:3:6"];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "ROM 8:31-33"', () => {
        const verse = new Reference(Language.English, "ROM 8:31-33");
        const unpackedVerses = ["ROM:8:31", "ROM:8:32", "ROM:8:33"];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "1CO 12:4-6"', () => {
        const verse = new Reference(Language.English, "1CO 12:4-6");
        const unpackedVerses = ["1CO:12:4", "1CO:12:5", "1CO:12:6"];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "REV 21:1-3"', () => {
        const verse = new Reference(Language.English, "REV 21:1-3");
        const unpackedVerses = ["REV:21:1", "REV:21:2", "REV:21:3"];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "PHP 1:3-5"', () => {
        const verse = new Reference(Language.English, "PHP 1:3-5");
        const unpackedVerses = ["PHP:1:3", "PHP:1:4", "PHP:1:5"];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "GEN 1:1-10"', () => {
        const verse = new Reference(Language.English, "GEN 1:1-10");
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
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "EXO 12:1-15"', () => {
        const verse = new Reference(Language.English, "EXO 12:1-15");
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
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "MAT 5:1-12"', () => {
        const verse = new Reference(Language.English, "MAT 5:1-12");
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
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "ROM 8:28-39"', () => {
        const verse = new Reference(Language.English, "ROM 8:28-39");
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
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "1PE 1:1-5"', () => {
        const verse = new Reference(Language.English, "1PE 1:1-5");
        const unpackedVerses = [
            "1PE:1:1",
            "1PE:1:2",
            "1PE:1:3",
            "1PE:1:4",
            "1PE:1:5",
        ];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "LUK 9:1-17"', () => {
        const verse = new Reference(Language.English, "LUK 9:1-17");
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
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "GEN 1:1-3:5"', () => {
        const verse = new Reference(Language.English, "GEN 1:1-3:5");
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
            "GEN:1:11",
            "GEN:1:12",
            "GEN:1:13",
            "GEN:1:14",
            "GEN:1:15",
            "GEN:1:16",
            "GEN:1:17",
            "GEN:1:18",
            "GEN:1:19",
            "GEN:1:20",
            "GEN:1:21",
            "GEN:1:22",
            "GEN:1:23",
            "GEN:1:24",
            "GEN:1:25",
            "GEN:1:26",
            "GEN:1:27",
            "GEN:1:28",
            "GEN:1:29",
            "GEN:1:30",
            "GEN:1:31",
            "GEN:2:1",
            "GEN:2:2",
            "GEN:2:3",
            "GEN:2:4",
            "GEN:2:5",
            "GEN:2:6",
            "GEN:2:7",
            "GEN:2:8",
            "GEN:2:9",
            "GEN:2:10",
            "GEN:2:11",
            "GEN:2:12",
            "GEN:2:13",
            "GEN:2:14",
            "GEN:2:15",
            "GEN:2:16",
            "GEN:2:17",
            "GEN:2:18",
            "GEN:2:19",
            "GEN:2:20",
            "GEN:2:21",
            "GEN:2:22",
            "GEN:2:23",
            "GEN:2:24",
            "GEN:2:25",
            "GEN:3:1",
            "GEN:3:2",
            "GEN:3:3",
            "GEN:3:4",
            "GEN:3:5",
        ];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "GEN 2:7-3:5"', () => {
        const verse = new Reference(Language.English, "GEN 2:7-3:5");
        const unpackedVerses = [
            "GEN:2:7",
            "GEN:2:8",
            "GEN:2:9",
            "GEN:2:10",
            "GEN:2:11",
            "GEN:2:12",
            "GEN:2:13",
            "GEN:2:14",
            "GEN:2:15",
            "GEN:2:16",
            "GEN:2:17",
            "GEN:2:18",
            "GEN:2:19",
            "GEN:2:20",
            "GEN:2:21",
            "GEN:2:22",
            "GEN:2:23",
            "GEN:2:24",
            "GEN:2:25",
            "GEN:3:1",
            "GEN:3:2",
            "GEN:3:3",
            "GEN:3:4",
            "GEN:3:5",
        ];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "GEN 2:7-3:5"', () => {
        const verse = new Reference(Language.English, "GEN 2:7-3:5");
        const unpackedVerses = [
            "GEN:2:7",
            "GEN:2:8",
            "GEN:2:9",
            "GEN:2:10",
            "GEN:2:11",
            "GEN:2:12",
            "GEN:2:13",
            "GEN:2:14",
            "GEN:2:15",
            "GEN:2:16",
            "GEN:2:17",
            "GEN:2:18",
            "GEN:2:19",
            "GEN:2:20",
            "GEN:2:21",
            "GEN:2:22",
            "GEN:2:23",
            "GEN:2:24",
            "GEN:2:25",
            "GEN:3:1",
            "GEN:3:2",
            "GEN:3:3",
            "GEN:3:4",
            "GEN:3:5",
        ];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "ROM 8:28-9:5"', () => {
        const verse = new Reference(Language.English, "ROM 8:28-9:5");
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
            "ROM:9:1",
            "ROM:9:2",
            "ROM:9:3",
            "ROM:9:4",
            "ROM:9:5",
        ];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "1CO 4:7-5:10"', () => {
        const verse = new Reference(Language.English, "1CO 4:7-5:10");
        const unpackedVerses = [
            "1CO:4:7",
            "1CO:4:8",
            "1CO:4:9",
            "1CO:4:10",
            "1CO:4:11",
            "1CO:4:12",
            "1CO:4:13",
            "1CO:4:14",
            "1CO:4:15",
            "1CO:4:16",
            "1CO:4:17",
            "1CO:4:18",
            "1CO:4:19",
            "1CO:4:20",
            "1CO:4:21",
            "1CO:5:1",
            "1CO:5:2",
            "1CO:5:3",
            "1CO:5:4",
            "1CO:5:5",
            "1CO:5:6",
            "1CO:5:7",
            "1CO:5:8",
            "1CO:5:9",
            "1CO:5:10",
        ];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });

    it('Unpack "EPH 1:15-2:10"', () => {
        const verse = new Reference(Language.English, "EPH 1:15-2:10");
        const unpackedVerses = [
            "EPH:1:15",
            "EPH:1:16",
            "EPH:1:17",
            "EPH:1:18",
            "EPH:1:19",
            "EPH:1:20",
            "EPH:1:21",
            "EPH:1:22",
            "EPH:1:23",
            "EPH:2:1",
            "EPH:2:2",
            "EPH:2:3",
            "EPH:2:4",
            "EPH:2:5",
            "EPH:2:6",
            "EPH:2:7",
            "EPH:2:8",
            "EPH:2:9",
            "EPH:2:10",
        ];
        expect(verse.Unpack().map((o) => o.toString())).to.eql(unpackedVerses);
    });
});
