export class G964 {

  public static tour = (friends, fTowns, distTable) => {
    // Towns
    const towns = fTowns.reduce((index, town) => {
      index[town[0]] = town[1];
      return index;
    }, []);
    // Distances
    const distances = [];
    for(let i = 0; i < distTable.length; i=i+2) {
      distances[distTable[i]] = distTable[i+1];
    }
    // Calculate Total distance
    let lastKnowDistance = 0;
    return friends.reduce((total, friend, index) => {
      const city = towns[friend];
      if (towns[friends[index+1]]) {
        lastKnowDistance = distances[towns[friends[index+1]]];
        const hypotenuse = (distances[towns[friends[index+1]]] ** 2);
        const side = (distances[city] ** 2);
        return total + Math.sqrt(hypotenuse-side);
      }

      if (index === friends.length-1) {
        return Math.floor(total + lastKnowDistance);
      }

      return Math.floor(total);
    }, distTable[1]);
  }
}
