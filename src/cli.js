#!/usr/bin/env node
const { readFileSync } = require('fs');
const { program } = require('commander');
const generateTable = require('./index');

program
  .version('1.0.0')
  .description('Generate markdown tables from JSON files')
  .option('-i, --input <file>', 'Input JSON file')
  .option('-a, --align <alignments>', 'Comma-separated column alignments')
  .option('-H, --headers <headers>', 'Comma-separated header names');

program.parse(process.argv);

const options = {
  headers: program.opts().headers?.split(','),
  align: program.opts().align?.split(',')
};

try {
  const input = program.opts().input 
    ? JSON.parse(readFileSync(program.opts().input))
    : JSON.parse(process.stdin.read() || '[]');
  
  console.log(generateTable(input, options));
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}