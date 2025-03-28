const { expect } = require('chai');
const generateTable = require('../src/index');

describe('Markdown Table Generator', () => {
  it('should convert array of objects', () => {
    const data = [
      { name: 'Alice', age: 28 },
      { name: 'Bob', age: 32 }
    ];
    const table = generateTable(data);
    expect(table).to.equal(
      '| name  | age |\n' +
      '|:------|----:|\n' +  
      '| Alice | 28  |\n' +
      '| Bob   | 32  |'
    );
  });

  it('should handle custom alignment', () => {
    const data = [[1, 2], [3, 4]];
    const table = generateTable(data, { 
      headers: ['ID', 'Value'],
      align: ['right', 'center']
    });
    expect(table).to.include(
      '| ID | Value |\n' +
      '|---:|:-----:|\n' +  // Correct separator
      '| 1  | 2     |'
    );
  });
});