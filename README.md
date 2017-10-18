# name-inspiration-generator

A name inspiration generator based off of random song lyric snippets.

To start using this program, you will need to have Node.js installed and have a developer.musixmatch.com API key (https://developer.musixmatch.com).

**Installation**

```
npm install -g name-inspiration-generator
```

**Set Your API Key**

This will create a file in your home directory called .inspireme-key. If you remove this, you will have to set your API key again.

```
inspireme-setkey ACOOLKEYGOESRIGHTHERE
```

**Usage**

Example (variable length with no reversal)

```
inspireme
```

Example (fixed length with set to no reversal)

```
inspireme --wordcount 8
```

Example (fixed length with reversal)

```
inspireme --wordcount 5 --reversed
```
