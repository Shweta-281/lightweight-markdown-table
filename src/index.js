const validateInput = (data) => {
  if (!Array.isArray(data) && typeof data !== 'object') {
    throw new Error('Input must be an array or object');
  }
};

const normalizeData = (data) => {
  if (Array.isArray(data)) {
    return data.map(item => 
      Array.isArray(item) ? item : Object.values(item)
    );
  }
  return Object.values(data).map(item => Object.values(item));
};

const generateTable = (data, options = {}) => {
  validateInput(data);
  
  const normalized = normalizeData(data);
  const headers = options.headers || (data[0] && Object.keys(data[0])) || [];
  const alignments = options.align || headers.map((_, i) => {
    const firstRowValue = normalized[0]?.[i];
    return typeof firstRowValue === 'number' ? 'right' : 'left';
  });
  
  const escapeCell = (content) => 
    String(content).replace(/\n/g, ' ').replace(/\|/g, '\\|');
  
  const calculateWidths = () => {
    const widths = [];
  if (headers.length > 0) {
    headers.forEach((header, i) => {
      widths[i] = Math.max(
        widths[i] || 0, 
        escapeCell(header).length
      );
    });
  }
  normalized.forEach(row => {
    row.forEach((cell, i) => {
      const cellContent = escapeCell(cell);
      widths[i] = Math.max(
        widths[i] || 0, 
        cellContent.length
      );
    });
  });

  return widths;
};

const createRow = (cells, isHeader = false) => {
  const widths = calculateWidths();
  return '| ' + cells.map((cell, i) => {
    const content = escapeCell(cell);
    const padding = Math.max(widths[i] - content.length, 0);
    return isHeader 
      ? `${content}${' '.repeat(padding)}`
      : `${content}${' '.repeat(padding)}`;
  }).join(' | ') + ' |';
};

  const createSeparator = () => {
    const widths = calculateWidths();
    return '|' + widths.map((width, i) => {
      const alignment = alignments[i] || 'left';
      const left = alignment === 'left' || alignment === 'center' ? ':' : '-';
    const right = alignment === 'right' || alignment === 'center' ? ':' : '-';
    return `${left}${'-'.repeat(Math.max(width, 1))}${right}`;
  }).join('|') + '|';
  };

  const headerRow = headers.length ? [createRow(headers, true), createSeparator()] : [];
  const bodyRows = normalized.map(row => createRow(row));
  
  return [...headerRow, ...bodyRows].join('\n');
};

module.exports = generateTable;