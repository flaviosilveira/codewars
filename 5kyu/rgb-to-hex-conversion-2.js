const hexadecimal = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
};

function checkParameters(r, g, b) {
  if (r < 0) {
    r = 0;
  }
  if (g < 0) {
    g = 0;
  }
  if (b < 0) {
    b = 0;
  }
  if (r > 255) {
    r = 255;
  }
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
  }

  return [r, g, b];
}

function rgb(r, g, b) {
  const parameters = checkParameters(r, g, b);
  const hexa = parameters.map((parameter) => {
    let result = Math.floor(parameter / 16);

    if ( result == 16) {
      result = 15;
    }

    let remain = parameter % 16;
    let hexa = result.toString();

    if (result >= 10 && result <= 15) {
      hexa = hexadecimal[result];
    }

    if ( remain == 0) {
      hexa += remain.toString();
    }

    while (remain > 0) {
      if (remain > 0 && remain < 10) {
        hexa += remain.toString();
        remain = 0;
        break;
      }
      if (remain >= 10 && remain <= 15) {
        hexa += hexadecimal[remain];
        remain = 0;
        break;
      }
      remain = remain % 16;
    }

    if ( hexa === '0') {
      hexa = '00';
    }

    return hexa;
  });

  return hexa.join('');
}
