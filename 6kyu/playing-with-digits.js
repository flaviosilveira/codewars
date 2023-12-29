export class G964 {

  public static digPow = (n: number, p: number) => {
    const res = n.toString().split("").reduce((s, d, i) => s + Math.pow(Number(d), p + i), 0)
    return res % n ? -1 : res / n;
  }
}
