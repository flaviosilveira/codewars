export function findEvenIndex(arr: number[]): number
{
  for(let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i).reduce((ac, cv) => ac + cv, 0);
    const right = arr.slice(i+1, arr.length).reduce((ac, cv) => ac + cv, 0);
    if (left == right) return i;
  }
  return -1;
}
