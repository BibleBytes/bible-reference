<p align="center">
    <a href="https://mybiblebytes.com/opensource">
        <img src="https://github.com/BibleBytes/landing-page/blob/main/favicon/android-chrome-512x512.png" height="128px"/>
        <h1 align="center">Bible Reference</h1>
    </a>
</p>


<p align="center">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/%40biblebytes%2Fbible-reference"/>
    <img src="https://github.com/BibleBytes/bible-reference/actions/workflows/testing.yml/badge.svg"/>
</p>


---

# Overview

**Bible Reference Index** is a Christian Bible reference verse index and index validation system. It provides a standard way to index and reference verses in the Bible. The package is built to address the lack of a standard book abbreviation or Bible reference ID system. 


<br/>


# Installation
To install the package via npm, run:
```bash
npm i @biblebytes/bible-reference
```


<br/>


# Book IDs
This table categorizes the books of the Bible into Old and New Testaments,
providing their standard ID/abbreviations according to the
[Digital Bible Library USX Standard](https://app.thedigitalbiblelibrary.org/static/docs/usx/vocabularies.html).


| Old Testament        | ID    | New Testament        | ID    |
|----------------------|-------|----------------------|-------|
| Genesis              | `GEN` | Matthew              | `MAT` |
| Exodus               | `EXO` | Mark                 | `MRK` |
| Leviticus            | `LEV` | Luke                 | `LUK` |
| Numbers              | `NUM` | John                 | `JHN` |
| Deuteronomy          | `DEU` | Acts                 | `ACT` |
| Joshua               | `JOS` | Romans               | `ROM` |
| Judges               | `JDG` | 1 Corinthians        | `1CO` |
| Ruth                 | `RUT` | 2 Corinthians        | `2CO` |
| 1 Samuel             | `1SA` | Galatians            | `GAL` |
| 2 Samuel             | `2SA` | Ephesians            | `EPH` |
| 1 Kings              | `1KI` | Philippians          | `PHP` |
| 2 Kings              | `2KI` | Colossians           | `COL` |
| 1 Chronicles         | `1CH` | 1 Thessalonians      | `1TH` |
| 2 Chronicles         | `2CH` | 2 Thessalonians      | `2TH` |
| Ezra                 | `EZR` | 1 Timothy            | `1TI` |
| Nehemiah             | `NEH` | 2 Timothy            | `2TI` |
| Esther               | `EST` | Titus                | `TIT` |
| Job                  | `JOB` | Philemon             | `PHM` |
| Psalms               | `PSA` | Hebrews              | `HEB` |
| Proverbs             | `PRO` | James                | `JAS` |
| Ecclesiastes         | `ECC` | 1 Peter              | `1PE` |
| Song of Songs        | `SNG` | 2 Peter              | `2PE` |
| Isaiah               | `ISA` | 1 John               | `1JN` |
| Jeremiah             | `JER` | 2 John               | `2JN` |
| Lamentations         | `LAM` | 3 John               | `3JN` |
| Ezekiel              | `EZK` | Jude                 | `JUD` |
| Daniel               | `DAN` | Revelation           | `REV` |
| Hosea                | `HOS` |                      |       |
| Joel                 | `JOL` |                      |       |
| Amos                 | `AMO` |                      |       |
| Obadiah              | `OBA` |                      |       |
| Jonah                | `JON` |                      |       |
| Micah                | `MIC` |                      |       |
| Nahum                | `NAM` |                      |       |
| Habakkuk             | `HAB` |                      |       |
| Zephaniah            | `ZEP` |                      |       |
| Haggai               | `HAG` |                      |       |
| Zechariah            | `ZEC` |                      |       |
| Malachi              | `MAL` |                      |       |

<br/>


# Reference Class
The `Reference` class is the main component of this package, allowing you to
create and validate Bible references.

Reference ID strings support both book IDs and book names (with either a space or a colon (`:`) before the chapter number). Chapters, verses, and verse ranges are supported. Here are the supported formats...

 - `GEN:1` or `Genesis 1`
 - `GEN:1:2` or `Genesis 1:2`
 - `GEN:1:2-3` or `Genesis 1:2-3`

```typescript
import { Reference, Language } from '@biblebytes/bible-reference';

const ref1 = new Reference(Language.English, "Exodus 2:3");
console.log(ref1.toString()); // EXO:2:3

const ref2 = new Reference(Language.English, "EXO:2:5-10");
console.log(ref2.toString(true)); // Exodus 2:5-10

ref1.Set("MAT:5");
console.log(reg1.getLanguage()); // Language.English
console.log(reg1.getBook());     // Book.Matthew
console.log(reg1.getChapter());  // 5
console.log(reg1.getVerse());    // undefined
console.log(reg1.getVerseEnd()); // undefined

ref1.Set("Matthew 28:19-20");
console.log(reg1.getLanguage()); // Language.English
console.log(reg1.getBook());     // Book.Matthew
console.log(reg1.getChapter());  // 28
console.log(reg1.getVerse());    // 19
console.log(reg1.getVerseEnd()); // 20

```


<br/>


## Structure
```typescript
class Reference {
    constructor(language: Language, buffer: string);
    public set(buffer: string): void;
    public getLanguage(): Language;
    public getBook(): Book;
    public getChapter(): number;
    public getVerse(): number | undefined;
    public getVerseEnd(): number | undefined;
    public unpack(): Reference[];
    public toString(humanReadable?: boolean): string;
    public static build(
        language: Language,
        book: Book,
        chapter: number,
        verse?: number,
        verseEnd?: number,
    ): Reference
}
```


<br/>


## Methods

### constructor
Creates an instance of `Reference`. Throws error if invalid verse.

```typescript
constructor(language: Language, buffer: string)
```

- **language**: The language of the reference.
- **buffer**: The reference string to parse.

**Examples**:
```typescript
const ref1 = new Reference(Language.English, "GEN:1");
const ref2 = new Reference(Language.English, "PSM:23:1");
const ref3 = new Reference(Language.English, "EXO:2:5-9");
```


<br/>


### set
Sets the reference based on the reference string. Throws error if
invalid verse.

```typescript
public set(buffer: string): void
```

- **buffer**: The reference string to parse.

**Examples**:
```typescript
const ref = new Reference(Language.English, "GEN:1");
ref.set("Matthew 5:9");
```


<br/>


### getLanguage
Gets the language for the reference.

```typescript
public getLanguage(): Language
```

- **Returns**: `Language` - The language of the reference.

**Examples**:
```typescript
const ref = new Reference(Language.English, "GEN:1");
ref.getLanguage(); // Language.English
```


<br/>


### getBook
Gets the book of the Bible for the reference.

```typescript
public getBook(): Book
```

- **Returns**: `Book` - The book of the reference.

**Examples**:
```typescript
const ref = new Reference(Language.English, "GEN:1");
ref.getBook(); // Book.Genesis
```


<br/>


### getChapter
Gets the chapter number for the reference.

```typescript
public getChapter(): number
```

- **Returns**: `number` - The chapter number of the reference.

**Examples**:
```typescript
const ref = new Reference(Language.English, "GEN:1");
ref.getChapter(); // 1
```


<br/>


### getVerse
Gets the verse number for the reference.

```typescript
public getVerse(): number | undefined
```

- **Returns**: `number | undefined` - The verse number of the reference, or `undefined` if no verse is provided.

**Examples**:
```typescript
const ref1 = new Reference(Language.English, "GEN:1:2");
ref1.getVerse(); // 2

const ref2 = new Reference(Language.English, "GEN:1");
ref2.getVerse(); // undefined
```


<br/>


### getVerseEnd
Gets the end verse number for the reference.

```typescript
public getVerseEnd(): number | undefined
```

- **Returns**: `number | undefined` - The end verse of the reference, or `undefined` if no verse range is specified.

**Examples**:
```typescript
const ref1 = new Reference(Language.English, "GEN:1:2-3");
ref1.getVerseEnd(); // 3

const ref2 = new Reference(Language.English, "GEN:1:2");
ref2.getVerseEnd(); // undefined
```


<br/>


### unpack
Unpacks a verse range into it's individual verses, returning a list of verses. References can range over both chapters and verses.

```typescript
public Unpack(): Reference[]
```

- **Returns**: a list of reference verses

**Examples**:
```typescript
const ref1 = new Reference(Language.English, `GEN:1`);
ref1.Unpack(); // ["GEN:1:2", "GEN:1:2", ..., "GEN:1:30", "GEN:1:32"]

const ref2 = new Reference(Language.English, `GEN:1:2`);
ref2.Unpack(); // ["GEN:1:2"]

const ref3 = new Reference(Language.English, `GEN:1:2-4`);
ref3.Unpack(); // ["GEN:1:2", "GEN:1:2", "GEN:1:3", "GEN:1:4"]
```


<br/>


### toString
Converts the reference to a string representation.

```typescript
public toString(humanReadable?: boolean): string
```

- **humanReadable**: (optional) If `true`, returns a human-readable string.
- **Returns**: The string representation of the reference.

**Examples**:
```typescript
const ref = new Reference(Language.English, "MAT:5:9-10");
console.log(ref.toString()); // Output: "MAT:5:9:10"
console.log(ref.toString(true)); // Output: "Matthew 5:9-10"
```


<br/>


### build
Builds a reference from the provided properties.

```typescript
public static build(
    language: Language,
    book: Book,
    chapter: number,
    verse?: number,
    verseEnd?: number
): Reference
```

- **language**: `Language` - The language of the reference.
- **book**: `Book` - The book of the reference.
- **chapter**: `number` - The chapter number of the reference.
- **verse**: `number` (Optional) - The verse number of the reference.
- **verseEnd**: `number` (Optional) - The end verse number for a verse range.

- **Returns**: `Reference` - A reference object built from the provided properties.

- **Throws**: `Error` - If the reference is invalid (e.g., missing required components or malformed).

**Examples**:
```typescript
Reference.build(Language.English, Book.Genesis, 1);        // "GEN:1"
Reference.build(Language.English, Book.Genesis, 1, 2);     // "GEN:1:2"
Reference.build(Language.English, Book.Genesis, 1, 2, 3);  // "GEN:1:2-3"
```


<br/>


# GetBook
Retrieves book metadata by ID or name.

```typescript
function GetBook(language: Language, id: number | Book): BookMetadata | undefined
```

- **language**: An enumerated language code.
- **id**: The ID or index of the book to retrieve.
- **Returns**: The metadata of the book if found, otherwise `undefined`.

**Examples**
```typescript
const genesis = GetBook(Language.English, "GEN");
console.log(genesis);
// Output:
// {
//     id: "GEN",
//     name: "Genesis",
//     chapters: [31, 25, ...]
// }

const exodus = GetBook(Language.English, Book.EXO);
console.log(exodus);
// Output:
// {
//     id: "EXO",
//     name: "Exodus",
//     chapters: [22, 25, 22, ...]
// }
```

<br/>


# GetAllBooks

Retrieves book metadata for multiple IDs or names.

```typescript
function GetAllBooks(language: Language, ids?: (number | Book)[] | readonly Book[]): readonly BookMetadata[]
```

- **language**: An enumerated language code.
- **ids**: (optional) An array of IDs or indexes of the books to retrieve.
- **Returns**: An array containing the metadata of the specified books.

**Examples**
```typescript
const books = GetAllBooks(Language.English, ["GEN", "EXO"]);
console.log(books);
// Output:
// [
//     {
//         id: "GEN",
//         name: "Genesis",
//         chapters: [31, 25, 24...]
//     },
//     {
//         id: "EXO",
//         name: "Exodus",
//         chapters: [22, 25, 22...]
//     },
// ]

const books = GetAllBooks(Language.English, BooksOldTestament);
console.log(books);
// Output:
// [
//     {
//         id: "GEN",
//         name: "Genesis",
//         chapters: [31, 25, 24...]
//     },
//     {
//         id: "EXO",
//         name: "Exodus",
//         chapters: [22, 25, 22...]
//     },
//     ...
// ]
```


<br/>


# Language Enumeration
Enumerates the supported languages.

```typescript
enum Language {
    English = "EN",
}
```


<br/>


# Book Enumeration
Enumerates the books of the Bible and assigns each book an ID, regardless
of the language.

```typescript
enum Book {
    Genesis = "GEN",
    Exodus = "EXO",
    // ... other books
    Revelation = "REV",
}
```


<br/>


# Books
`Books` is a constant array that contains all the books of the Bible in a 
standardized format. Each book is represented by its abbreviation as defined in
the `Book` enum.

```typescript
const Books = [
    Book.GEN,
    Book.EXO,
    // ... other books
    Book.REV
]
```


<br/>


# BooksOldTestament
`BooksOldTestament` is a constant array that contains all the books of the Old
Testament. Each book is represented by its abbreviation as defined in the
`Book` enum.

```typescript
const BooksOldTestament = [
    Book.GEN,
    Book.EXO,
    // ... other books
    Book.MAL
]
```


<br/>


# BooksNewTestament
`BooksNewTestament` is a constant array that contains all the books of the New
Testament. Each book is represented by its abbreviation as defined in the
`Book` enum.

```typescript
const BooksNewTestament = [
    Book.MAT,
    Book.MRK,
    // ... other books
    Book.REV
]
```


<br/>


# Metadata
Maps language codes to their corresponding metadata.
```typescript
const Metadata: { [key in Language]: readonly BookMetadata[] } = {
    [Language.English]: Metadata_EN,
};
```


<br/>


# License
This project is distributed under the MIT License.

