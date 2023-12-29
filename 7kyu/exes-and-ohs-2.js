export function xo(str: string) {
  var x = 0;
  var o = 0;
  if(str == '') {
    return true;
  }

  str.toLowerCase().split("").map((s) => {
    if (s == 'x') {
      x++;
    }
    if (s == 'o') {
      o++;
    }
  });

  return (o > 0 && x > 0) ? o == x : false;
}
