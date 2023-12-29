function reverseWords(str) {
  let word = '';
  let phrase = '';

  for(i = 0; i<str.length; i++) {
    char = str[i];
    if(char !== ' ') {
      word += char;
    }

    if (char === ' ' || i === str.length-1 ) {
      let reversed = '';
      for (let j = word.length - 1; j >= 0; j--) {
        reversed += word[j];
      }
      phrase += reversed;

      if(i !== str.length-1) {
        phrase += char;
      }

      word = '';
      reversed = '';
    }
  }

  return phrase;
}
