import { Book, Language } from "../../resources/index.js";
import { Reference } from "./index.js";
import { expect } from "chai";

describe("Reference", () => {
    it("Default Values", () => {
        const ref = new Reference(Language.English);
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(1);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1:1");
        expect(ref.toString(true)).to.equal("Genesis 1:1");
        expect(ref.IsValid());
    });

    it('Parse Genesis 1:1 ("GEN 1:1")', () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(1);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1:1");
        expect(ref.toString(true)).to.equal("Genesis 1:1");
        expect(ref.IsValid());
    });

    it('Parse Exodus 2:5-10 ("EXO 2:5-10")', () => {
        const ref = new Reference(Language.English, "EXO 2:5-10");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Exodus);
        expect(ref.chapter).to.equal(2);
        expect(ref.verse).to.equal(5);
        expect(ref.verseEnd).to.equal(10);
        expect(ref.toString()).to.equal("EXO:2:5:10");
        expect(ref.toString(true)).to.equal("Exodus 2:5-10");
        expect(ref.IsValid());
    });

    it('Parse Leviticus 3:15 ("LEV 3:15")', () => {
        const ref = new Reference(Language.English, "LEV 3:15");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Leviticus);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(15);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("LEV:3:15");
        expect(ref.toString(true)).to.equal("Leviticus 3:15");
        expect(ref.IsValid());
    });

    it('Parse Numbers 5:6-8 "NUM 5:6-8")', () => {
        const ref = new Reference(Language.English, "NUM 5:6-8");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Numbers);
        expect(ref.chapter).to.equal(5);
        expect(ref.verse).to.equal(6);
        expect(ref.verseEnd).to.equal(8);
        expect(ref.toString()).to.equal("NUM:5:6:8");
        expect(ref.toString(true)).to.equal("Numbers 5:6-8");
        expect(ref.IsValid());
    });

    it('Parse Deuteronomy 10:12 "DEU 10:12")', () => {
        const ref = new Reference(Language.English, "DEU 10:12");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Deuteronomy);
        expect(ref.chapter).to.equal(10);
        expect(ref.verse).to.equal(12);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("DEU:10:12");
        expect(ref.toString(true)).to.equal("Deuteronomy 10:12");
        expect(ref.IsValid());
    });

    it('Parse Joshua 1:1-9 "JSH 1:1-9")', () => {
        const ref = new Reference(Language.English, "JSH 1:1-9");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Joshua);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(1);
        expect(ref.verseEnd).to.equal(9);
        expect(ref.toString()).to.equal("JSH:1:1:9");
        expect(ref.toString(true)).to.equal("Joshua 1:1-9");
        expect(ref.IsValid());
    });

    it('Parse Judges 4:4-5 "JDG 4:4-5")', () => {
        const ref = new Reference(Language.English, "JDG 4:4-5");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Judges);
        expect(ref.chapter).to.equal(4);
        expect(ref.verse).to.equal(4);
        expect(ref.verseEnd).to.equal(5);
        expect(ref.toString()).to.equal("JDG:4:4:5");
        expect(ref.toString(true)).to.equal("Judges 4:4-5");
        expect(ref.IsValid());
    });

    it('Parse Ruth 2:8 "RTH 2:8")', () => {
        const ref = new Reference(Language.English, "RTH 2:8");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Ruth);
        expect(ref.chapter).to.equal(2);
        expect(ref.verse).to.equal(8);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("RTH:2:8");
        expect(ref.toString(true)).to.equal("Ruth 2:8");
        expect(ref.IsValid());
    });

    it('Parse Psalms 23:1-6 ("PSM 23:1-6")', () => {
        const ref = new Reference(Language.English, "PSM 23:1-6");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Psalms);
        expect(ref.chapter).to.equal(23);
        expect(ref.verse).to.equal(1);
        expect(ref.verseEnd).to.equal(6);
        expect(ref.toString()).to.equal("PSM:23:1:6");
        expect(ref.toString(true)).to.equal("Psalms 23:1-6");
        expect(ref.IsValid());
    });

    it('Parse Proverbs 3:5-6 ("PRV 3:5-6")', () => {
        const ref = new Reference(Language.English, "PRV 3:5-6");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Proverbs);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(5);
        expect(ref.verseEnd).to.equal(6);
        expect(ref.toString()).to.equal("PRV:3:5:6");
        expect(ref.toString(true)).to.equal("Proverbs 3:5-6");
        expect(ref.IsValid());
    });

    it('Parse Isaiah 9:6 ("ISA 9:6")', () => {
        const ref = new Reference(Language.English, "ISA 9:6");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Isaiah);
        expect(ref.chapter).to.equal(9);
        expect(ref.verse).to.equal(6);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("ISA:9:6");
        expect(ref.toString(true)).to.equal("Isaiah 9:6");
        expect(ref.IsValid());
    });

    it('Parse Matthew 5:3-12 ("MAT 5:3-12")', () => {
        const ref = new Reference(Language.English, "MAT 5:3-12");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Matthew);
        expect(ref.chapter).to.equal(5);
        expect(ref.verse).to.equal(3);
        expect(ref.verseEnd).to.equal(12);
        expect(ref.toString()).to.equal("MAT:5:3:12");
        expect(ref.toString(true)).to.equal("Matthew 5:3-12");
        expect(ref.IsValid());
    });

    it('Parse John 3:16 ("JHN 3:16")', () => {
        const ref = new Reference(Language.English, "JHN 3:16");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.John);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(16);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("JHN:3:16");
        expect(ref.toString(true)).to.equal("John 3:16");
        expect(ref.IsValid());
    });

    it('Parse Romans 8:28-30 ("ROM 8:28-30")', () => {
        const ref = new Reference(Language.English, "ROM 8:28-30");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Romans);
        expect(ref.chapter).to.equal(8);
        expect(ref.verse).to.equal(28);
        expect(ref.verseEnd).to.equal(30);
        expect(ref.toString()).to.equal("ROM:8:28:30");
        expect(ref.toString(true)).to.equal("Romans 8:28-30");
        expect(ref.IsValid());
    });

    it('Parse Revelation 22:13 ("REV 22:13")', () => {
        const ref = new Reference(Language.English, "REV 22:13");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Revelation);
        expect(ref.chapter).to.equal(22);
        expect(ref.verse).to.equal(13);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("REV:22:13");
        expect(ref.toString(true)).to.equal("Revelation 22:13");
        expect(ref.IsValid());
    });

    it('Parse Isaiah 9:6-7 ("ISA.9.6-7")', () => {
        const ref = new Reference(Language.English, "ISA.9.6-7");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Isaiah);
        expect(ref.chapter).to.equal(9);
        expect(ref.verse).to.equal(6);
        expect(ref.verseEnd).to.equal(7);
        expect(ref.toString()).to.equal("ISA:9:6:7");
        expect(ref.toString(true)).to.equal("Isaiah 9:6-7");
        expect(ref.IsValid());
    });

    it('Parse Jeremiah 29:11 ("JER 29 11")', () => {
        const ref = new Reference(Language.English, "JER 29 11");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Jeremiah);
        expect(ref.chapter).to.equal(29);
        expect(ref.verse).to.equal(11);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("JER:29:11");
        expect(ref.toString(true)).to.equal("Jeremiah 29:11");
        expect(ref.IsValid());
    });

    it('Parse Lamentations 3:22-23 ("LAM,3-22-23")', () => {
        const ref = new Reference(Language.English, "LAM,3-22-23");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Lamentations);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(22);
        expect(ref.verseEnd).to.equal(23);
        expect(ref.toString()).to.equal("LAM:3:22:23");
        expect(ref.toString(true)).to.equal("Lamentations 3:22-23");
        expect(ref.IsValid());
    });

    it('Parse Ezekiel 37:4 ("EZK:37:4")', () => {
        const ref = new Reference(Language.English, "EZK:37:4");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Ezekiel);
        expect(ref.chapter).to.equal(37);
        expect(ref.verse).to.equal(4);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("EZK:37:4");
        expect(ref.toString(true)).to.equal("Ezekiel 37:4");
        expect(ref.IsValid());
    });

    it('Parse Genesis 3:15 ("GEN:3:15")', () => {
        const ref = new Reference(Language.English, "GEN:3:15");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(15);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:3:15");
        expect(ref.toString(true)).to.equal("Genesis 3:15");
        expect(ref.IsValid());
    });

    it('Parse Exodus 4:12-16 ("EXO-4-12-16")', () => {
        const ref = new Reference(Language.English, "EXO-4-12-16");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Exodus);
        expect(ref.chapter).to.equal(4);
        expect(ref.verse).to.equal(12);
        expect(ref.verseEnd).to.equal(16);
        expect(ref.toString()).to.equal("EXO:4:12:16");
        expect(ref.toString(true)).to.equal("Exodus 4:12-16");
        expect(ref.IsValid());
    });

    it('Parse Leviticus 5:6 ("LEV.5.6")', () => {
        const ref = new Reference(Language.English, "LEV.5.6");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Leviticus);
        expect(ref.chapter).to.equal(5);
        expect(ref.verse).to.equal(6);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("LEV:5:6");
        expect(ref.toString(true)).to.equal("Leviticus 5:6");
        expect(ref.IsValid());
    });

    it('Parse Numbers 7:9-10 ("NUM 7 9 10")', () => {
        const ref = new Reference(Language.English, "NUM 7 9 10");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Numbers);
        expect(ref.chapter).to.equal(7);
        expect(ref.verse).to.equal(9);
        expect(ref.verseEnd).to.equal(10);
        expect(ref.toString()).to.equal("NUM:7:9:10");
        expect(ref.toString(true)).to.equal("Numbers 7:9-10");
        expect(ref.IsValid());
    });

    it('Parse Deuteronomy 8:3 ("DEU,8-3")', () => {
        const ref = new Reference(Language.English, "DEU,8-3");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Deuteronomy);
        expect(ref.chapter).to.equal(8);
        expect(ref.verse).to.equal(3);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("DEU:8:3");
        expect(ref.toString(true)).to.equal("Deuteronomy 8:3");
        expect(ref.IsValid());
    });

    it('Parse Joshua 6:20 ("JSH:6:20")', () => {
        const ref = new Reference(Language.English, "JSH:6:20");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Joshua);
        expect(ref.chapter).to.equal(6);
        expect(ref.verse).to.equal(20);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("JSH:6:20");
        expect(ref.toString(true)).to.equal("Joshua 6:20");
        expect(ref.IsValid());
    });

    it('Parse Judges 7:7-9 ("JDG-7-7-9")', () => {
        const ref = new Reference(Language.English, "JDG-7-7-9");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Judges);
        expect(ref.chapter).to.equal(7);
        expect(ref.verse).to.equal(7);
        expect(ref.verseEnd).to.equal(9);
        expect(ref.toString()).to.equal("JDG:7:7:9");
        expect(ref.toString(true)).to.equal("Judges 7:7-9");
        expect(ref.IsValid());
    });

    it('Parse Ruth 1:16 ("RTH.1.16")', () => {
        const ref = new Reference(Language.English, "RTH.1.16");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Ruth);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(16);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("RTH:1:16");
        expect(ref.toString(true)).to.equal("Ruth 1:16");
        expect(ref.IsValid());
    });

    it('Parse 1 Samuel 3:10-14 ("SAM1 3 10 14")', () => {
        const ref = new Reference(Language.English, "SAM1 3 10 14");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Samuel1);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(10);
        expect(ref.verseEnd).to.equal(14);
        expect(ref.toString()).to.equal("SAM1:3:10:14");
        expect(ref.toString(true)).to.equal("1 Samuel 3:10-14");
        expect(ref.IsValid());
    });

    it('Parse Matthew 5:6-7 ("MAT,5-6-7")', () => {
        const ref = new Reference(Language.English, "MAT,5-6-7");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Matthew);
        expect(ref.chapter).to.equal(5);
        expect(ref.verse).to.equal(6);
        expect(ref.verseEnd).to.equal(7);
        expect(ref.toString()).to.equal("MAT:5:6:7");
        expect(ref.toString(true)).to.equal("Matthew 5:6-7");
        expect(ref.IsValid());
    });

    it('Parse John 3:16 ("JHN.3.16")', () => {
        const ref = new Reference(Language.English, "JHN.3.16");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.John);
        expect(ref.chapter).to.equal(3);
        expect(ref.verse).to.equal(16);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("JHN:3:16");
        expect(ref.toString(true)).to.equal("John 3:16");
        expect(ref.IsValid());
    });

    it('Parse Romans 8:28-30 ("ROM:8:28-30")', () => {
        const ref = new Reference(Language.English, "ROM:8:28-30");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Romans);
        expect(ref.chapter).to.equal(8);
        expect(ref.verse).to.equal(28);
        expect(ref.verseEnd).to.equal(30);
        expect(ref.toString()).to.equal("ROM:8:28:30");
        expect(ref.toString(true)).to.equal("Romans 8:28-30");
        expect(ref.IsValid());
    });

    it('Parse 1 Corinthians 13:4-7 ("COR1-13-4-7")', () => {
        const ref = new Reference(Language.English, "COR1-13-4-7");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Corinthians1);
        expect(ref.chapter).to.equal(13);
        expect(ref.verse).to.equal(4);
        expect(ref.verseEnd).to.equal(7);
        expect(ref.toString()).to.equal("COR1:13:4:7");
        expect(ref.toString(true)).to.equal("1 Corinthians 13:4-7");
        expect(ref.IsValid());
    });

    it('Parse Revelation 22:13 ("REV,22-13")', () => {
        const ref = new Reference(Language.English, "REV,22-13");
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Revelation);
        expect(ref.chapter).to.equal(22);
        expect(ref.verse).to.equal(13);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("REV:22:13");
        expect(ref.toString(true)).to.equal("Revelation 22:13");
        expect(ref.IsValid());
    });

    it("Set to Genesis 1:2", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        ref.verse = 2;
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(2);
        expect(ref.verseEnd).to.be.undefined;
        expect(ref.toString()).to.equal("GEN:1:2");
        expect(ref.toString(true)).to.equal("Genesis 1:2");
        expect(ref.IsValid());
    });

    it("Set to Genesis 1:2-5", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        ref.verse = 2;
        ref.verseEnd = 5;
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(2);
        expect(ref.verseEnd).to.equal(5);
        expect(ref.toString()).to.equal("GEN:1:2:5");
        expect(ref.toString(true)).to.equal("Genesis 1:2-5");
        expect(ref.IsValid());
    });

    it("Set to Invalid Genesis 1:2-1", () => {
        const ref = new Reference(Language.English, "GEN 1:1");
        ref.verse = 2;
        ref.verseEnd = 1;
        expect(ref.language).to.equal(Language.English);
        expect(ref.book).to.equal(Book.Genesis);
        expect(ref.chapter).to.equal(1);
        expect(ref.verse).to.equal(2);
        expect(ref.verseEnd).to.equal(1);
        expect(ref.toString()).to.equal("INVALID");
        expect(ref.toString(true)).to.equal("INVALID");
        expect(ref.IsValid()).to.be.false;
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

    it('Invalid format ("GEN 1:1:2:3")', () => {
        expect(() => new Reference(Language.English, "GEN 1:1:2:3")).to.throw();
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
            "Invalid reference: Invalid chapter",
        );
    });

    it('Invalid chapter ("GEN 51:1")', () => {
        expect(() => new Reference(Language.English, "GEN 51:1")).to.throw(
            "Invalid reference: Invalid chapter",
        );
    });

    it('Invalid chapter ("GEN 100:1")', () => {
        expect(() => new Reference(Language.English, "GEN 100:1")).to.throw(
            "Invalid reference: Invalid chapter",
        );
    });

    it('Invalid chapter ("CHR1 0:1")', () => {
        expect(() => new Reference(Language.English, "CHR1 0:1")).to.throw(
            "Invalid reference: Invalid chapter",
        );
    });

    it('Invalid chapter ("CHR1 30:29")', () => {
        expect(() => new Reference(Language.English, "CHR1 30:29")).to.throw(
            "Invalid reference: Invalid chapter",
        );
    });

    it('Invalid chapter ("CHR1 999:1")', () => {
        expect(() => new Reference(Language.English, "CHR1 999:1")).to.throw(
            "Invalid reference: Invalid chapter",
        );
    });

    it('Invalid chapter ("EXO 7:0")', () => {
        expect(() => new Reference(Language.English, "EXO 7:0")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });

    it('Invalid verse ("EXO 7:14")', () => {
        expect(() => new Reference(Language.English, "EXO 7:26")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });

    /**
     *
     * Add more invalid verses
     *
     */
    it('Invalid verse ("SOS 1:100")', () => {
        expect(() => new Reference(Language.English, "SOS 1:100")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });

    it('Invalid verse ("JOB 1:1000")', () => {
        expect(() => new Reference(Language.English, "JOB 1:1000")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });

    it('Invalid verse ("DAN 1:300-301")', () => {
        expect(() => new Reference(Language.English, "DAN 1:300-301")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });

    it('Invalid verse range ("LEV 10:12-11")', () => {
        expect(() => new Reference(Language.English, "LEV 10:12-11")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("LEV 1:1-100")', () => {
        expect(() => new Reference(Language.English, "LEV 1:1-100")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("JOB 1:6-5")', () => {
        expect(() => new Reference(Language.English, "JOB 1:6-5")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });

    it('Invalid verse range ("PSM 1:1-1000")', () => {
        expect(() => new Reference(Language.English, "PSM 1:1-1000")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("PRV 1:10-5")', () => {
        expect(() => new Reference(Language.English, "PRV 1:10-5")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("ISA 1:1-100")', () => {
        expect(() => new Reference(Language.English, "ISA 1:1-100")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("JER 1:1-1")', () => {
        expect(() => new Reference(Language.English, "JER 1:1-1")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("LAM 1:10-5")', () => {
        expect(() => new Reference(Language.English, "LAM 1:10-5")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("EZK 1:10-5")', () => {
        expect(() => new Reference(Language.English, "EZK 1:10-5")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });

    it('Invalid verse range ("HOS 1:3-3")', () => {
        expect(() => new Reference(Language.English, "HOS 1:3-3")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("HOS 1:1-300")', () => {
        expect(() => new Reference(Language.English, "HOS 1:1-300")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("JOL 1:10-2")', () => {
        expect(() => new Reference(Language.English, "JOL 1:10-2")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("OBA 1:50")', () => {
        expect(() => new Reference(Language.English, "OBA 1:50")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });

    it('Invalid verse range ("JNA 1:1-50")', () => {
        expect(() => new Reference(Language.English, "JNA 1:1-50")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("MIC 1:1-17")', () => {
        expect(() => new Reference(Language.English, "MIC 1:1-17")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("NAH 1:10-5")', () => {
        expect(() => new Reference(Language.English, "NAH 1:10-5")).to.throw(
            "Invalid reference: Invalid verse range",
        );
    });

    it('Invalid verse range ("HAB 1:15-5")', () => {
        expect(() => new Reference(Language.English, "HAB 1:15-5")).to.throw(
            "Invalid reference: Invalid verse",
        );
    });
});
