function beginning(xs) {
  for (let i = 1; i <= xs.length; i++) {
    let firstNumber = parseInt(xs.substring(0, i));
    let sequence = '';
    let currentNumber = firstNumber;

    while(sequence.length < xs.length) {
      sequence += currentNumber;
      ++currentNumber;
    }

    if (sequence === xs) {
      return firstNumber;
    }
  }
}
