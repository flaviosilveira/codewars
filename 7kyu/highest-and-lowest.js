export class Kata {
  static highAndLow(numbers: string): string {
    const max = numbers.split(' ').map(a => Number(a)).reduce((a,b) => a>b?a:b);
    const min = numbers.split(' ').map(a => Number(a)).reduce((a,b) => a<b?a:b);
    return `${max} ${min}`;
  }
}
