export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return '';
  }
  const concats: string[] = [];
  for(let i = 0; i<strarr.length-(k-1); i++) {
    let s: string = '';
    for(let j = 0; j<k; j++) {
      s += strarr[i+j];
    }
    concats.push(s);
  }

  return concats.reduce((a,b) => a.length>=b.length?a:b);
}
