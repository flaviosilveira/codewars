export function xo(str: string) {
  const xl = str.toLowerCase().split('').filter((x) => x == 'x').length;
  const ol = str.toLowerCase().split('').filter((o) => o == 'o').length;
  return xl == ol;
}
