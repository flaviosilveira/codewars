function squareDigits(num){
  const toString = num.toString().split('');
  const result = toString.map((n) => Math.pow(parseInt(n), 2));
  return parseInt(result.join(''));
}
