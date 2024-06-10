# Bible Reference Index

## Overview

**Bible Reference Index** is a Christian Bible reference verse index and index validation system. It provides a standard way to index and reference verses in the Bible. The package is built to address the lack of a standard book abbreviation or Bible reference ID system. 


<br/>


## Installation
To install the package via npm, run:
```bash
npm install bible-reference-index
```


<br/>


## Book IDs
This table categorizes the books of the Bible into Old and New Testaments,
providing their standard ID/abbreviations for easy reference.

| Old Testament        | ID     | New Testament        | ID     |
|----------------------|--------|----------------------|--------|
| Genesis              | `GEN`  | Matthew              | `MAT`  |
| Exodus               | `EXO`  | Mark                 | `MRK`  |
| Leviticus            | `LEV`  | Luke                 | `LUK`  |
| Numbers              | `NUM`  | John                 | `JHN`  |
| Deuteronomy          | `DEU`  | Acts                 | `ACT`  |
| Joshua               | `JSH`  | Romans               | `ROM`  |
| Judges               | `JDG`  | 1 Corinthians        | `COR1` |
| Ruth                 | `RTH`  | 2 Corinthians        | `COR2` |
| 1 Samuel             | `SAM1` | Galatians            | `GAL`  |
| 2 Samuel             | `SAM2` | Ephesians            | `EPH`  |
| 1 Kings              | `KGS1` | Philippians          | `PHP`  |
| 2 Kings              | `KGS2` | Colossians           | `COL`  |
| 1 Chronicles         | `CHR1` | 1 Thessalonians      | `THE1` |
| 2 Chronicles         | `CHR2` | 2 Thessalonians      | `THE2` |
| Ezra                 | `EZR`  | 1 Timothy            | `TIM1` |
| Nehemiah             | `NEH`  | 2 Timothy            | `TIM2` |
| Esther               | `EST`  | Titus                | `TIT`  |
| Job                  | `JOB`  | Philemon             | `PHM`  |
| Psalms               | `PSM`  | Hebrews              | `HEB`  |
| Proverbs             | `PRV`  | James                | `JAS`  |
| Ecclesiastes         | `ECC`  | 1 Peter              | `PET1` |
| Song of Solomon      | `SOS`  | 2 Peter              | `PET2` |
| Isaiah               | `ISA`  | 1 John               | `JHN1` |
| Jeremiah             | `JER`  | 2 John               | `JHN2` |
| Lamentations         | `LAM`  | 3 John               | `JHN3` |
| Ezekiel              | `EZK`  | Jude                 | `JUD`  |
| Daniel               | `DAN`  | Revelation           | `REV`  |
| Hosea                | `HOS`  |                      |        |
| Joel                 | `JOL`  |                      |        |
| Amos                 | `AMS`  |                      |        |
| Obadiah              | `OBA`  |                      |        |
| Jonah                | `JNA`  |                      |        |
| Micah                | `MIC`  |                      |        |
| Nahum                | `NAH`  |                      |        |
| Habakkuk             | `HAB`  |                      |        |
| Zephaniah            | `ZEP`  |                      |        |
| Haggai               | `HAG`  |                      |        |
| Zechariah            | `ZEC`  |                      |        |
| Malachi              | `MAL`  |                      |        |


<br/>


## Reference Class
The `Reference` class is the main component of this package, allowing you to
create and validate Bible references.

```typescript
import { Reference, Language } from 'bible-reference-index';

// Creating a new reference
const ref1 = new Reference(Language.English);
console.log(ref1.toString()); // Output: "GEN:1:1"

// Creating a reference with a verse range
const ref2 = new Reference(Language.English, "EXO 2:5-10");
console.log(ref2.toString(true)); // Output: "Exodus 2:5-10"

// Setting a new reference
ref1.Set("MAT 5:9");
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
    public verseEnd?: number;

    constructor(language: Language, reference?: string);
    public Set(reference: string): void;
    public IsValid(): boolean;
    public GetError(): string | undefined;
    public toString(pretty?: boolean): string;
}
```


<br/>


### Methods

#### constructor
Creates an instance of `Reference`.

```typescript
constructor(language: Language, reference?: string)
```

- **language**: The language of the reference.
- **reference**: (optional) The reference string to parse.

**Examples**:
```typescript
const ref1 = new Reference(Language.English, "GEN 1:1");
const ref2 = new Reference(Language.English, "EXO 2:5-10");
const ref3 = new Reference(Language.English, "PSM 23:1-6");
```


<br/>


#### Set
Sets the reference details by parsing the reference string.

```typescript
public Set(reference: string): void
```

- **reference**: The reference string to parse.

**Examples**:
```typescript
const ref = new Reference(Language.English);
ref.Set("MAT 5:9");
ref.Set("REV 21:3-4");
```


<br/>


#### IsValid
Checks if the reference is valid. It ensures the verse and end of the verse
range are valid.

```typescript
public IsValid(): boolean
```

- **Returns**: `true` if the reference is valid, otherwise `false`.

**Examples**:
```typescript
const ref = new Reference(Language.English);
ref.Set("MAT 5:9");
ref.IsValid(); // true
ref.Set("MAT 5:1000");
ref.IsValid(); // false
ref.Set("MAT 5:9-8");
ref.IsValid(); // false
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
const Books = [
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
const Books = [
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

