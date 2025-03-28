const generateTable = require('lightweight-markdown-table');

// Simple array of objects
const userData = [
  { name: 'John Doe', age: 28, role: 'Developer' },
  { name: 'Jane Smith', age: 32, role: 'Designer' },
  { name: 'Bob Wilson', age: 45, role: 'Manager' }
];

console.log('Basic Table from Objects:');
console.log(generateTable(userData));
console.log('\n');

// Array of arrays
const matrixData = [
  ['ID', 'Status', 'Progress'],
  [1, 'Done', '100%'],
  [2, 'In Progress', '75%'],
  [3, 'Todo', '0%']
];

console.log('Basic Table from Arrays:');
console.log(generateTable(matrixData));