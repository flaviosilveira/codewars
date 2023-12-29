export function descendingOrder(n: number): number {
  const ret = n.toString().split('').sort((a,b) => Number(b)-Number(a)).join('');
  return Number(ret);
}
