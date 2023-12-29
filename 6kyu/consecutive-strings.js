export function longestConsec(strarr: string[], k: number): string {
  const concats: string[] = [];
  for(let i = 0; i<strarr.length-(k-1) && k > 0 && k <= strarr.length; i++) {
    concats.push(strarr.slice(i, i+k).join(''));
  }
  return concats.length > 0 ? concats.reduce((a,b) => a.length>=b.length?a:b) : '';
}
