function getColor(color1, color2) {
  if (color1 === color2) {
    return color1;
  }

  const colorMap = {
    'RG': 'B',
    'GB': 'R',
    'RB': 'G'
  };

  return colorMap[color1 + color2] || colorMap[color2 + color1];
}

function nextRow(row) {
	if (row.length === 1) {
  	return row;
  }
  
	const rowArray = row.split('');
  let nextRow = '';
	for(let i = 0; i < rowArray.length - 1; i++) {
  	nextRow += getColor(rowArray[i], rowArray[i+1]);
  }
  return nextRow;
}

function triangle(row) {
	let result = nextRow(row);
  while(result.length > 1) {
    result = nextRow(result);
  }
  return result;
}
