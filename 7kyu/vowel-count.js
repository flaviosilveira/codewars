function getCount(str) {
  let count = 0;
  str.split('').map((char) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
      ++count;
    }
  })
  return count;
}
