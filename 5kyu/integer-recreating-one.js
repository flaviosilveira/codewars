export class G964 {

  public static listSquared = (m, n) => {
    const res: Array<number[]> = [];
    for(let i = m; i<=n; i++) {
      const divisors:number[] = [];
      for(let j = 1; j<=i; j++) {
        if(i%j != 0) {
          continue
        }
        divisors.push(j);
      }

      const square = Math.sqrt(divisors.map((d) => d*d).reduce((a,b) => a+b));
      if(square === parseInt(square.toString(), 10)) {
        res.push([i, Math.pow(square, 2)]);
      }
    }
    return res;
  }
}
