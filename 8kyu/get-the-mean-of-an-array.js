function getAverage(marks){
  const sum = marks.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return Math.floor(sum / marks.length);
}
