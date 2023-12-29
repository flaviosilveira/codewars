// Function
export default function add(x: number): any {
  var currentSum = x;

  function addF(b:number) {
    currentSum += b;
    return addF;
  }

  addF.toString = function() {
    return currentSum;
  };

  return addF;
}
