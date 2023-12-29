export function isIsogram(str: string): boolean{
  if (str == '') {
    return true;
  }

  const s:string = str.toLowerCase();
  const res:string[] = [];

  for(var i = 0; i < s.length; i++) {
    if (res.includes(s[i])) {
      return false;
    }
    res.push(s[i]);
  }

  return true;
}
