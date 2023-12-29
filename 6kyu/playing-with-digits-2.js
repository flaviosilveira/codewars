export class G964 {

  public static digPow = (n: number, p: number) => {
    const str:string = n.toString();

    let res:number = 0;

    for(var i = 0; i<str.length; i++) {
      res += Math.pow(Number(str[i]), p);
      p++;
    }

    for(var j = 0; j<=10000000; j++) {
      if (n*j == res) {
        return j;
      }
    }
    return -1;
  }
}
