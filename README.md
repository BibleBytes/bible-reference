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
## Overview

**Bible Reference Index** is a Christian Bible reference verse index and index validation system. It provides a standard way to index and reference verses in the Bible. The package is built to address the lack of a standard book abbreviation or Bible reference ID system. 


<br/>


## Installation
To install the package via npm, run:
```bash
npm i @biblebytes/bible-reference
```


<br/>


## Book IDs
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


## Reference Class
The `Reference` class is the main component of this package, allowing you to
create and validate Bible references.

Reference ID strings can use a mix of delimiter between sections
(`\s`, `-`, `.`, `:`, `,`) for example, `EXO 2:5-10`, `EXO:2:5:10`,
and `EXO-2:5-10` are all treated the same.

```typescript
import { Reference, Language } from 'bible-reference-index';

// Creating a new reference
const ref1 = new Reference(Language.English);
console.log(ref1.toString()); // Output: "GEN:1:1"

// Creating a reference with a verse range
const ref2 = new Reference(Language.English, "EXO 2:5-10");
console.log(ref2.toString(true)); // Output: "Exodus 2:5-10"

// Creating a reference with mixed delimiters
const ref3 = new Reference(Language.English, "EXO:2:5:10");
console.log(ref3.toString(true)); // Output: "Exodus 2:5-10"

// Setting a new reference
ref1.Set("MAT 5:9");
console.log(ref1.toString()); // Output: "MAT:5:9"

// Setting a reference, mixed delimiters
ref1.Set("MAT.5.9");
console.log(ref1.toString()); // Output: "MAT:5:9"
```


<br/>


### Structure
```typescript
class Reference {
    public language: Language;
    public book: Book;
    public chapter: number;
    public verse: number;
    public chapterEnd?: number;
    public verseEnd?: number;

    constructor(language: Language, reference?: string);
    public Set(reference: string): void;
    public GetError(): string | undefined;
    public toString(pretty?: boolean): string;
}
```


<br/>


### Methods

#### constructor
Creates an instance of `Reference`. Throws error if invalid verse.

```typescript
constructor(language: Language, reference?: string)
```

- **language**: The language of the reference.
- **reference**: (optional) The reference string to parse.

**Examples**:
```typescript
const ref1 = new Reference(Language.English, "GEN 1:1");
const ref2 = new Reference(Language.English, "PSM 23:1-6");
const ref3 = new Reference(Language.English, "EXO 2:5-3:10");

// using any delimiter or mix of delimiters
const ref4 = new Reference(Language.English, "EXO:2:5:3:10");
const ref4 = new Reference(Language.English, "EXO-2-5-3-10");
```


<br/>


#### Set
Sets the reference details by parsing the reference string. Throws error if
invalid verse.

```typescript
public Set(reference: string): void
```

- **reference**: The reference string to parse.

**Examples**:
```typescript
const ref = new Reference(Language.English);
ref.Set("MAT 5:9");
ref.Set("REV 21:3-4");

// using any delimiter or mix of delimiters
ref.Set("MAT:5:9");
ref.Set("REV:21:3-4");
```


<br/>


#### GetError
Checks if the reference is valid and returns the error as a string if the
verse is invalid. For example, this ensures the verse and end of the verse
range are valid.

```typescript
public GetError(): string | undefined
```

- **Returns**: `undefined` if the reference is valid, otherwise returns a string.

**Examples**:
```typescript
const ref = new Reference(Language.English);
ref.Set("MAT 5:9");
ref.GetError(); // undefined
ref.Set("MAT 5:1000");
ref.GetError(); // "Invalid verse number"
ref.Set("MAT 5:9-8");
ref.GetError(); // "Invalid verse end number"
```


<br/>



#### toString
Converts the reference to a string representation.

```typescript
public toString(pretty?: boolean): string
```

- **pretty**: (optional) If `true`, returns a human-readable string.
- **Returns**: The string representation of the reference.

**Examples**:
```typescript
const ref = new Reference(Language.English, "MAT 5:9-10");
console.log(ref.toString()); // Output: "MAT:5:9:10"
console.log(ref.toString(true)); // Output: "MAT 5:9-10"
```


<br/>


## GetBook
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


## GetAllBooks

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


## Language Enumeration
Enumerates the supported languages.

```typescript
enum Language {
    English = "EN",
}
```


<br/>


## Book Enumeration
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


## Books
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


## BooksOldTestament
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


## BooksNewTestament
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


## Metadata
Maps language codes to their corresponding metadata.
```typescript
const Metadata: { [key in Language]: readonly BookMetadata[] } = {
    [Language.English]: Metadata_EN,
};
```


<br/>


### License
This project is distributed under the MIT License.

