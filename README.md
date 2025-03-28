# Lightweight Markdown Table Generator

[![npm version](https://img.shields.io/npm/v/lightweight-markdown-table.svg)](https://www.npmjs.com/package/lightweight-markdown-table)

Convert JSON data and arrays to markdown tables with flexible alignment options.

## Installation

```bash
npm install lightweight-markdown-table
```

## Usage

### JavaScript API

```javascript
const generateTable = require('lightweight-markdown-table');

const data = [
  { name: 'Item', price: '$10' },
  { name: 'Another Item', price: '$20' }
];

console.log(generateTable(data, {
  headers: ['Product', 'Price'],
  align: ['left', 'right']
}));
```

### CLI

```bash
md-table -i data.json -H "Name,Age" -a "left,center"
```

### Output

| Product      | Price |
|:-------------|------:|
| Item         |   $10 |
| Another Item |   $20 |
```

## API Documentation

### `generateTable(data, options)`

- `data`: Array of objects or 2D array
- `options`:
  - `headers`: Array of header strings
  - `align`: Array of alignment options ('left', 'center', 'right')

## License

MIT