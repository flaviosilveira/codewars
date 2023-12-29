function createPhoneNumber(numbers){
  return `(${numbers.slice(0, 3).toString().replace(/,/g, '')}) ${numbers.slice(3, 6).toString().replace(/,/g, '')}-${numbers.slice(6).toString().replace(/,/g, '')}`;
}
