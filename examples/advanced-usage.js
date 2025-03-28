const generateTable = require('lightweight-markdown-table');

// Complex dataset with different data types
const inventory = [
  { item: 'Magic Wand', stock: 12, price: 49.99, features: ['Sparkles', 'Reusable'] },
  { item: 'Dragon Egg', stock: 3, price: 199.95, features: ['Rare', 'Incubating'] },
  { item: 'Elixir', stock: 25, price: 14.99, features: ['Health Boost', '24h Duration'] }
];

// Custom headers and alignment
const advancedTable = generateTable(inventory, {
  headers: ['Item Name', 'Stock', 'Price (USD)', 'Special Features'],
  align: ['left', 'center', 'right', 'left']
});

console.log('Advanced Table with Custom Formatting:');
console.log(advancedTable);
console.log('\n');

// Nested JSON structure
const projectData = {
  frontend: {
    components: 45,
    tests: 120,
    coverage: '98%'
  },
  backend: {
    endpoints: 23,
    tests: 87,
    coverage: '95%'
  }
};

console.log('Nested JSON Conversion:');
console.log(generateTable(projectData));
console.log('\n');

// Table with special characters
const specialCharsData = [
  { symbol: 'Pipe | Example', description: 'Should be escaped' },
  { symbol: 'Newline\nExample', description: 'Should be converted to space' }
];

console.log('Special Characters Handling:');
console.log(generateTable(specialCharsData));