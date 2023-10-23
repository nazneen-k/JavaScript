function secondSmallestNumber(arr) {
  let smallest = arr[0];
  let secondSmallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] != smallest && arr[i] < secondSmallest) {
      smallest = arr[i];
    }
  }
  return secondSmallest;
}

console.log(secondSmallestNumber([29, 23, 23, 54, 65, 7, 3]));